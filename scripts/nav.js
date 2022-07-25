let button1 = document.querySelector('.menu-button');
let button2 = document.querySelector('.close-button');
let nav = document.querySelector('nav');


button1.addEventListener('click', () => {
    nav.classList.remove('hide');
    button1.classList.add('hide');
})

button2.addEventListener('click', () => {
    nav.classList.add('hide');
    button1.classList.remove('hide');
})