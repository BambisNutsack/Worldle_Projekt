// theme        --------------------------------------
const chk = document.getElementById("chk");
chk.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});



// infopage     --------------------------------------
function InfopageToggle() {
    var Info = document.getElementById("Infopage");
    var Main = document.getElementById("Mainpage");
    if (Info.style.visibility = "hidden") {
        Info.style.visibility = "visible";
        Main.style.visibility = "hidden";
    } else {
        Info.style.visibility = "hidden";
        Main.style.visibility = "visible";
    }
}