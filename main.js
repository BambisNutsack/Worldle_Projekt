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
    }
};



// verhindert neuladen der seite bei eingabe
var form = document.getElementById("Versuchseingabe");

function handleForm(e) { e.preventDefault(); }
form.addEventListener("submit", handleForm);


// leert die ländereingabe
function EingabeLeeren() {
    LänderEingabe.value = ""
}