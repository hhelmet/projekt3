(function() {
    "use strict";
    
    //clock

    function getTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds} ${ampm}`;
        document.getElementById('clock').textContent = timeString;
        setTimeout(getTime, 500); // viivitus 500 milliseekundit
      }
      
      getTime();
      



    // forms
    
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    let e = document.getElementById("delivery");
    e.innerHTML = "0,00 &euro;";
    
    function estimateDelivery(event) {
        event.preventDefault();
        
        let linn = document.getElementById("linn");
        let kingitus = document.getElementById("v1");
        let kontaktivaba = document.getElementById("v2");

        let radio0 = document.getElementById("radio0");
        let radio1 = document.getElementById("radio1");
        let radio2 = document.getElementById("radio2");

        let linnadeHinnad = {
            "tln": 0,
            "trt": 2.5,
            "nrv": 2.5,
            "prn": 3
        };

        let kingitusHind = 5;
        let kontaktivabaHind = 1;


        if (fname.value === "") {
            alert("Palun sisesta eesnimi.");
          } else {
            if (!(/^[a-zA-Z]+$/.test(fname.value))) {
              alert("Sisesta eesnimi tähtedega.");
            }
          }
          
          
        if (lname.value ==="") {
            alert("Palun sisesta perenimi.");
        } else {
            if (!(/^[a-zA-Z]+$/.test(lname.value))) {
                alert("Sisesta perenimi tähtedega.");
            }
        }

        if(!(radio0.checked || radio1.checked || radio2.checked)) {
            alert("Palun valige kohaletoimetamise viis.");
            return;
        }
        
        if (linn.value === "") {
            
            alert("Palun valige linn nimekirjast.");
            
            linn.focus();
            
            return;
        

            
        } else {

            let hind = linnadeHinnad[linn.value];

            if(kingitus.checked) {
                hind += kingitusHind;
            }

            if(kontaktivaba.checked) {
                hind += kontaktivabaHind;
            }
            
            e.innerHTML = hind + " &euro;";
            
        }        
        
        console.log("Tarne hind on arvutatud");
    }
    
})();

// map

let mapAPIKey = "AqLLRE37SJGqIxXEYxezPUa6fF2oCzl3cvG4n05FtFIVBrotBYxchpMYYpwuxBak";


let map, infobox;

function GetMap() {
    
    "use strict";

    let tartuDelta = new Microsoft.Maps.Location(58.38104, 26.71992);
    let tallinnUlikool = new Microsoft.Maps.Location(59.4387, 24.7714);

    let pushpin1 = new Microsoft.Maps.Pushpin(tartuDelta);
    pushpin1.metadata = {
        title: "Tartu Ülikooli Delta õppehoone",
        description: "Tartu Ülikooli Delta keskus on üks põhjala regiooni moodsamaid digitehnoloogilise, analüütilise ja ettevõttlikusmõtte keskuseid."
    };

    let pushpin2 = new Microsoft.Maps.Pushpin(tallinnUlikool);
    pushpin2.metadata = {
        title: "Tallinna Ülikool",
        description: "Tallinna Ülikool on avalik-õiguslik teadusülikool Eestis. Eesti pealinnas Tallinna kesklinnas asuv Tallinna Ülikool on üks kolmest suurimast kõrgkoolist riigis."
    };

    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });

    map.entities.push(pushpin1);
    map.entities.push(pushpin2);

    // Et mõlemad mahuksid ühte vaatesse:
    let locations = [tartuDelta, tallinnUlikool];
    let bounds = Microsoft.Maps.LocationRect.fromLocations(locations);

    map.setView({ bounds: bounds });
}



//function pushpinClicked(e) {

  //if (e.target.metadata) {
      //infobox.setOptions({
          //location: e.target.getLocation(),
          //title: e.target.metadata.title,
          //description: e.target.metadata.description,
         // visible: true
      //});
  //}
//}





// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE

