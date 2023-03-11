import './styles/common.css';

/* 
    - Promise API
    - Методи then, catch, finally
    - Методи Promise.all, Promise.race
    - Методи Promise.resolve и Promise.reject
    - Промисіфикация функцій
*/

// old code
// function successCallback(result) {
//     console.log(`Аудіофайл готовий за URL: ${result}`);
//   }

//   function failureCallback(error) {
//     console.error(`Помилка породження аудіофайлу: ${error}`);
//   }

//   createAudioFileAsync(audioSettings, successCallback, failureCallback);

// Without Promise (Callback hell)
// doSomething(function (result) {
//   doSomethingElse(
//     result,
//     function (newResult) {
//       doThirdThing(
//         newResult,
//         function (finalResult) {
//           console.log(`Отриманий остаточний результат: ${finalResult}`);
//         },
//         failureCallback,
//       );
//     },
//     failureCallback,
//   );
// }, failureCallback);

// With Promise
// doSomething()
//   .then(function (result) {
//     return doSomethingElse(result);
//   })
//   .then(function (newResult) {
//     return doThirdThing(newResult);
//   })
//   .then(function (finalResult) {
//     console.log(`Отриманий остаточний результат: ${finalResult}`);
//   })
//   .catch(failureCallback);

//Promise і 3 стани
// Pending (очікування)
// Fulfilled (виконано)
// Rejected (відхилено)

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('DATA');
//   }, 2000);
// });

// promise
//   .then(onSucess)
//   .catch(onError)
//   .finally(() => {
//     console.log('Я запускаюсь завжди');
//   });

// function onSucess(data) {
//   console.log('onSucess', data);
//   return data;
// }

// function onError(error) {
//   console.log('onError', error);
// }

// Промісіфікація
// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Помилка завантаження скрипта ${src}`));

//   document.head.append(script);
// }

// loadScript(src, onLoad);

// function onLoad(error, data) {
//   if (error) {
//     console.log('Error', error);
//     return;
//   }

//   console.log('Sucess', data);
// }

// Промісіфікована функція
// function loadScript(src) {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => resolve(src);
//     script.onerror = () => reject();

//     document.head.append(script);
//   });
// }

// const src = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js';

// loadScript(src).then(onLoad).catch(onError);

// function onLoad(link) {
//   console.log('Sucess');
//   console.log('link was loaded', link);
// }

// function onError(message) {
//   console.error('Сталася помилка із завантаженням скрипта!!!!!!!! АЛЯРМ!!!');
// }

// Promise.resolve, Promise.reject
// let cache = new Map();

// function loadCached(url) {
//   if (cache.has(url)) {
//     return Promise.resolve(cache.get(url)); // (*)
//   }

//   return fetch(url)
//     .then((response) => response.text())
//     .then((text) => {
//       cache.set(url, text);
//       return text;
//     });
// }

// loadCached('/posts').then((cachedData) => {
//   console.log(cachedData);
// });

// Promise.all
// const promises = [new Promise((resolve, reject) => resolve(1)), new Promise((resolve, reject) => reject(2))];

// Promise.all(promises)
//   .then((responses) => {
//     console.log('success', responses);
//   })
//   .catch((error) => {
//     console.log('error', error);
//   });

// Promise.allSettled
/* 
    {status:"fulfilled", value: result} для успішних відповідей,
    {status:"rejected", reason: error} для помилок.
*/
// const promises = [new Promise((resolve, reject) => resolve(1)), new Promise((resolve, reject) => reject(2))];

// Promise.allSettled(promises).then((responses) => {
//   console.log('success', responses);
// });

// Promise.race
// const promises = [
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 206);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(2);
//     }, 200);
//   }),
// ];

// Promise.race(promises)
//   .then((responses) => {
//     console.log('success', responses);
//   })
//   .catch((error) => {
//     console.log('error', error);
//   });

// Promise.any
// чекає лише на перший успішно виконаний проміс і отримує його результат

// const promises = [
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(1);
//     }, 200);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(2);
//     }, 300);
//   }),
// ];

// Promise.any(promises)
//   .then((responses) => {
//     console.log('success', responses);
//   })
//   .catch((error) => {
//     console.log('error', error);
//     // AggregateError: All promises were rejected
//   });

// HomeWork
// 1. Добавити розмітку
// 2. Добавити 'submit' addEventListener на форму
// 3. Зловити  в події данні з форми - 'delay', 'step', 'amount'
// 4. Використати 'amount' як кількість запуску функції 'createPromise'
// 5. Викликати createPromise(position, delay) n разів
// і використати index як 'position' і delay =  (delay + step * index) із форми
//

// document.querySelector('.form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   const { delay, step, amount } = e.currentTarget.elements;
//   const delayValue = parseInt(delay.value);
//   const stepValue = parseInt(step.value);
//   const amountValue = parseInt(amount.value);

//   const promises = [];

//   for (let index = 0; index < amountValue; index++) {
//     const delay = index * stepValue + delayValue;
//     // викликати 'createPromise'
//   }

//   e.currentTarget.reset();
// });

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }
