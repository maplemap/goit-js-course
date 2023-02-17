/* 
    - Основи подій. Створення та видалення слухачів
    - Об'єкт події
    - Скасування поведінки браузера за замовчуванням
    - Події click, change, input, submit, focus, blur


    Створити форму реєстрації користувача за допомогою js де буде 2 поля 
        1. Поле логіна
        2. Поле пароль
        3. Захаркодити вірні логін і пароль в константах
        4. Додати логіку сабміта форми, при сабміті перевіряємо введені логін і пароль.
            1. Якщо логін і пароль співпадають - видаляємо форму з документа і 
            показуємо **h2**  з написом **“Вхід успішний”** - <h2>Вхід успішний</h2>
            2. Якщо логін і пароль не співпадають з даними з констант в пункті 3с - 
            показуємо під формою помилку червоним кольором **“Логін або пароль не вірні”**
*/

const EMAIL = 'admin@mail.ua';
const PASSWORD = '111';

const formRef = document.querySelector('.form');
const errorsRef = formRef.querySelector('.form__errors');
const loginInputRef = formRef.querySelector('input[type="email"]');
const passwordInputRef = formRef.querySelector('input[type="password"]');

loginInputRef.addEventListener('focus', hideErrors);
passwordInputRef.addEventListener('focus', hideErrors);

formRef.addEventListener('submit', (e) => {
  e.preventDefault();
  const {email, password} = e.currentTarget.elements;
  console.log(e.currentTarget.elements);

  if (email.value === EMAIL && password.value === PASSWORD) {
    formRef.remove();
    document.body.insertAdjacentHTML('beforeend', '<h2>Вхід успішний</h2>');
  } else {
    errorsRef.classList.add('form__errors_shown');
  }
});

function hideErrors() {
  errorsRef.classList.remove('form__errors_shown');
}
