var clicks = 0;
var localSt = [];
var lat = "";
var long = "";
const apiKey = "53df197488a176e2ad8c359a8a8142e4";

$("#clearLocal").on("click", function(clear){
    clear.preventDefault();
    localStorage.clear();
})

$("#recentlocal").text(localStorage.getItem("cityHistory1")
                    + ", "
                    + localStorage.getItem("cityHistory2")
                    + ", "
                    + localStorage.getItem("cityHistory3"));

$("#find-city").on("click", function(displayWeather) {

    displayWeather.preventDefault();
    var city = $("#city-input").val();
    // localStorage.setItem("cityHistory", city);
    // console.log(localStorage.getItem("cityHistory"))
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=53df197488a176e2ad8c359a8a8142e4";
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=53df197488a176e2ad8c359a8a8142e4"
    var uvURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + long + "&appid=" + apiKey;
    clicks++;

    $.ajax({
    url: queryURL,
    }).then(function(response) {
    if (clicks === 1) {
        localStorage.setItem("cityHistory1", city);
        console.log(localStorage.getItem("cityHistory1"))
        $("#city-name1").text(response.name);
        $("#today-date1").text(moment(response.dt, 'X').utcOffset(response.timezone / 3600));
        $("#temperature1").text(response.main.temp);
        $("#humidity1").text(response.main.humidity);
        $("#windspeed1").text(response.wind.speed);
            $.ajax({
                url: forecastURL,
                }).then(function (forecastResponse){
                $("#w1-d2").text(forecastResponse.list[9].main.temp 
                    + ", " 
                    + forecastResponse.list[9].weather[0].main
                    + ", "
                    + forecastResponse.list[9].dt_txt);
                $("#w1-d3").text(forecastResponse.list[17].main.temp
                    + ", " 
                    + forecastResponse.list[17].weather[0].main
                    + ", "
                    + forecastResponse.list[17].dt_txt);
                $("#w1-d4").text(forecastResponse.list[25].main.temp
                    + ", " 
                    + forecastResponse.list[25].weather[0].main
                    + ", "
                    + forecastResponse.list[25].dt_txt);
                $("#w1-d5").text(forecastResponse.list[33].main.temp
                    + ", " 
                    + forecastResponse.list[33].weather[0].main
                    + ", "
                    + forecastResponse.list[33].dt_txt);
            })
            }
    if (clicks === 2) {
        localStorage.setItem("cityHistory2", city);
        console.log(localStorage.getItem("cityHistory2"));
        $("#city-name2").text(response.name);
        $("#today-date2").text(moment(response.dt, 'X').utcOffset(response.timezone / 3600));
        $("#temperature2").text(response.main.temp);
        $("#humidity2").text(response.main.humidity);
        $("#windspeed2").text(response.wind.speed);
            $.ajax({
            url: forecastURL,
        }).then(function (forecastResponse){
            $("#w2-d2").text(forecastResponse.list[9].main.temp 
                + ", " 
                + forecastResponse.list[9].weather[0].main
                + ", "
                + forecastResponse.list[9].dt_txt);
            $("#w2-d3").text(forecastResponse.list[17].main.temp
                + ", " 
                + forecastResponse.list[17].weather[0].main
                + ", "
                + forecastResponse.list[17].dt_txt);
            $("#w2-d4").text(forecastResponse.list[25].main.temp
                + ", " 
                + forecastResponse.list[25].weather[0].main
                + ", "
                + forecastResponse.list[25].dt_txt);
            $("#w2-d5").text(forecastResponse.list[33].main.temp
                + ", " 
                + forecastResponse.list[33].weather[0].main
                + ", "
                + forecastResponse.list[33].dt_txt);
        })
    }
    if (clicks === 3) {
        localStorage.setItem("cityHistory3", city);
        console.log(localStorage.getItem("cityHistory3"))
        $("#city-name3").text(response.name);
        $("#today-date3").text(moment(response.dt, 'X').utcOffset(response.timezone / 3600));
        $("#temperature3").text(response.main.temp);
        $("#humidity3").text(response.main.humidity);
        $("#windspeed3").text(response.wind.speed);
        clicks = 0
        $.ajax({
            url: forecastURL,
        }).then(function (forecastResponse){
            $("#w3-d2").text(forecastResponse.list[9].main.temp 
                + ", " 
                + forecastResponse.list[9].weather[0].main
                + ", "
                + forecastResponse.list[9].dt_txt);
            $("#w3-d3").text(forecastResponse.list[17].main.temp
                + ", " 
                + forecastResponse.list[17].weather[0].main
                + ", "
                + forecastResponse.list[17].dt_txt);
            $("#w3-d4").text(forecastResponse.list[25].main.temp
                + ", " 
                + forecastResponse.list[25].weather[0].main
                + ", "
                + forecastResponse.list[25].dt_txt);
            $("#w3-d5").text(forecastResponse.list[33].main.temp
                + ", " 
                + forecastResponse.list[33].weather[0].main
                + ", "
                + forecastResponse.list[33].dt_txt);
        })
    }
    });

});