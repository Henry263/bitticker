//https://api.coindesk.com/v1/bpi/currentprice.json

$(function() {


    var btcUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";

    function myTimer() {
        console.log(' each 1 minute...');
        getBtcPrice(btcUrl, function(returndata) {
            //received data!
            console.log(JSON.stringify(returndata));
            bitcoinProce = JSON.stringify(returndata.bpi.USD.rate);

            $.notify("Bitcoin Ticker", {
                title: "This is current BTC price!" + bitcoinProce
            });
        })

    }

    var myVar = setInterval(myTimer, 60000);

    function getBtcPrice(btcUrl, callback) {
        $.getJSON(btcUrl, function(returndata) {
            callback(returndata);
        });
    }


});
