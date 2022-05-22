const electro = document.getElementById("electro");
const vent = document.getElementById("Vent");
const pack = document.getElementById("pack");
const intro = document.getElementById("intro")
window.onload = function() {Showintro()};
function ShowElectro() {
    electro.style.display= "inline";
    vent.style.display="none";
    pack.style.display="none";
    intro.display="none";
}
function Showvent() {
    electro.style.display= "none";
    vent.style.display="inline";
    pack.style.display="none";
    intro.display="none";
}
function Showpack() {
    electro.style.display= "none";
    vent.style.display="none";
    pack.style.display="inline";
    intro.display="none";
}
function Showintro() {
    electro.style.display= "none";
    vent.style.display="none";
    pack.style.display="none";
    intro.display="inline";
}