const menuButton = document.querySelector('.header__popup-button');
const menuList = document.querySelector('.header__popup-list');
const bodyEl = document.querySelector('body');

menuButton.addEventListener('click', () => {
    menuList.classList.toggle('show');
    menuButton.classList.toggle('close');
    bodyEl.classList.toggle('stop-scroll');
})