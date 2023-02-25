/* 
  - Сhatty events
  - Throttle і debounce подій з бібліотекою Lodash

  Написати форму логіна та пароля де буде відбуватися 
  валідація полів на довжину після закінчення введення тексту. 
  (Використати дебаунс)
*/

const formRef = document.querySelector('.form');

formRef.addEventListener(
  'input',
  _.debounce((e) => {
    validator.checkFieldValue(e.target.name, e.target.value);
  }, 300),
);

const validator = {
  errors: new Set(),
  messages: {
    email: 'Email should be more then 3 symbols',
    password: 'Password should be more then 3 symbols',
  },
  validations: {
    email: (value) => value && value.length > 3,
    password: (value) => value && value.length > 8,
  },
  checkFieldValue(fieldName, value) {
    const isValueValid = this.validations[fieldName](value);
    if (!isValueValid) {
      this.addError(fieldName);
    } else {
      this.removeError(fieldName);
    }
  },
  addError(fieldName) {
    this.errors.add(fieldName);
    this.render();
  },
  removeError(fieldName) {
    this.errors.delete(fieldName);
    this.render();
  },
  render() {
    const errorRef = formRef.querySelector('.form__errors');

    if (this.errors.size > 0) {
      let errorsContent = '';

      this.errors.forEach((error) => {
        errorsContent += `<div>${this.messages[error]}</div>`;
      });
      errorRef.innerHTML = errorsContent;
      errorRef.classList.add('form__errors_shown');
    } else {
      errorRef.classList.remove('form__errors_shown');
      errorRef.innerHTML = '';
    }
  },
};
