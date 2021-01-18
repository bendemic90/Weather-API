$("#find-city").on("click", function(displayWeather) {
    var localStor = [];
    displayWeather.preventDefault();
    var city = $("#city-input").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=53df197488a176e2ad8c359a8a8142e4";
    var clicks = 0;
    clicks++;
    $.ajax({
    url: queryURL,
    }).then(function(response) {
        $("#city-name1").text(response.name);
        $("#today-date").text(moment().format('LLLL'));
    });

});