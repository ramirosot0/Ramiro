$(document).ready(function () {

    var APPID = '61eab13313b2b741036897f87076cba8'


    $("#zip").change(function () {

        var zip = $("#zip").val();

        var url = "https://api.openweathermap.org/data/2.5/weather?zip="+zip+",us&APPID="+APPID+"&units=imperial";

        $.ajax({

            method: "GET",
            url: url,
            dataType: "json",
            data: {"zip" : $("#zip").val()},
            success: function (result,status) {

                //alert(zip);
                $("#city").html(result.name);

                $("#description").html(result.weather[0].description);

                $("#temperature").html(result.main.temp + " °F");

                $("#wind").html(result.wind.speed + " mph");

            }

        });//ajax

    });


});