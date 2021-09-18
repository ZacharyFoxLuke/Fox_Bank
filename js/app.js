// FLICKITY 
$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
}); 

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
} 
 
