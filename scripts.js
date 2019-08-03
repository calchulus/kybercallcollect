const app = document.getElementById('root');



//const logo = document.createElement('img');
//logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

//app.appendChild(logo);
app.appendChild(container);
var price_in_eth;
var ethcost;
var amounttosellforeth;
var deductedamt;
var request = new XMLHttpRequest();
request.open('GET', 'https://api.kyber.network/buy_rate?id=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359&qty=1', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
      const card = document.createElement('div');
      card.setAttribute('id', 'price');
      card.setAttribute('class', 'card');
      
      const h1 = document.createElement('h1');
      h1.textContent = "Kyber Price of DAI in ETH";
      const h2 = document.createElement('h2');
      price_in_eth = data.data[0].src_qty[0];
      h2.textContent = price_in_eth;
      console.log(data.data[0].src_qty[0]);
            container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(h2);
  } 
};

var request2 = new XMLHttpRequest();
request2.open('GET', 'https://ethgasstation.info/json/ethgasAPI.json', true);
request2.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request2.status >= 200 && request2.status < 400) {
      setTimeout(2000);
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      const h1 = document.createElement('h1');
      h1.textContent = "CURRENT GAS PRICES";
      const h2 = document.createElement('h2');
      fastgas = data.fast/10;
      lowgas = data.safeLow/10;
      mediumgas = data.average/10  ;
      console.log(fastgas,lowgas, mediumgas);
      h2.textContent = ["Fast, Low, Medium \n" + fastgas,lowgas,mediumgas];
            container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(h2);
//      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      const h3 = document.createElement('h1');
      const DAIgas = 52298;
      ethcost = mediumgas * DAIgas/ 10**8;
      h3.textContent = ethcost;
      console.log(ethcost);
      const textheader = document.createElement("h3");
      textheader.textContent = "Txn cost in ETH";
      card.appendChild(textheader);
      card.appendChild(h3);
       const textheadertwo = document.createElement("h3");
      textheadertwo.textContent = "Txn cost in DAI";
      card.appendChild(textheadertwo);
      const h4 = document.createElement('h1');
amounttosellforeth = ethcost/price_in_eth;
 console.log(ethcost);

      
 console.log(amounttosellforeth);
      h4.textContent = amounttosellforeth;
      card.appendChild(h4);
      
  } 
};


async function requestFunction() {
    
 await request.send();
request2.send();

}

requestFunction();
  
var publicaddress;
function getTorusAddress() {
    const email = document.getElementById("email").value;
    console.log(email);
    console.log("HI");
   torus.getPublicKey(email).then( function(result) {
    console.log(result);
       publicaddress = result;
                                                });

}

var maxethcost;
  
 function getDAIValue() {
const sendamount = document.getElementById('daiamount').value;
        console.log(sendamount)
   deductedamt =   sendamount - amounttosellforeth;
        console.log(deductedamt);
     console.log("PUBLIC ADDRESS " + publicaddress);
     document.getElementById('sendval').innerHTML = "Amount to Receive: " + deductedamt + "<br>" + "Amount in ETH to pay: " + ethcost + "<br>";
    
     maxethcost = Math.max(ethcost, 0.001);
    console.log("WELCOME" + maxethcost);
     widget = document.getElementById("widget");
     widget.setAttribute("href", "https://widget.kyber.network/v0.7.0/?type=pay&mode=popup&receiveAddr="  + publicaddress + "&receiveToken=ETH&receiveAmount=" + maxethcost + "&callback=https%3A%2F%2Fkyberpay-sample.knstats.com%2Fcallback&paramForwarding=true&network=mainnet&lang=en&theme=theme-emerald");
     
// console.log(amounttosellforeth);
//      const newval = document.createElement('div');
//        newval.textContent = deductedamt;
    };

  