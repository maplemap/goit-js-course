import './styles/common.css';

// import './modules/todo-list';
import './modules/news-box';

// const call = (id) => {
//   return fetch(`http://localhost:4040/echo/${id}`)
//     .then((response) => response.json())
//     .then(({ id }) => id);
// };

// Promise HELL!!!!!11111
// function one() {
//   return call(1).then((id) => {
//     console.log(id);

//     two(id)
//       .then(() => {
//         three()
//           .then((data) => {
//             console.log(data);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       })
//       .catch((error) => {});
//   });
// }
// function two() {
//   return call(2).then((id) => {
//     console.log(id);
//   });
// }
// function three() {
//   return call(3).then((id) => {
//     console.log(id);
//   });
// }

// one();
// two();
// three();

// async await

async function one() {
  return call(1);
}
async function two() {
  return call(2);
}
async function three() {
  return call(3);
}

// async function main() {
//   const result1 = await one();
//   console.log(result1);
//   const result2 = await two();
//   console.log(result2);
//   const result3 = await three();
//   console.log(result3);
// }

// main();

// with Promise.all
// const promise1 = one();
// const promise2 = two();
// const promise3 = three();

// Promise.all([promise2, promise1, promise3]).then((data) => {
//   console.log(data);
// });
