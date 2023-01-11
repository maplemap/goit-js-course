/* # Модуль 2. Заняття 3. Масиви */

/* 
  ## Example 1 - Базові операції з масивом (push, pop, shift, unshift)

  1. Створіть масив `genres` з елементами «Jazz» та «Blues».
  2. Додайте «Рок-н-рол» до кінця.
  3. Виведіть у консоль перший елемент масиву.
  4. Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву
    довільної довжини.
  5. Видаліть перший елемент та виведіть його в консоль.
  6. Вставте «Country» та «Reggae» на початок масиву.

  const genres = ;
*/
//1
// const genres = ['Jazz', 'Blues'];
//2
// genres.push('Рок-н-рол');
// console.table(genres);

// console.log(genres.pop());
//3
// const index = 0;
// console.log(genres[index]);
//4
// console.log('length', genres.length);
// console.log(genres[genres.length - 1]);
//5 shift
// console.log(genres.shift());
//6 unshift
// console.log(genres.unshift('Country', 'Reggae'));

// console.table(genres);

/* 
  ## Example 2 - Масиви та рядки

  Напиши скрипт для обчислення площі прямокутника зі сторонами, значення
  яких зберігаються у змінній `values` у вигляді рядка. Значення гарантовано
  розділені пробілом.

  const values = '8 11';
*/
// const values = '8 11';
// const array = values.split(' ');
// const width = Number(array[0]);
// const height = Number(array[1]);

// const rectSquare = width * height;
// console.log(rectSquare);

/* 
  ## Example 3 - Перебір масиву

  Напиши скрипт для перебору масиву `fruits` циклом `for`. Для кожного елемента
  масиву виведи в консоль рядок у форматі `номер_елемента: значення_елемента`.
  Нумерація елементів повинна починатися з `1`.

  const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
*/
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let index = 0; index < fruits.length; index += 1) {
//   const fruit = fruits[index];
//   console.log(`${index + 1}: ${fruit}`);
// }
// for (const fruit of fruits) {
//   const index = fruits.indexOf(fruit);
//   console.log(`${index + 1}: ${fruit}`);
// }

/* 
  ## Example 4 - Масиви та цикли (split, for, for of)

  Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У
  змінних `names` та `phones` зберігаються рядки імен та телефонних номерів,
  розділені комами. Порядковий номер імен та телефонів у рядках вказують на
  відповідність. Кількість імен та телефонів гарантовано однакова.

  const names = 'Jacob,William,Solomon,Artemis';
  const phones = '89001234567,89001112233,890055566377,890055566300';
*/
// const namesString = 'Jacob,William,Solomon,Artemis';
// const phonesString = '89001234567,89001112233,890055566377,890055566300';

// const names = namesString.split(',');
// const phones = phonesString.split(',');

// for (let index = 0; index < names.length; index += 1) {
//   const name = names[index];
//   const phone = phones[index];
//   console.log(`${name}: ${phone}`);
// }

// console.log('=====');
// for (const phone of phones) {
//   const index = phones.indexOf(phone);
//   const name = names[index];

//   console.log(`${name}: ${phone}`);
// }

/* 
  ## Example 5 - Масиви та рядки (split, slice, join)

  Напиши скрипт, який виводить у консоль усі слова рядка крім першого і
  останнього. Результуючий рядок не повинен починатися або закінчуватися
  символом пробілу. Скрипт повинен працювати для будь-якого рядка.

  const string = 'Welcome to the future';
*/
// const string = 'Welcome to the future';
// const words = string.split(' ');
// // words.shift();
// // words.pop();
// // console.log(words);
// const shortWords = words.slice(1, words.length - 1);

// const shortString = shortWords.join(' ');

// // console.log(shortWords);
// console.log(shortString);

/* 
  ## Example 6 - Масиви та рядки

  Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить
  його в консоль.

  const string = 'Welcome to the future';
*/
// const string = 'Welcome to the future';
// const words = string.split(' ');

// const reversedWords = [];

// console.log(words);

// for (let index = words.length - 1; index >= 0; index -= 1) {
//   const word = words[index];
//   reversedWords.push(word);
// }

// The variant by Inna
// for (let index = 0; index < words.length; index += 1) {
//   const word = words[index];
//   reversedWords.unshift(word);
// }

// const reversedString = reversedWords.join(' ');

// console.log(reversedString);

// метод .reverse()
//console.log(words.reverse());

//future the to Welcome

/* 
  ## Example 7 - Сортування масиву із циклом

  Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою
елемента.

  const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
*/

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// const sortedLangs = [];

// while (langs.length > 0) {
//   let min = langs[0];

//   for (const lang of langs) {
//     if (lang < min) {
//       min = lang;
//     }
//   }

//   sortedLangs.push(min);
//   const minIndex = langs.indexOf(min);
//   langs.splice(minIndex, 1);
// }

// console.log(langs);
// console.log(sortedLangs);

// метод .sort();
console.log(langs.sort());

//sortedLangs ['c++', 'haskel', 'javascript', 'php', 'python', 'ruby']

/* 
  ## Example 8 - Пошук елемента

  Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для
  будь-якого масиву чисел. Використовуй цикл для розв'язання задачі. 

  const numbers = [2, 17, 94, 1, 23, 37];
  let min;
  console.log(min); // 1
*/

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0]; //2

// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
// }
