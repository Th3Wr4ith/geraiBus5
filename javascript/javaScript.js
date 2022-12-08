// Čia rašykite savo JS kodą
const btn = document.querySelector('#btn');
const infoBlock = document.querySelector('.container');

btn.addEventListener('click', (e) => {
    infoBlock.classList.toggle('show-element');
});
