// ---------------------------------------- UNIVERSAL ---------------------------------------- //
// ------------------------------------------------------------------------------------------- //


// ---------------------------------------- DESKTOP NAVBAR
document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})


// ---------------------------------------- MOBILE NAVBAR
const toggleButton = document.getElementsByClassName('fa-bars')[0]
const mobileNavBar = document.getElementsByClassName('mobile-navbar-links')[0]

toggleButton.addEventListener('click', () => {
    mobileNavBar.classList.toggle('active')
})



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