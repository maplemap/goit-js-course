/* # Модуль 5. Заняття 9. Контекст виклику функції та this */

/* 
  ## Example 1 - Майстерня коштовностей

  Напишіть метод `calcTotalPrice(stoneName)`, який приймає назву каменю і
  розраховує та повертає загальну вартість каменів з таким ім'ям - ціною та
  кількістю з властивості `stones`.


  const chopShop = {
    stones: [
      { name: 'Emerald', price: 1300, quantity: 4 },
      { name: 'Diamond', price: 2700, quantity: 3 },
      { name: 'Sapphire', price: 1400, quantity: 7 },
      { name: 'Ruby', price: 800, quantity: 2 },
    ],
    calcTotalPrice(stoneName) {},
  };

  console.log(chopShop.calcTotalPrice('Emerald')); // 5200
  console.log(chopShop.calcTotalPrice('Diamond')); // 8100
  console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
  console.log(chopShop.calcTotalPrice('Ruby')); // 1600
*/
// const chopShop = {
//   stones: [
//     {name: 'Emerald', price: 1300, quantity: 4},
//     {name: 'Diamond', price: 2700, quantity: 3},
//     {name: 'Sapphire', price: 1400, quantity: 7},
//     {name: 'Ruby', price: 800, quantity: 2},
//   ],
//   calcTotalPrice(stoneName) {
//     console.log('запустилась');
//     console.log(this);
//     const {price, quantity} = this.stones.find(({name}) => name === stoneName);
//     return price * quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600

/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
  ## Example 2 - Телефонна книга

  Виконайте рефакторинг методів об'єкту `phonebook` щоб код запрацював.

  const phonebook = {
    contacts: [],
    add(contact) {
      const newContact = {
        list: 'default',
        ...contact,
        id: generateId(),
        createdAt: getDate(),
      };
      contacts.push(newContact);
    },
    generateId() {
      return '_' + Math.random().toString(36).slice(2, 9);
    },
    getDate() {
      return Date.now();
    },
  };

  phonebook.add({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  });
  phonebook.add({
    name: 'Poly',
    email: 'poly@hotmail.com',
  });
*/

// const phonebook = {
//   contacts: [],

//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },

//   generateId() {
//     return '_' + Math.random().toString(36).slice(2, 9);
//   },

//   getDate() {
//     return Date.now();
//   },
// };

// phonebook.add({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// });
// phonebook.add({
//   name: 'Poly',
//   email: 'poly@hotmail.com',
// });

// console.dir(phonebook.contacts);

// console.dir(phonebook.contacts);
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
  ## Example 3 - Калькулятор

  Створіть об'єкт `calculator` з трьома методами:

  - `read(a, b)`- приймає два значення та зберігає їх як властивості об'єкта.
  - `add()` - повертає суму збережених значень.
  - `mult()` - перемножує збережені значення та повертає результат.


  const calculator = {};
*/
const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },

  add() {
    const foo = () => {
      console.log(this);
    };
    foo();
    return this.a + this.b;
  },

  mult() {
    return this.a * this.b;
  },
};

calculator.read(1, 2);
calculator.add();

// const {read, add, mult} = calculator;
// call
// read.call(calculator, ...[2, 3]);
// console.log(add.call(calculator));
// console.log(mult.call(calculastor));

//bind
// const bindedRead = read.bind(calculator);
// bindedRead(26767, 567567);

// const bindedAdd = add.bind(calculator);
// console.log(bindedAdd());

const makeSomething = function (a, b) {
  console.log(a, b);
  console.log(this);
};

// call, apply -- викликаються миттєво
// makeSomething.call(calculator, 1, 2);
// makeSomething.apply(calculator, [1, 2]);

//bind -- повертає функцію як результат, яку можна викликати пізніше
// const bindedMakeSomething = makeSomething.bind(calculator);
// bindedMakeSomething(1, 2);
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
*/
// this у глобальній області видимості - undefined
// const makeSomething = function (params) {
//   console.log(this);
// };

// makeSomething();

// this в методі об'єкта - some
const some = {
  doSome: makeSomething,
};
// some.doSome();

const {doSome} = some;
// doSome();

// some.do();

// this у глобальній області видимості - undefined

//this в callback-функціях - undefined

//this у стрілочних функціях - undefined
