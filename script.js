var clicks = 0;

$("#find-city").on("click", function(displayWeather) {
    var localStor = [];
    displayWeather.preventDefault();
    var city = $("#city-input").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=53df197488a176e2ad8c359a8a8142e4";
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=53df197488a176e2ad8c359a8a8142e4"
    clicks++;
    $.ajax({
    url: queryURL,
    }).then(function(response) {
    if (clicks === 1) {
        console.log(response);
        $("#city-name1").text(response.name);
        $("#today-date1").text(moment(response.dt, 'X').utcOffset(response.timezone / 3600));
        $("#temperature1").text(response.main.temp);
        $("#humidity1").text(response.main.humidity);
        $("#windspeed1").text(response.wind.speed);
            $.ajax({
                url: forecastURL,
            }).then(function (forecastResponse){
                console.log(forecastResponse);
            })
            }
    if (clicks === 2){
        console.log(response);
        $("#city-name2").text(response.name);
        $("#today-date2").text(moment(response.dt, 'X').utcOffset(response.timezone / 3600));
        $("#temperature2").text(response.main.temp);
        $("#humidity2").text(response.main.humidity);
        $("#windspeed2").text(response.wind.speed);
    }
    if (clicks === 3){
        console.log(response);
        $("#city-name3").text(response.name);
        $("#today-date3").text(moment(response.dt, 'X').utcOffset(response.timezone / 3600));
        $("#temperature3").text(response.main.temp);
        $("#humidity3").text(response.main.humidity);
        $("#windspeed3").text(response.wind.speed);
        clicks = 0
    }
    });

});