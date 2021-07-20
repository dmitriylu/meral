
const dropdown = document.querySelector('.dropdown');
const popupLogin = document.querySelector('.popup-login');
const popupClose = document.querySelector('.popup-close')

dropdown.addEventListener('click', () => {
    popupLogin.classList.add('open');
})
popupClose.addEventListener('click', () => {
    popupLogin.classList.remove('open');
    
})
