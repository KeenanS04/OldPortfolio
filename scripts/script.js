// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
const navitems = document.getElementsByClassName('nav-link');
const navbrand = document.querySelector('.navbar-brand');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('bg-dark');
        navbrand.classList.add('navitemDark')
        for (let i = 0; i < navitems.length; i++) {
            navitems[i].classList.add('navitemDark');
        }
    }
    else {
        header.classList.remove('bg-dark');
        navbrand.classList.remove('navitemDark')
        for (let i = 0; i < navitems.length; i++) {
            navitems[i].classList.remove('navitemDark');
        }
    }
}

// Toggle light/dark mode
function toggleDark() {
    var body = document.body;
    var card = document.getElementsByClassName('card');
    var hr = document.getElementsByTagName('hr');
    for (let i = 0; i < card.length; i++) {
        card[i].classList.toggle('bg-dark');
    }
    for (let i = 0; i < hr.length; i++) {
        hr[i].classList.toggle('solid-dark');
    }
    body.classList.toggle("dark-mode");
  }