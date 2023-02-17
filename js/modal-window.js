/* 
    - Видалення методом remove
    - Події click, keydown


    Створити модальне вікно яке буде відкриватися при кліку на 
    кнопку всередині тега body. Модальне вікно має закриватися при 
    кліку на оверлей, та на іконку хрестика всередині модалки
*/

const ESCAPE_BTN_CODE = 'Escape';

const buttonRef = document.querySelector('.btn.trigger');
const closeButtonRef = document.querySelector('.btn-close.trigger');
const modalWrapperRef = document.querySelector('.modal-wrapper');

buttonRef.addEventListener('click', openModal);
closeButtonRef.addEventListener('click', closeModal);
modalWrapperRef.addEventListener('click', (e) => {
  if (e.currentTarget === e.target) {
    closeModal();
  }
});

function openModal() {
  modalWrapperRef.classList.add('open');
  document.addEventListener('keydown', closeModalByEscape);
}
function closeModal() {
  modalWrapperRef.classList.remove('open');
  document.removeEventListener('keydown', closeModalByEscape);
}

function closeModalByEscape(e) {
  if (e.code === ESCAPE_BTN_CODE) {
    closeModal();
  }
}
