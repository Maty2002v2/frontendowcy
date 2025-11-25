// asynchornicznosc

// setInterval()
// setTimeout()

// console.log("jestem na początku skryptu");

// setTimeout(() => {
//   console.log("jestem w środku skryptu");
// }, 0);

// console.log("jestem na początku skryptu 2");

// let users;
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     users = data;
//   });

// let counter = 0;
// setInterval(() => {
//   counter++;
//   console.log("Czesc" + counter);
// }, 1000);

// async function getUsers() {
//   const users = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await users.json();

//   return data;
// }

// const users = getUsers().then((data) => console.log(data));
// console.log(users);

// JSON
// const user = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496",
//     },
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets",
//   },
// };

// console.log(user);
// console.log(JSON.stringify(user));

// const userJson = JSON.stringify(user);
// console.log(JSON.parse(userJson));

// hoisting
// console.log(imie);
// var imie = "Ala";

// console.log(imie);
// let imie = "Ala";

// hello();

// function hello() {
//   console.log("hello");
// }

// hello();

// var hello = function () {
//   console.log("hello");
// };

// scope

// global scope
// const imie = "Ala";

// console.log(imie);

// function hello() {
//   console.log("Hello " + imie);
// }

// hello();

// function scope
// function hello() {
//   const imie = "Ala";
//   console.log("Hello " + imie);
// }
// console.log(imie);
// hello();

// block scope
// if (true) {
//   const imie = "Ala";
//   console.log(imie);
// }

// console.log(imie);

// let imie = "Ala";

// function hello() {
//   let imie2 = "Marek";

//   console.log(imie);
//   console.log(imie2);

//   function hello2() {
//     const imie3 = "Arleta";

//     console.log(imie2);
//   }

//   hello2();
//   //   console.log(imie3); //blad
// }

// hello();
// // hello2(); //blad

// if (1 + 1 == 2) {
//   console.log(imie);
// }

// spread operator
// const points = [2, 5, 8];
// console.log(...points);

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(points[0], points[1], points[2]));
// console.log(sum(...points)); // -> console.log(sum(2, 5, 8));

// const points2 = [3, 10];

// const allPoints = [...points, ...points2];
// console.log(allPoints);

// const user = {
//   imie: "Ala",
//   wiek: 10,
// };

// const user2 = {
//   miasto: "Warszawa",
// };

// console.log({ ...user, ...user2 });

// destrukturyzacja
// const points = [2, 5, 8];
// const [a, b, c] = points;

// console.log(points);
// console.log(a, b, c);

// const user = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496",
//     },
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets",
//   },
// };

// const username = "Mark";

// const username = user.username
// const email = user.email

// const { username: imie, email } = user;

// console.log(username, email);

// function sum(...liczby) {
//   return liczby.reduce((a, b) => a + b, 0);
// }

// const sumResult = sum(3, 4, 2);
// console.log(sumResult);
