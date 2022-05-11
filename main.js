// infopage     --------------------------------------
var Info = document.getElementById("Infopage");
var Main = document.getElementById("Mainpage");
var Z = 0
var dataList = document.getElementById("LänderListe");
var num
var WeiterButton = document.getElementById("WeiterButton");

function InfopageToggle() {
    var infoVisible = Info.style.visibility == "visible";
    Info.style.visibility = infoVisible ? "hidden" : "visible";
    Main.style.visibility = infoVisible ? "visible" : "hidden";


    WeiterButton.style.visibility = "hidden"
    VersuchButton.style.visibility = "hidden"
    LänderEingabe.style.visibility = "hidden"


    if (Info.style.visibility == "hidden" && Erraten == true) {
        WeiterButton.style.visibility = "visible"
    } else if (Info.style.visibility == "hidden") {
        VersuchButton.style.visibility = "visible"
        LänderEingabe.style.visibility = "visible"
    }
};



// svg array
var imgArr = [];
var NameArr = [];
for (var i = 0; i < Länder.length; i++) {
    imgArr[i] = Länder[i].code
    NameArr[i] = Länder[i].name;
};
num = Math.floor(Math.random() * (imgArr.length));


//verschiedene kontinente
const AfrikaButton = document.getElementById("AfrikaButton");
AfrikaButton.addEventListener("click", () => {
    imgArr = [];
    NameArr = [];
    Z = 0
    for (var i = 0; i < Länder.length; i++) {
        if (Länder[i].continent == "Afrika") {
            imgArr[Z] = Länder[i].code
            NameArr[Z] = Länder[i].name;
            Z = Z + 1
        };
    }
    document.getElementById('LänderListe').innerHTML = '';
    num = Math.floor(Math.random() * (imgArr.length));
    LandAuswahl();
    Autocomplete()
});



const AsienButton = document.getElementById("AsienButton");
AsienButton.addEventListener("click", () => {
    imgArr = [];
    NameArr = [];
    Z = 0
    for (var i = 0; i < Länder.length; i++) {
        if (Länder[i].continent == "Asien") {
            imgArr[Z] = Länder[i].code
            NameArr[Z] = Länder[i].name;
            Z = Z + 1
        };
    }
    document.getElementById('LänderListe').innerHTML = '';
    num = Math.floor(Math.random() * (imgArr.length));
    LandAuswahl();
    Autocomplete();
});



const EuropaButton = document.getElementById("EuropaButton");
EuropaButton.addEventListener("click", () => {
    imgArr = [];
    NameArr = [];
    Z = 0
    for (var i = 0; i < Länder.length; i++) {
        if (Länder[i].continent == "Europa") {
            imgArr[Z] = Länder[i].code
            NameArr[Z] = Länder[i].name;
            Z = Z + 1
        };
    }
    document.getElementById('LänderListe').innerHTML = '';
    num = Math.floor(Math.random() * (imgArr.length));
    LandAuswahl();
    Autocomplete();
});



const NordamerikaButton = document.getElementById("NordamerikaButton");
NordamerikaButton.addEventListener("click", () => {
    imgArr = [];
    NameArr = [];
    Z = 0
    for (var i = 0; i < Länder.length; i++) {
        if (Länder[i].continent == "Nordamerika") {
            imgArr[Z] = Länder[i].code
            NameArr[Z] = Länder[i].name;
            Z = Z + 1
        };
    }
    document.getElementById('LänderListe').innerHTML = '';
    num = Math.floor(Math.random() * (imgArr.length));
    LandAuswahl();
    Autocomplete();
});



const SüdamerikaButton = document.getElementById("SüdamerikaButton");
SüdamerikaButton.addEventListener("click", () => {
    imgArr = [];
    NameArr = [];
    Z = 0
    for (var i = 0; i < Länder.length; i++) {
        if (Länder[i].continent == "Südamerika") {
            imgArr[Z] = Länder[i].code
            NameArr[Z] = Länder[i].name;
            Z = Z + 1
        };
    }
    document.getElementById('LänderListe').innerHTML = '';
    num = Math.floor(Math.random() * (imgArr.length));
    LandAuswahl();
    Autocomplete();
});



const OzeanienButton = document.getElementById("OzeanienButton");
OzeanienButton.addEventListener("click", () => {
    imgArr = [];
    NameArr = [];
    Z = 0
    for (var i = 0; i < Länder.length; i++) {
        if (Länder[i].continent == "Ozeanien") {
            imgArr[Z] = Länder[i].code
            NameArr[Z] = Länder[i].name;
            Z = Z + 1
        };
    }
    document.getElementById('LänderListe').innerHTML = '';
    num = Math.floor(Math.random() * (imgArr.length));
    LandAuswahl();
    Autocomplete();
});



const WeltweitButton = document.getElementById("WeltweitButton");
WeltweitButton.addEventListener("click", () => {
    imgArr = [];
    NameArr = [];
    for (var i = 0; i < Länder.length; i++) {
        imgArr[i] = Länder[i].code
        NameArr[i] = Länder[i].name;
    };
    document.getElementById('LänderListe').innerHTML = '';
    num = Math.floor(Math.random() * (imgArr.length));
    LandAuswahl();
    Autocomplete();
});



WeiterButton.addEventListener("click", () => {
    if (WeiterButton) WeiterButton.style.visibility = "hidden";
    if (VersuchButton) VersuchButton.style.visibility = "visible";
    if (LänderEingabe) LänderEingabe.style.visibility = "visible";
    if (Auflösung) Auflösung.innerHTML = "";
    num = Math.floor(Math.random() * (imgArr.length));
    LandAuswahl();
});





// laden der wichtigsten funktionen 
window.onload = Autocomplete(), LandAuswahl();



// länderauswahl        -------------------------------
var num;
var LänderEingabe = document.getElementById("LänderEingabe");
var Auflösung = document.getElementById("Auflösung")

function LandAuswahl() {
    document.canvas.src = "img2/Weltweit/" + imgArr[num] + "/vector.svg";

    while (Länge > 0) {
        Länge = Länge - 1;
        document.getElementById("VersucheTabelle").deleteRow(Länge);
    };

    Erraten = false
};



// datenlisten optionen     --------------------------------------
function Autocomplete() {
    var input = document.getElementById("LänderEingabe");
    input.placeholder = "Ländername";
    for (var i = 0; i < NameArr.length; i++) {
        dataList.innerHTML = dataList.innerHTML +
            "<option value='" + NameArr[i] + "'></option>";
    };
};



// einfügen der eänder in den table
var Länge = 0;
var Erraten = false;
var VersuchButton = document.getElementById("VersuchButton");

function TabellenErstellung() {
    if (Länge < 6 && Erraten == false && NameArr.includes(LänderEingabe.value)) {
        var tabelle = document.getElementById("VersucheTabelle");
        var row = tabelle.insertRow();
        var cell = row.insertCell();
        var Versuch = document.getElementById("LänderEingabe");
        cell.innerHTML = Versuch.value;
        Länge = tabelle.rows.length;

        if (Länge == 6) {
            Erraten = true
            Auflösung.innerHTML = "Es wäre <span style='color:#e5ff00; font-weight: 700;'>" + NameArr[num] + "</span> gewesen!"
        }

        if (Versuch.value == NameArr[num]) {
            Erraten = true;
            row.classList.add("green");
        } else {
            row.classList.add("red");
        };


        cell = row.insertCell();
        cell.innerHTML = ((distance().toFixed(2) > 0) ? distance().toFixed(0) + " km" : "🎉");


        cell = row.insertCell();
        cell.innerHTML = HimmelsRichtungErmitteln();


        WeiterButton.style.visibility = ((Erraten == true || Länge == 6) ? "visible" : "hidden");
        VersuchButton.style.visibility = ((Erraten == true || Länge == 6) ? "hidden" : "visible");
        LänderEingabe.style.visibility = ((Erraten == true || Länge == 6) ? "hidden" : "visible");
        LänderEingabe.value = "";
    };
};



// ermittelt die richtung zwischen den ländern
function HimmelsRichtungErmitteln() {
    lat1 = LatAuswahl();
    lon1 = LonAuswahl();
    lat2 = LatEingabe(LänderEingabe.value);
    lon2 = LonEingabe(LänderEingabe.value);
    NS = lat1 - lat2;
    OW = lon1 - lon2;


    N = ((NS > 1.5) ? "N" : "");
    S = ((NS < -1.5) ? "S" : "");
    O = ((OW > 1.5) ? "O" : "");
    W = ((OW < -1.5) ? "W" : "");
    Richtung = N + S + O + W;


    for (var i = 0; i < Richtungspfeile.length; i++) {
        if (Richtungspfeile[i].Himmelsrichtung === Richtung) {
            Richtung = (Richtungspfeile[i].Pfeil);
        }
    }

    return Richtung;
};



// auslesen der koordinaten
function LatEingabe(a) {
    for (var i = 0; i < Länder.length; i++) {
        if (Länder[i].name === a) {
            return (Länder[i].latitude);
        }
    }
};


function LatAuswahl() {
    for (var i = 0; i < Länder.length; i++) {
        if (Länder[i].name == NameArr[num]) {
            return (Länder[i].latitude);
        }
    }
}



function LonEingabe(a) {
    for (var i = 0; i < Länder.length; i++) {
        if (Länder[i].name === a) {
            return (Länder[i].longitude);
        }
    }
};

function LonAuswahl() {
    for (var i = 0; i < Länder.length; i++) {
        if (Länder[i].name == NameArr[num]) {
            return (Länder[i].longitude);
        }
    }
}



// verhindert neuladen der seite bei eingabe
var form = document.getElementById("Versuchseingabe");

function handleForm(e) { e.preventDefault(); }
form.addEventListener("submit", handleForm);



// leert die ländereingabe
function EingabeLeeren() {
    LänderEingabe.value = "";
};



// koordinaten funktion für entfernung - ignorieren
function distance() {
    lat1 = LatAuswahl();
    lon1 = LonAuswahl();
    lat2 = LatEingabe(LänderEingabe.value);
    lon2 = LonEingabe(LänderEingabe.value);
    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
    lon1 = lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;


    // Haversine formula
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) *
        Math.pow(Math.sin(dlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956 for miles
    let r = 6371;

    // calculate the result
    return (c * r);
};