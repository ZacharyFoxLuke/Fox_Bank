// ---------------------------------------- UNIVERSAL ---------------------------------------- //
// ------------------------------------------------------------------------------------------- //
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// ---------------------------------------- FLICKITY ---------------------------------------- //
// ------------------------------------------------------------------------------------------ //

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel', {
    // options
});
 
// ---------------------------------------- ANIMATIONS ---------------------------------------- //
// -------------------------------------------------------------------------------------------- //