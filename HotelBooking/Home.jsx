import React from "react";
import "./home.css";

import NavBar from "../../components/navBar/NavBar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperty from "../../components/featuredProperty/FeaturedProperty";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h2 className="homeTitle">Browse by property type</h2>
        <PropertyList />
        <h2 className="homeTitle">Homes guests love...!</h2>
        <FeaturedProperty />
        <MailList />
        <Footer />
      </div>
    </>
  );
};

export default Home;
