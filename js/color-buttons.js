/* 
    - Об'єкти window і document
    - Ієрархія DOM-елементів
    - Пошук DOM-елементів із querySelector
    - Властивість textContent
    - Створення елементів
    - Видалення методом remove

    Створити кілька кнопок на основі масива з обєктами використовуючи createElement
*/
const colors = [
  {
    label: 'red',
    color: '#FF0000',
  },
  {
    label: 'green',
    color: '#00FF00',
  },
  {
    label: 'blue',
    color: '#0000FF',
  },
  {
    label: 'yellow',
    color: '#FFFF00',
  },
];

const buttonsRef = colors.map(({label, color}) => {
  const buttonRef = document.createElement('button');
  buttonRef.textContent = label;
  buttonRef.style.backgroundColor = color;
  buttonRef.classList.add('button');
  // buttonRef.classList.remove('button');
  // buttonRef.classList.toggle('button');
  // buttonRef.classList.replace('button', 'button-another');
  // console.log(buttonRef.classList.contains('button'));
  buttonRef.type = 'button';

  return buttonRef;
});

document.body.append(...buttonsRef);
