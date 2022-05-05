// theme        --------------------------------------
const chk = document.getElementById("chk");
chk.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});



// infopage     --------------------------------------
function InfopageToggle() {
    var Info = document.getElementById("Infopage");
    var Main = document.getElementById("Mainpage")
    var infoVisible = Info.style.visibility == "visible"
    Info.style.visibility = infoVisible ? "hidden" : "visible"
    Main.style.visibility = infoVisible ? "visible" : "hidden"
}



// svg array
var imgArr = []
var NameArr = []
for (var i = 0; i < Länder.length; i++) {
    imgArr[i] = Länder[i].code + ".svg"
    NameArr[i] = Länder[i].name
}

// laden der funktionen 
window.onload = Autocomplete(), LandAuswahl()



// datenlisten optionen     --------------------------------------
function Autocomplete() {
    var dataList = document.getElementById("LänderListe");
    var input = document.getElementById("LänderEingabe");
    input.placeholder = "Ländername";
    for (var i = 0; i < Länder.length; i++) {
        dataList.innerHTML = dataList.innerHTML +
            "<option value='" + Länder[i].name + "'></option>";
    }
}



// länderauswahl        -------------------------------
var num
var WeiterButton = document.getElementById("WeiterButton")
var LänderEingabe = document.getElementById("LänderEingabe");

function LandAuswahl() {
    num = Math.floor(Math.random() * (imgArr.length));
    document.canvas.src = "img/" + imgArr[num];
    while (Länge > 0) {
        Länge = Länge - 1
        document.getElementById("VersucheTabelle").deleteRow(Länge);
    }
    Erraten = false
    if (WeiterButton) WeiterButton.style.visibility = "hidden"
    if (VersuchButton) VersuchButton.style.visibility = "visible"
    if (LänderEingabe) LänderEingabe.style.visibility = "visible"
}



// einfügen der eänder in den table
var Länge = 0
var Erraten = false
var VersuchButton = document.getElementById("VersuchButton")

function TabellenErstellung() {
    if (Länge < 6 && Erraten == false && NameArr.includes(LänderEingabe.value)) {
        var tabelle = document.getElementById("VersucheTabelle");
        var row = tabelle.insertRow();
        var cell = row.insertCell();
        var Versuch = document.getElementById("LänderEingabe")
        cell.innerHTML = Versuch.value
        Länge = tabelle.rows.length

        if (Versuch.value == Länder[num].name) {
            Erraten = true
            row.classList.add("green");
        } else {
            row.classList.add("red");
        }

        WeiterButton.style.visibility = ((Erraten == true || Länge == 6) ? "visible" : "hidden");
        VersuchButton.style.visibility = ((Erraten == true || Länge == 6) ? "hidden" : "visible");
        LänderEingabe.style.visibility = ((Erraten == true || Länge == 6) ? "hidden" : "visible")
        LänderEingabe.value = ""

        // alert(item)
    }
};



// // test zum auslesen der koordinaten
// var item = KoordinatenTest(LänderEingabe.value);

// function KoordinatenTest(a) {
//     for (var i = 0; i < Länder.length; i++) {
//         if (Länder[i].name === a) {
//             return (Länder[i].latitude);
//         }
//     }
// }


// verhindert neuladen der seite bei eingabe
var form = document.getElementById("Versuchseingabe");

function handleForm(e) { e.preventDefault(); }
form.addEventListener("submit", handleForm);


// leert die ländereingabe
function EingabeLeeren() {
    LänderEingabe.value = ""
}


// // // koordinaten funktion für entfernung - ignorieren
// function distance(lat1,
//     lat2, lon1, lon2) {

//     // The math module contains a function
//     // named toRadians which converts from
//     // degrees to radians.
//     lon1 = lon1 * Math.PI / 180;
//     lon2 = lon2 * Math.PI / 180;
//     lat1 = lat1 * Math.PI / 180;
//     lat2 = lat2 * Math.PI / 180;

//     // Haversine formula
//     let dlon = lon2 - lon1;
//     let dlat = lat2 - lat1;
//     let a = Math.pow(Math.sin(dlat / 2), 2) +
//         Math.cos(lat1) * Math.cos(lat2) *
//         Math.pow(Math.sin(dlon / 2), 2);

//     let c = 2 * Math.asin(Math.sqrt(a));

//     // Radius of earth in kilometers. Use 3956
//     // for miles
//     let r = 6371;

//     // calculate the result
//     return (c * r);
// }

// // Driver code   

// let lat1 = 53.32055555555556;
// let lat2 = 53.31861111111111;
// let lon1 = -1.7297222222222221;
// let lon2 = -1.6997222222222223;
// document.write(distance(lat1, lat2,
//     lon1, lon2) + " K.M");