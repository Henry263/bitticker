//https://api.coindesk.com/v1/bpi/currentprice.json

$(function() {


    var btcUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";
    var allCoins = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD";

    /*
    $.getJSON(allCoins, function(jsonData) {
        console.log(jsonData);
    });
    */

    function myTimer() {
        console.log(' each 1 minute...');
        getBtcPrice(allCoins, function(returndata) {
            //received data!
            //console.log(JSON.stringify(returndata));
            //bitcoinProce = JSON.stringify(returndata.bpi.USD.rate);
            var btcPrice = returndata.BTC.USD
            var ethPrice = returndata.ETH.USD
            var ltcPrice = returndata.LTC.USD


            var btcString = "BTC:"+btcPrice+"-ETH:" +ethPrice+"-LTC:"+ltcPrice;
            //console.log(notificationString);
        
            $.notify("Bit update", {
                title: btcString
            });
            

        });
    }

    var myVar = setInterval(myTimer, 60000);

    function getBtcPrice(allCoins, callback) {
        $.getJSON(allCoins, function(returndata) {
            callback(returndata);
        });
    }


});