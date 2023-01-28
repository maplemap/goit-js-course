/* # Модуль 4. Заняття 8. Перебираючі методи масиву */

//## Колекція об'єктів для всіх прикладів з автомобілями
const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/*
    ## Example 1 - Метод map

    Нехай функція `getModels` повертає масив моделей (поле model) всіх
    автомобілів.

    const getModels = cars => {};

    console.table(getModels(cars));
*/

//v1
// const getModels = (cars) => {
//   const result = cars.map((car) => {
//     return car.model;
//   });
//   return result;
// };

//v2
// const getModels = (cars) => cars.map(({model}) => model);

// console.table(getModels(cars));
/* 

















*/
/*
    ## Example 2 - Метод map

    Нехай функція `makeCarsWithDiscount` повертає новий масив об'єктів із змінним
    значенням властивості `price` залежно від переданої знижки.

    const makeCarsWithDiscount = (cars, discount) => {};

    console.table(makeCarsWithDiscount(cars, 0.2));
    console.table(makeCarsWithDiscount(cars, 0.4));
*/

// price * 0.2 - знижка
// price - (знижка)

//v1
// const makeCarsWithDiscount = (cars, discount) => {
//   const result = cars.map((car) => {
//     const discountPrice = car.price - car.price * discount;

//     return {
//       ...car,
//       price: discountPrice,
//     };
//   });

//   return result;
// };

//v2
// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => ({
//     ...car,
//     price: car.price - car.price * discount,
//   }));

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

/* 


















*/
/*
    ## Example 3 - Метод filter

    Нехай функція `filterByPrice` повертає масив автомобілів ціна 
    яких менша ніж значення параметра `threshold`.

    const filterByPrice = (cars, threshold) => {};

    console.table(filterByPrice(cars, 30000));
    console.table(filterByPrice(cars, 25000));
*/
//v1
// const filterByPrice = (cars, threshold) => {
//   const result = cars.filter((car) => {
//     return car.price < threshold;
//   });

//   return result;
// };

// v2
// const filterByPrice = (cars, threshold) =>
//   cars.filter(({price}) => price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

/* 


















*/
/*
    ## Example 4 - Метод filter

    Нехай функція `getCarsWithDiscount` повертає масив автомобілів властивість
    onSale яких true.

    const getCarsWithDiscount = cars => {};

    console.table(getCarsWithDiscount(cars));
*/

//v1
// const getCarsWithDiscount = (cars) => {
//   const result = cars.filter((car) => {
//     // return car.onSale;
//   });

//   return result;
// };

//v2
// const getCarsWithDiscount = (cars) => cars.filter(({onSale}) => onSale);

// console.table(getCarsWithDiscount(cars));

/* 


















*/
/*
    ## Example 5 - Метод filter

    Нехай функція `getCarsWithType` повертає масив автомобілів тип яких
    збігається зі значенням параметра `type`.

    const getCarsWithType = (cars, type) => {};

    console.table(getCarsWithType(cars, 'suv'));
    console.table(getCarsWithType(cars, 'sedan'));
*/

/* 


















*/
/*
    ## Example 6 - Метод find


    const getCarByModel = (cars, model) => {};

    console.log(getCarByModel(cars, 'F-150'));
    console.log(getCarByModel(cars, 'CX-9'));
*/
//v1
// const getCarByModel = (cars, model) => {
//   const result = cars.find((car) => {
//     return car.model === model;
//   });

//   return result;
// };

//v2
// const getCarByModel = (cars, model) => cars.find((car) => car.model === model);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

/* 


















*/
/*
    ## Example 7 - Метод sort

    Нехай функція `sortByAscendingAmount` повертає новий масив 
    автомобілів відсортований за зростанням значення ключу `amount`.


    const sortByAscendingAmount = cars => {};

    console.table(sortByAscendingAmount(cars));
*/

// const sortByAscendingAmount = (cars) => {
//   const result = cars.sort((a, b) => {
//     return a.amount - b.amount;
//   });

//   console.table(result);
// };

// console.table(sortByAscendingAmount(cars));

/* 


















*/
/*
    ## Example 8 - Метод sort

    Нехай функція `sortByDescendingPrice` повертає новий масив автомобілів
    відсортований за зменшенням значення властивості `price`.


    const sortByDescendingPrice = cars => {};

    console.table(sortByDescendingPrice(cars));
*/

/* 


















*/
/*
    ## Example 9 - Метод sort

    Нехай функція `sortByModel` повертає новий масив автомобілів відсортований
    за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від
    значення параметра `order`.


    const sortByModel = (cars, order) => {};

    console.table(sortByModel(cars, 'asc'));
    console.table(sortByModel(cars, 'desc'));
*/
/* 


















*/
/*
    ## Example 10 - Метод reduce

    Нехай функція `getTotalAmount` повертає загальну кількість автомобілів (значення
    властивостей `amount`).


    const getTotalAmount = cars => {};

    console.log(getTotalAmount(cars));
*/

//v1
// const getTotalAmount = (cars) => {
//   const result = cars.reduce((acc, car) => {
//     acc += car.amount;
//     return acc;
//   }, 0);

//   return result;
// };

//v2 // все те що повертається з коллбеку - записується в acc
// const getTotalAmount = (cars) => cars.reduce((acc, car) => acc + car.amount, 0);

// console.log(getTotalAmount(cars));

//calсulateAverage
// const calсulateAverage = (...args) => {
//   let total = 0;

//   args.forEach((candiBober) => {
//     total += candiBober;
//   });

//   return total / args.length;
// };

//v1
// const calсulateAverage = (...args) => {
//   // let total = 0;

//   // args.forEach((candiBober) => {
//   //   total += candiBober;
//   // });

//   const total = args.reduce((acc, number) => {
//     acc += number;
//     return acc;
//   }, 0);

//   return total / args.length;
// };

//v2
// const calсulateAverage = (...args) =>
//   args.reduce((acc, number) => acc + number, 0) / args.length;

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5

/* reduce який повертає об'єкт */

// const result = cars.reduce(
//   (acc, car) => {
//     acc.totalAmount += car.amount;
//     acc.totalPrice += car.price;
//     return acc;
//   },
//   {totalAmount: 0, totalPrice: 0},
// ); //{totalAmount, totalPrice}

// console.log(result);

/* reduce який повертає строку */
// const result = cars.reduce((acc, car) => {
//   acc += `_${car.model}`;

//   return acc;
// }, '');

// console.log(result);
/* 
















*/
/* 
    ## Example 11 - Ланцюжки методів

    Нехай функція `getAvailableCarNames` повертає масив моделей автомобілів, але
    тільки тих, які зараз на розпродажі.


    const getModelsOnSale = cars => {};

    console.table(getModelsOnSale(cars));
*/
/* 


















*/
/*
    ## Example 12 - Ланцюжки методів

    Нехай функція `getSortedCarsOnSale` повертає масив автомобілів на розпродажі
    (Властивість onSale), відсортованих за зростанням ціни.


    const getSortedCarsOnSale = cars => {};

    console.table(getSortedCarsOnSale(cars));
*/
