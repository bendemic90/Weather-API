$("#find-city").on("click", function(event) {
    
    event.preventDefault();
    var city = $("#city-input").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=53df197488a176e2ad8c359a8a8142e4";
    console.log(queryURL);

    $.ajax({
    url: queryURL,
    }).then(function(response) {
        console.log(this);
    console.log(response);
    });

// -----------------------------------------------------------------------

});