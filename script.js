var width = screen.width;
var height = screen.height;


window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises" + width);
    if(width > 425) {
        alertPhone();
 }
}


function alertPhone() {
    console.log("Dette site er kun beregnet til mobile enheder");
    alert("Dette site er kun beregnet til mobile enheder");
}
