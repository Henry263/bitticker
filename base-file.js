//https://api.coindesk.com/v1/bpi/currentprice.json

$(function() {



    var geocodingAPI = "https://api.coindesk.com/v1/bpi/currentprice.json";

    $.getJSON(geocodingAPI, function(json) {

        console.log(JSON.stringify(json));
        var bitcoinProce = JSON.stringify(json.bpi.USD.rate)

    });



    function myTimer() {
        console.log(' each 1 minute...');

        $.getJSON(geocodingAPI, function(json) {

            console.log(JSON.stringify(json));
            var bitcoinProce = JSON.stringify(json.bpi.USD.rate)

        });
        $.notify("Custom Title", {
            title: "This is current BTC price!" + bitcoinProce
        });
    }

    var myVar = setInterval(myTimer, 60000);

});