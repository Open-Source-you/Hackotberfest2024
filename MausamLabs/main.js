
$(document).ready(function () {
    var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];


    function dateFormat2(d) {
        var t = new Date(d);
        return t.getDate() + ' ' + monthShortNames[t.getMonth()] + ', ' + t.getFullYear();
    }

    $('.date').html(dateFormat2(new Date()))
    let form = $('#myForm')
    form.on('submit', (e) => {
        e.preventDefault()
        let city = $('#city_name').val();
        console.log(city)
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=cb52732cf0e4d3f5a26a051fd79856bf&units=metric")
            .then((result) => result.json())
            .then((data) => {
                console.log(data)
                $('.title_city').html(`<h1 class='title'>${data.weather[0].main}</h1>`)
                $('.image_city').html(`
                            <img src="images/${data.weather[0].icon}.gif" style="margin-left: 0.5rem !important;" class="image is-128x128 image_city">
                        `)
                        console.log(data.weather[0].icon)
                $('.title_temp').html(` ${data.main.temp}°`)
                $('.place').html(`${data.name}`)
                $('.feels').html(`${data.main.feels_like}°`)

            })
    })
});