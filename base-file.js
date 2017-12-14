//https://api.coindesk.com/v1/bpi/currentprice.json

$(function() {


    var btcUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";
    var allCoins = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,IOT,XRP&tsyms=USD";

    /*
    $.getJSON(allCoins, function(jsonData) {
        console.log(jsonData);
    });
    */


    var counter = 0;
    if (counter == 0) {
        counter++;
        myTimer();
    }

    function myTimer() {
        console.log(' each 1 minute...');
        getBtcPrice(allCoins, function(returndata) {
            //received data!
            //console.log(JSON.stringify(returndata));
            //bitcoinProce = JSON.stringify(returndata.bpi.USD.rate);
            var btcPrice = returndata.BTC.USD
            var ethPrice = returndata.ETH.USD
            var ltcPrice = returndata.LTC.USD
            var iotPrice = returndata.IOT.USD
            var xrpPrice = returndata.XRP.USD


            var btcString = "BTC: " + btcPrice + ",ETH: " + ethPrice;
            var btcString1 = "LTC: " + ltcPrice + ",IOT: " + iotPrice + ",XRP:" + xrpPrice;
            //var btcString = $("BTC: " + btcPrice + ",ETH: " + ethPrice + ",LTC: " + ltcPrice + ",IOT: " + iotPrice + ",XRP:" + xrpPrice);
            console.log(btcString);
            /*
            Push.create("Crypto Prices", {
                body: btcString,
                timeout: 4000,
                onClick: function() {
                    window.focus();
                    this.close();
                }
            });
            */
            var myVar = setTimeout(callChild(), 4500);


            Push.create("Crypto Prices 2", {
                body: btcString1,
                timeout: 4000,
                onClick: function() {
                    window.focus();
                    this.close();
                }
            });

            function callChild() {

                Push.create("Crypto Prices 2", {
                    clearTimeout(myVar);
                    body: btcString1,
                    timeout: 4000,
                    onClick: function() {
                        window.focus();
                        this.close();
                    }
                });
            }



            /*
            var priceElemet = '<div>' +
                '<div class="heading_notify"> Last price of coins</div>' +
                '<div class="each_block"><span class="lbl_style">BTC Price: </span><span class="price_style"> $'+btcPrice+' </span></div>' +
                '<div class="each_block"><span class="lbl_style">ETH Price: </span><span class="price_style"> $'+ethPrice+' </span></div>' +
                '<div class="each_block"><span class="lbl_style">LTC Price: </span><span class="price_style"> $'+ltcPrice+' </span></div>' +
                '<div><span data-notify-text/></div></div>';

            $.notify.addStyle('happyblue', {
                html: priceElemet,
                classes: {
                    base: {
                        "white-space": "nowrap",
                        "background-color": "#d9edff",
                        "padding": "15px",
                        "font-size": "0.8rem",
                        "font-family": "sans-serif",
                        "border-radius": "5px",
                        "color": "#4a4747"
                    },
                    superblue: {
                        "color": "white",
                        "background-color": "blue"
                    }
                }
            });

            $.notify('From: Bit Ticker', {
                style: 'happyblue',
                autoHide: true,
                autoHideDelay: 6000,
            });
            */
        });
    }

    var myVar = setInterval(myTimer, 60000);

    function getBtcPrice(allCoins, callback) {
        $.getJSON(allCoins, function(returndata) {
            callback(returndata);
        });
    }


});