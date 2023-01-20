/* # Модуль 3. Заняття 1. Об'єкти */

/* 
  ## Example 1 - Основи об'єктів

  Напиши скрипт, який для об'єкта `user`, послідовно:

  - додає поле `mood` зі значенням `'happy'`
  - замінює значення `hobby` на `'skydiving'`
  - замінює значення `premium` на `false`
  - виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи `for...in`
  - виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи
    `Object.keys()` та `for...of`

  ### Код
  const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  }; 
*/

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
// console.log('перед змінами', user);

//додає поле `mood` зі значенням `'happy'`
// user.mood = 'happy';
// const key = 'mood';
// user[key] = 'happy';

const newKey = 'own-phone';
user[newKey] = 'dfsdfsdfs';

//замінює значення `hobby` на `'skydiving'`
// user.hobby = 'skydiving';
user['hobby'] = 'skydiving';
user.premium = false;

// виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи
// `Object.keys()` та `for...of`

// const keys = Object.keys(user);
// console.log(keys);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

/* 
  ## Example 2 - метод Object.values()

  У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
  підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно
  вийти 390. Якщо об'єкт `salaries` порожній, то результат має бути 0.

  ### Код
  const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
  }; 
*/

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 100,
// };
// const keys = Object.keys(salaries);
// let sum = 0;

// for (const key of keys) {
//   // console.log(salaries[key]);
//   sum += salaries[key];
// }

// const values = Object.values(salaries);

// for (const value of values) {
//   sum += value;
// }

// console.log(sum);

/* 
  ## Example 3 - Масив об'єктів

  Напишіть функцію `calcTotalPrice(stones, stoneName)`, яка приймає масив
  об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість
  каміння з таким ім'ям, ціною та кількістю з об'єкта

  ### Код
  const stones = [
    { name: 'Смарагд', price: 1300, quantity: 4 },
    { name: 'Діамант', price: 2700, quantity: 3 },
    { name: 'Сапфір', price: 400, quantity: 7 },
    { name: 'Щебінь', price: 200, quantity: 2 },
  ]; 
*/

// const stones = [
//   {name: 'Смарагд', price: 1300, quantity: 4},
//   {name: 'Діамант', price: 2700, quantity: 3},
//   {name: 'Сапфір', price: 400, quantity: 7},
//   {name: 'Щебінь', price: 200, quantity: 2},
// ];

// const calcTotalPrice = function (stones, stoneName) {
//   console.log('stoneName: ', stoneName);

//   for (const stone of stones) {
//     if (stoneName === stones.name) {
//       console.log(stone);
//       return stone.price * stone.quantity;
//     }
//   }

//   return 0;
// };

// console.log(calcTotalPrice(stones, 'Смарагд'));

/* 
  ## Example 4 - Комплексні завдання

  Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт `account`
  в якому необхідно реалізувати методи для роботи з балансом та історією
  транзакцій. 
*/

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const DEFAULT_NAME = 'name';
const DEFAULT_AMOUNT = 100;
const TIMEOUT = 3000;

const TRANSACTION = {
  DEPOSIT: 'deposit', //покласти
  WITHDRAW: 'withdraw', //зняти
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 * транзакція це {id: '', type: '', amount: ''}
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    return {
      type,
      amount,
      id: this.transactions.length,
    };
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    this.balance += amount;

    const transaction = this.createTransaction(amount, TRANSACTION.DEPOSIT);
    this.transactions.push(transaction);
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      const transaction = this.createTransaction(amount, TRANSACTION.WITHDRAW);
      this.transactions.push(transaction);
    } else {
      console.error('Недостатньо коштів на рахунку');
    }
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  getTransactions() {
    return this.transactions;
  },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }

    console.error(`Транзакція з ID:${id} не знайдена`);
    return null;
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let totalAmount = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        totalAmount += transaction.amount;
      }
    }

    return totalAmount;
  },
};

// account.deposit(120);
// account.withdraw(80);
// account.deposit(400);
// account.withdraw(30);
// account.deposit(300);
// account.deposit(200);
// account.deposit(230);
// account.withdraw(56);

// console.log(account.getTransactionTotal(TRANSACTION.WITHDRAW));

// console.log(account.getTransactionDetails(11));

// const products = [
//   {name: 'Radar', price: 1300, quantity: 4},
//   {name: 'Scanner', price: 2700, quantity: 3},
//   {name: 'Droid', price: 400, quantity: 7},
//   {name: 'Grip', price: 1200, quantity: 9},
// ];

// Напиши функцію calculateTotalPrice(productName),
// яка приймає один параметр productName - назва товару.
// Функція повинна повернути загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// function calculateTotalPrice(productName) {
//   console.log('productName: ', productName);
//   // знайти
//   // перемножити price на quantity
//   // повернути результат

//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price * product.quantity;
//     }
//   }

//   return 0;
// }

// console.log(calculateTotalPrice('Blaster')); // повертає 0
// console.log(calculateTotalPrice('Radar')); // повертає 5200
// console.log(calculateTotalPrice('Droid')); // повертає 2800
// console.log(calculateTotalPrice('Grip')); // повертає 10800
// console.log(calculateTotalPrice('Scanner')); // повертає 8100
