/* 
    - Об'єкти window і document
    - Ієрархія DOM-елементів
    - Пошук DOM-елементів із querySelector
    - Властивість textContent
    - Створення елементів

    Створити список технологій що вивчаються на курсі 
    Fullstack за допомогою js (map, reduce)
*/

const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

const ulRef = document.createElement('ul');

// const liListRef = technologies.map((name) => {
//   const liRef = document.createElement('li');
//   liRef.textContent = name;
//   return liRef;
// });

// ulRef.append(...liListRef);

technologies.forEach((name) => {
  const liRef = document.createElement('li');
  liRef.textContent = name;
  ulRef.appendChild(liRef);
});

document.body.append(ulRef); // Звертання до DOM !!!!!
