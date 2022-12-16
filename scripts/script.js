// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
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