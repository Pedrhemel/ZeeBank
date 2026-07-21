const menuHamburguer = document.querySelector('.menu-hamburguer');
const menu = document.querySelector('.ul-nav');

menuHamburguer.addEventListener('click', function () {
    menu.classList.toggle('ativo');
});