$(document).ready(function() {

    
    var city= 'chicago';
    //var city = $('#userInput').val();

    var getData = function(latitude, longitude){
        $('#search').on('click', function(){   
            
            $.ajax({
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=13385aa8efdcf8d285b78fd06d4af0b1`,
                method: "GET"
            }).then(function(response) {
                console.log(response);
                var latitude = response.coord.lat
                var longitude = response.coord.lon
                console.log(latitude)
                console.log(longitude)
            });

            return [latitude, longitude]
        });
    }
    

    getData();

    var getForecast = function(){
        $('#search').on('click', function(){   
            var lat = getData[0];
            var lon = getData[1];
            
            $.ajax({
                url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=13385aa8efdcf8d285b78fd06d4af0b1`,
                method: "GET"
            }).then(function(response) {
                console.log(response);
            });
        });
    }

    getForecast();




});