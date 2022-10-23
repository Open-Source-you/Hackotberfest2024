import React, { useState } from "react";
import "./hotel.css";

import Header from "../../components/header/Header";
import NavBar from "../../components/navBar/NavBar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

import {
  faLocationDot,
  faCircleXmark,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import { setDayWithOptions } from "date-fns/fp";
import Reserve from "../../components/reserve/Reserve";

const Hotel = () => {
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);

  const { dates, options } = useContext(SearchContext);
  const { user } = useContext(AuthContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(dates[0].endDate, dates[0].startDate) + 1;

  const navigate = useNavigate();

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, error, loading, reFetch } = useFetch(
    `http://localhost:8800/api/hotels/find/${id}`
  );

  const handleClick = (idx) => {
    setSlideIdx(idx);
    setOpen(true);
  };

  const handleSlider = (direction) => {
    let newIdx;
    if (direction === "l") {
      newIdx = slideIdx === 0 ? data.photos.length - 1 : slideIdx - 1;
    } else {
      newIdx = slideIdx === data.photos.length - 1 ? 0 : slideIdx + 1;
    }
    setSlideIdx(newIdx);
  };

  const handlecc = () => {
    if (user) {
      setOpenModel(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <NavBar />
      <Header type="list" />
      {loading ? (
        "loading... "
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(!open)}
              />
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="arrow"
                onClick={() => handleSlider("l")}
              />
              <div className="sliderWrapper">
                <img src={data.photos[slideIdx]} alt="" className="sliderImg" />
              </div>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="arrow"
                onClick={() => handleSlider("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location - {data.distance} from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            {data.photos && (
              <div className="hotelImages">
                {data.photos.map((photo, i) => (
                  <div className="hotelImgWrapper" key={i}>
                    <img
                      src={photo}
                      onClick={() => handleClick(i)}
                      alt=""
                      className="hotelImg"
                    />
                  </div>
                ))}
              </div>
            )}
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelDetailTitle">{data.title}</h1>
                <p className="hotelDec">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night stay! </h1>
                <span>
                  Located at the hreat of Jaipur,this property has an excellent
                  location and rating of 8.9
                </span>
                <h2>
                  <b> ${data.cheapestPrice * options.room * days} </b>({days}{" "}
                  nights)
                </h2>
                <button onClick={handlecc}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <MailList />
      <Footer />
      {openModel && <Reserve setOpen={setOpenModel} hotelId={id} />}
    </>
  );
};

export default Hotel;
