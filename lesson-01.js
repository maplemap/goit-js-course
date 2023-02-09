/* 
  hoisting (Підняття)
  https://frontend-stuff.com/blog/hoisting/
  */
// name();

// Function Declaration
function name(params) {
  console.log('dfdfd');
}

// Function Expression
const name2 = function (params) {};

// name2();

/*
  Замикання
  https://uk.javascript.info/closure
*/

const foo1 = function () {
  let sum = 10;

  return function (number) {
    return sum + number;
  };
};

const sum = foo1();
// console.log(sum(100));

function getCounter() {
  let counter = 0;

  return function () {
    return counter++;
  };
}
let count = getCounter();

// console.log(count());

function makeSizer(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);

// console.log(size12);
// console.log(size14);

/*
  Дескриптор властивостей об'єкта.
*/

// const user = {
//   name: 'John',
// };

// const descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// console.log(descriptor);

/*
    Immediately Invoked Function Expression
*/
(function foo(params) {
  // console.log('foo');
})();

/*
  Що означає глибоке та поверхневе копіювання об'єкту? Де і як його застосовують?
*/

// const user = {
//   name: 'Bob',
//   friends: ['John', 'Nick'],
// };
// console.log(user);

// const user2 = {...user};
// user2.name = 'Polly';
// user2.friends[0] = 'Somebody';

// console.log(user2.friends[0]); // user2
// console.log(user.friends[0]); // user

/*
  можете пояснити цей код, незрозуміла  частина з getTagStats
*/
const tweets = [
  {id: '000', likes: 5, tags: ['js', 'nodejs']},
  {id: '001', likes: 2, tags: ['html', 'css']},
  {id: '002', likes: 17, tags: ['html', 'js', 'nodejs']},
  {id: '003', likes: 8, tags: ['css', 'react']},
  {id: '004', likes: 0, tags: ['js', 'nodejs', 'react']},
];

const getTags = (tweets) =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = tweets.flatMap(({tags}) => tags);

// console.log(tags);

// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };
const getTagStats = (acc, tag) => {
  acc[tag] = acc[tag] ? acc[tag] + 1 : 1;
  return acc;
};

const countTags = (tags) => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
// console.log(tagCount);

/* 
  Можна ще раз коротко, але зрозуміло,
  де треба використовувати map, flatMap, reduce, map
*/

const mapResult = tweets.map((tweet) => {
  return tweet.tags;
});

// console.log(mapResult);

const flatMapResult = tweets.flatMap((tweet) => {
  return tweet.tags;
});
// console.log(flatMapResult);

const reduceResult = tweets.reduce((acc, tweet) => {
  acc += tweet.likes;
  return acc;
}, 0);

// console.log(reduceResult);

/* 
  можна будь-ласка ще раз про прототипи, __прото__
*/
// const object = {
//   a: 5,
// };
// console.log(object.__proto__);

// const object2 = Object.create(object);

// console.log(object2.__proto__);
// console.log(object2.__proto__.__proto__);

// console.log(object2.a);

const array = [];
// console.log(array.__proto__);

const functionExp = () => {};
// console.log(functionExp.__proto__);

/* 
  Ще раз про this
  https://uk.javascript.info/object-methods#this-v-metodakh
*/
function foo() {
  // console.log(this);
}

// this як визначається
foo();

const object = {
  foo,
};
object.foo();

/* прохання пояснити задачку з автоперевірки Модуля 5, задача 16 
  на тему екземпляри+static+ this + get/set.  А саме, при вирішені задачі, 
  в сеттері this.MAX_PRICE не спрацьовує, а Car.MAX_PRICE працює 
*/
class Car {
  static MAX_PRICE = 50000;
  #price;

  constructor({price}) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.MAX_PRICE) {
      this.#price = newPrice;
    }
    return;
  }
}

const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

audi.price = 49000;
// console.log(audi.price); // 49000

audi.price = 51000;
// console.log(audi.price); // 49000

/* Напишіть клас `Toggle` який приймає об'єкт налаштувань `{isOpen: boolean}` і
   оголошує одну властивість `on` - стан вкл/викл (true/false). За замовчуванням
   значення властивості `on` повинно бути `false`. 
*/

class Toggle {
  constructor({isOpen} = {}) {
    this.on = isOpen || false;
  }

  toggle() {
    this.on = !this.on;
  }
}

const firstToggle = new Toggle({isOpen: true});
// console.group('firstToggle');
// console.log(firstToggle.on);
firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
