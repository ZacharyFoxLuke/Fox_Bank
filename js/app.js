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

$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
}); 
 
// ---------------------------------------- ANIMATIONS ---------------------------------------- //
// -------------------------------------------------------------------------------------------- //

$(function () {
    $('a[href*=#]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});