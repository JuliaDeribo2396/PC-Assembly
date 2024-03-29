const modalWindow = document.querySelector('.modal');
const buttonModals = document.querySelectorAll('.modal_button');
const modalClose = document.querySelector('.modal_close');
const body = document.querySelector('body');

buttonModals.forEach((item) => {
    item.addEventListener('click', () =>{
        modalWindow.style.display = 'block';
        body.classList.add('noscroll');
    });
});

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal_inner');

    if(!isModal) {
        modalWindow.style.display = 'none'
    }
});

modalClose.addEventListener('click', () => {
    modalWindow.style.display = 'none';
    body.classList.remove('noscroll');
})