/* # Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach */

/* 
    ## Example 1 - Коллбек функції

    Напишіть наступні функції:

    - `createProduct(obj, callback)` - приймає об'єкт товару без id, а також
      коллбек. Функція створює об'єкт товару, додаючи йому унікальний 
      ідентифікатор у властивість `id` та викликає коллбек передаючи йому 
      створений об'єкт.
    - `logProduct(product)` - колббек приймаючий об'єкт продукту і 
      логуючий його в консоль
    - `logTotalPrice(product)` - колббек, що приймає об'єкт продукту і 
      логіює загальну вартість товару в консоль


    function createProduct(partialProduct, callback) {
    }

    function logProduct(product) {
    }

    function logTotalPrice(product) {
    }

    createProduct({name: '🍎', price: 30, quantity: 3}, logProduct);
    createProduct({name: '🍋', price: 20, quantity: 5}, logTotalPrice);
*/

// function createProduct(partialProduct, callback) {
//   const product = {
//     id: Date.now(),
//     ...partialProduct,
//   };

//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice({price, quantity}) {
//   console.log(price * quantity);
// }

// function logNameAndQuantity({name, quantity}) {
//   console.log(`${name}: ${quantity}`);
// }

// createProduct({name: '🍎', price: 30, quantity: 3}, logProduct);
// createProduct({name: '🍋', price: 20, quantity: 5}, logTotalPrice);
// createProduct({name: '🍋', price: 20, quantity: 5}, logNameAndQuantity);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* 
  ## Example 2 - Коллбек функції

  Додайте об'єкт `account` методи `withdraw(amount, onSuccess, onError)` та
  `deposit(amount, onSuccess, onError)`, де перший параметр це сума операції, а
  другий та третій - коллбеки.

  Метод `deposit` викликає onError якщо amount більше TRANSACTION_LIMIT або менше
  або дорівнює нулю, і onSuccess в іншому випадку.

  Метод `withdraw` викликає onError якщо amount більше TRANSACTION_LIMIT або
  this.balance, і onSuccess в іншому випадку.

  const TRANSACTION_LIMIT = 1000;

  const account = {
    username: 'Jacob',
    balance: 400,
    withdraw(amount, onSuccess, onError) {
    },
    deposit(amount, onSuccess, onError) {
    },
  };

  function handleSuccess(message) {
    console.log(`✅ Success! ${message}`);
  }
  function handleError(message) {
    console.log(`❌ Error! ${message}`);
  }

  account.withdraw(2000, handleSuccess, handleError);
  account.withdraw(600, handleSuccess, handleError);
  account.withdraw(300, handleSuccess, handleError);
  account.deposit(1700, handleSuccess, handleError);
  account.deposit(0, handleSuccess, handleError);
  account.deposit(-600, handleSuccess, handleError);
  account.deposit(600, handleSuccess, handleError);
*/
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Your amount is bigger then ${TRANSACTION_LIMIT}`);
//     } else if (amount <= 0) {
//       onError(`Your amount must be bigger then 0`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Your balance is ${this.balance}`);
//     }
//   },
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Your amount is bigger then ${TRANSACTION_LIMIT}`);
//     } else if (amount > this.balance) {
//       onError('Нот інаф мані');
//     } else {
//       this.balance -= amount;
//       onSuccess(`Your balance is ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);

//
//
//
//
//
//
//
//
//
//

/* 
  ## Example 3 - Коллбек функції

  Напишіть функцію `each(array, callback)`, яка першим параметром очікує
  масив, а другим - функцію, яка застосовується до кожного елемента масиву.
  Функція each повинна повернути новий масив, елементами якого будуть результати
  виклику коллбека.

*/
// function each(array, callback) {
//   const results = [];

//   for (const item of array) {
//     const result = callback(item);
//     results.push(result);
//   }

//   return results;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );

//
//
//
//
//
//
//
//
//
//

/* 
  ## Example 4 - Стрілочні функції

  Виконайте рефакторинг коду за допомогою стрілочних функцій приклад з 1-го завдання 
*/
// const createProduct = (partialProduct, callback) => {
//   const product = {
//     id: Date.now(),
//     ...partialProduct,
//   };

//   callback(product);
// };

// const logProduct = (product) => {
//   console.log(product);
// };

// const logTotalPrice = ({price, quantity}) => {
//   console.log(price * quantity);
// };

// const logNameAndQuantity = ({name, quantity}) => {
//   console.log(`${name}: ${quantity}`);
// };

// createProduct({name: '🍎', price: 30, quantity: 3}, logProduct);
// createProduct({name: '🍋', price: 20, quantity: 5}, logTotalPrice);
// createProduct({name: '🍋', price: 20, quantity: 5}, logNameAndQuantity);

/*
  ## Example 5 - Стрілочні функції

  Виконайте рефакторинг коду за допомогою стрілочних функцій приклад з 2-го завдання
*/
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Your amount is bigger then ${TRANSACTION_LIMIT}`);
//     } else if (amount <= 0) {
//       onError(`Your amount must be bigger then 0`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Your balance is ${this.balance}`);
//     }
//   },
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Your amount is bigger then ${TRANSACTION_LIMIT}`);
//     } else if (amount > this.balance) {
//       onError('Нот інаф мані');
//     } else {
//       this.balance -= amount;
//       onSuccess(`Your balance is ${this.balance}`);
//     }
//   },
// };

// const handleSuccess = (message) => {
//   console.log(`✅ Success! ${message}`);
// };
// const handleError = (message) => {
//   console.log(`❌ Error! ${message}`);
// };

// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);

/* 
  ## Example 6 - Інлайн стрілочні функції

  Виконайте рефакторинг коду за допомогою стрілочних функцій приклад з 3-го завдання
*/
const each = (array, callback) => {
  const results = [];

  for (const item of array) {
    const result = callback(item);
    results.push(result);
  }

  return results;
};

// const multiply3 = function (value) {
//   return value * 2;
// };
// const multiply2 = (value) => {
//   console.log('dfdfdf');
//   if (value > 2) {
//     return value * 3;
//   }
//   return value * 2;
// };
// const multiply = (value) => value * 2;

// const multiply4 = (value) => ({
//   value2: value * 2,
// });

// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));

// console.log(each([64, 49, 36, 25, 16], (value) => value - 10));

// console.log(each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));

/* 
  ## Example 7 - Метод forEach

  Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.

  function logItems(items) {
    console.log(items);
    for (let i = 0; i < items.length; i += 1) {
        console.log(`${i + 1} - ${items[i]}`);
      }
  }

  logItems(['Mango', 'Poly', 'Ajax']);
  logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
*/
// function logItems(items) {
// for (let i = 0; i < items.length; i += 1) {
//   console.log(`${i + 1}: ${items[i]}`);
// }
// items.forEach((item, index, array) => {
//   console.log(`${index + 1}: ${item}`);
// });
// }

// const logger = (item, index) => {
//   console.log(`${index + 1}: ${item}`);
// };

// ['Mango', 'Poly', 'Ajax'].forEach(logger);
// console.log('=======');
// ['🍎', '🍇', '🍑', '🍌', '🍋'].forEach(logger);

//
//
//
//
//
//
//
//
//
//
//
//
//

/*
  ## Example 8 - Метод forEach

  Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.

  function printContactsInfo({names, phones}) {
    const nameList = names.split(',');
    const phoneList = phones.split(',');

    for (let i = 0; i < nameList.length; i += 1) {
      console.log(`${nameList[i]}: ${phoneList[i]}`);
    }
  }

  printContactsInfo({
    names: 'Jacob,William,Solomon,Artemis',
    phones: '89001234567,89001112233,890055566377,890055566300',
  });
*/

// const printContactsInfo = ({names, phones}) => {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   // for (let i = 0; i < nameList.length; i += 1) {
//   //   console.log(`${nameList[i]}: ${phoneList[i]}`);
//   // }

//   nameList.forEach((name, index) => {
//     console.log(`${name}: ${phoneList[index]}`);
//   });
// };

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

//
//
//
//
//
//
//
//
//
//
//
//
//

/*
  ## Example 9 - Метод forEach

  Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.

  function calсulateAverage(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total / args.length;
  }

  console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
  console.log(calсulateAverage(14, 8, 2)); // 8
  console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
*/

// const calсulateAverage = (...args) => {
//   let total = 0;
//   // for (let i = 0; i < args.length; i++) {
//   //   total += args[i];
//   // }

//   args.forEach((candiBober) => {
//     total += candiBober;
//   });

//   return total / args.length;
// };

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

/* Деструктуризація масивів */
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// const [apple, grape, ...all] = fruits;
// console.log(apple);
// console.log(grape);
