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
            "<option value=" + Länder[i].name + "></option>";
    }
}



// länderauswahl        -------------------------------
var num

function LandAuswahl() {
    num = Math.floor(Math.random() * (imgArr.length));
    document.canvas.src = "img/" + imgArr[num];
    while (Länge > 0) {
        Länge = Länge - 1
        document.getElementById("VersucheTabelle").deleteRow(Länge);
    }
    Erraten = false
}



// Einfügen der Länder in den Table
const LänderEingabe = document.getElementById("LänderEingabe");
var Länge = 0
var Erraten = false
LänderEingabe.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && Länge < 6 && Erraten == false) {
        var tabelle = document.getElementById("VersucheTabelle");
        var row = tabelle.insertRow();
        var cell = row.insertCell();
        var Versuch = document.getElementById("LänderEingabe")
        cell.innerHTML = Versuch.value
        Länge = tabelle.rows.length
        if (Versuch.value == Länder[num].name) {
            alert("richtig es ist " + Länder[num].name)
            Erraten = true
        } else {
            alert("falsch es ist " + Länder[num].name)
                // row.cell[i].style.backgroundColor = "red";
        }
    }
});