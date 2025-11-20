const users = [
  { name: "Anna", age: 17, role: "student" },
  { name: "Bartek", age: 22, role: "admin" },
  { name: "Celina", age: 19, role: "student" },
  { name: "Darek", age: 30, role: "user" },
];

// Wypisz tylko użytkowników pełnoletnich.
// const ovr18 = users.filter((user) => {
//   const wiek = user.age;
//   return wiek >= 18;
// });

// console.log(ovr18);

// const ovr18 = [];
// for (let i = 0; i < users.length; i++) {
//   const wiek = users[i].age;
//   if (wiek >= 18) {
//     ovr18.push(users[i]);
//   }
// }

// console.log(ovr18);

// Stwórz nową tablicę zawierającą tylko imiona.
// const names = users.map((user) => user.name);
// console.log(names);

// let names = [];
// let i = 0;
// while (i < users.length) {
//   names.push(users[i].name);
//   i++;
// }

// console.log(names);

// Policz ilu użytkowników ma rolę "student".
// const tylkoStudenci = users.filter((u) => u.role === "student");
// const iluStudentow = tylkoStudenci.length;
// console.log(iluStudentow);

// continue
// for (let i = 0; i < users.length; i++) {
//   console.log("Hej");

//   const name = users[i].name;

//   if (name[name.length - 1] != "a") {
//     continue;
//   }

//   console.log("jestem dziewczyną", name);
// }

// for (let i = 0; i < users.length; i++) {
//   console.log("Hej");

//   const age = users[i].age;
//   const name = users[i].name;
//   if (age <= 18) {
//     continue;
//   }

//   console.log("Chodź na piwo", name);
// }

// Zadanie 2 --- Mini system logowania
// const login = prompt("Podaj login:");

// switch (login) {
//   case "admin":
//     console.log("Witaj admin");
//     break;

//   case "user":
//     console.log("Witaj użytkowniku");

//     break;

//   default:
//     console.log("Nieznany użytkownik");
// }

// Zadanie 3 --- Przetwarzanie tekstu
// const message = "Hello JavaScript World";
// console.log(message);

// const naTablice = message.split(" ");
// console.log(naTablice.join("=ala="));

// console.log(naTablice);

// console.log(naTablice.length);

// console.log(message.toUpperCase());

// console.log(message.charAt(6));

// console.log(naTablice.reverse());
