const nav = document.getElementById('navbar');
const footer = document.getElementById('footer');
const background = document.getElementById('background');
const container = document.getElementById('container-body');
const bus = document.getElementById('Bus');
const logo = document.getElementById('Logo');
const darklogo = document.getElementById('DarkLogo');
const navtext = document.getElementsByClassName('nav-item');
function Darken() {
    darklogo.style.display="inline";
    logo.style.display="none";
    nav.style.backgroundColor = "#2e2e2e";
    nav.style.color="white";
    nav.style.BorderBottom = "3px solid #000000";
    footer.style.backgroundColor="#2e2e2e";
    footer.style.color="white";
    background.style.background="linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(111,111,111,1) 10%, rgba(111,111,111,1) 90%, rgba(36,36,36,1) 100%)";
    container.style.backgroundColor = "#999999";
    container.style.borderColor = "black";
    container.style.boxShadow = "0px 0px 17px 5px black";
    bus.style.borderColor = "black";
    bus.style.boxShadow = "0px 0px 17px 5px black";
    navtext.style.color = "white";
}
function Lighten() {
    darklogo.style.display="none";
    logo.style.display="inline";
    nav.style.backgroundColor = "#c2b8ff";
    nav.style.color="white";
    nav.style.borderbottom = "3px solid #5D5F94";
    footer.style.backgroundColor="#c2b8ff";
    footer.style.color="Black";
    background.style.background="linear-gradient(90deg, rgba(194,194,194,1) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 90%, rgba(194,194,194,1) 100%)";
    container.style.backgroundColor = "#F9F8FF";
    container.style.borderColor = "#5D5F94";
    container.style.boxShadow = "0px 7px 19px 11px #5D5F94";
    bus.style.borderColor = "#5D5F94";
    bus.style.boxShadow = "0px 0px 17px 5px #5D5F94";
}