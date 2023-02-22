/* 
  - Спливання подій
  - Делегування подій

  Створити калькулятор вартості продукту взалежності від ціни. 
    При роботі з подіями використовувати делегування.

  Вимоги:
  - Відрендерити всю розмітку через JS +++
  - Кольорова підказка інпута №2 має змінювати своє значення  
    при перетягувані повзунка. +++
  - При змінні данних в інпуті №1 чи №2 автоматично 
     має перераховуватися загальна вартість
  - Загальна сума відображається з копійками (2 знаки після коми)
  - Завжди має відображатися валюта - гривня
  - При завантаженні сторінки скрипт має автоматично розрахувати вартість на основі 
    данних за замовчуванням які ви встановите в розмітці.

    <div class="container">
    <h2 class="title">Скільки коштує мясо на шашлики?</h2>
    <form action="#" class="form">
      <label for="price">Ціна грн</label>
      <input type="text" id="price" name="price" value="50">
      <label for="quantity">Кількість<span class="amount">1</span>кг</label>
      <input type="range" id="quantity" name="quantity" value="1" min="1", max="20">
    </form>
    <p class="text-right total">0</p>
    </div>
*/

document.body.insertAdjacentHTML(
  'beforeend',
  `<div class="container">
    <h2 class="title">Скільки коштує мясо на шашлики?</h2>
    <form action="#" class="form">
      <label for="price">Ціна грн</label>
      <input type="text" id="price" name="price" value="89">
      <label for="quantity">Кількість<span class="amount">1</span>кг</label>
      <input type="range" id="quantity" name="quantity" value="1" min="1", max="20">
    </form>
    <p class="text-right"><span class="total">0</span> грн</p>
  </div>
`,
);

const formRef = document.querySelector('form.form');

formRef.addEventListener('input', (e) => {
  calculateTotalPrice();

  if (e.target.id === 'quantity') {
    updateAmount(e.target.value);
  }
});

calculateTotalPrice();

function updateAmount(value) {
  const amountRef = document.querySelector('form .amount');

  amountRef.textContent = value;
}

function calculateTotalPrice() {
  const priceRef = document.querySelector('form #price');
  const quantityRef = document.querySelector('form #quantity');
  const totalRef = document.querySelector('.container .total');

  const price = parseFloat(priceRef.value);
  const quantity = Number(quantityRef.value);

  totalRef.textContent = (price * quantity).toFixed(2);
}
