// Deklaracja

// var mainCity = 100;

// let mainCity = "Warszawa";
// mainCity = "Wrocław";
// console.log(mainCity);

// const mainCity2 = "Kraków";
// mainCity2 = "Katowice";
// console.log(mainCity2);

// Typy deklaracji

// String
// const city = "Warszawa";
// console.log(typeof city, city);

// const city2 = "Wrocław";
// console.log(typeof city, city2);

// const city3 = `Kraków`;
// console.log(typeof city3, city3);

// const imie = "Ala";
// const nazwisko = "Kowalska";

// let space = " ";
// let osoba = imie + space + nazwisko + space + 26;
// let osoba = "Ala" + " " + "Kowalska" + " " + 26

// const osoba = `Ala ${nazwisko} 27`;
// const osoba = "Ala nazwisko";

// Stworzyc 3 zmienne
//     - nasze imie
//     - nasz wiek
//     - nasze miasto

// Wyswietlic w konsoli tekst "Hej jestem xxx, mam xx lat, mieszkam w xx"

// const string = "Jakis napis";
// const length = string.length;
// console.log(length);

// const sentencja = "JavaScript jest super, i super";

// console.log(`"${sentencja}" ma ${sentencja.length} znaki`);

// console.log(sentencja.toLowerCase());

// number

// const number = 10 + 8;
// const number2 = 10 - 8;
// const number3 = 10 * 8;
// const number4 = 10 / 8;

// modulo - reszta z dzielenia
// const number5 = 10 % 8;
// const number6 = 15 % 8;

// console.log(number, number2, number3, number4);
// console.log(number6);

// ________________________
// let x = "10";
// let y = "10";
// console.log(x + y);->20

// ________________________
// let x = "10";
// let y = "10";
// console.log(x + y);->1010

// ________________________
// let x = 10;
// let y = "10";
// console.log(x + y);->1010

// ________________________
// let x = "10";
// let y = 10;
// console.log(x + y);->1010

// ________________________
// let x = "10";
// let y = 10;
// let z = 15;
// console.log(z + x + y);->151010

// ________________________
// let x = 10;
// let y = "10";
// let z = 15;
// console.log(z + x + y);->2510

// ________________________
// let x = 10;
// let y = "10";
// let z = 15;
// console.log(z + x + y + z + x);

// const wynik = 15 + 10 + "10";
// console.log(typeof wynik, wynik);

// Wejście -> "Jesteśmy z każdym dniem coraz gorsi w programowanie"
// let text = "Jesteśmy z każdym dniem coraz gorsi w programowanie";

// ...

// console.log(text)
// Wyjście -> "Jesteśmy z KAŻDYM DNIEM coraz lepsi w programowanie!"

// const txt = "Jesteśmy z każdym dniem coraz gorsi w programowanie";
// console.log(txt.replace("Jesteśmy z każdym dniem coraz gorsi w programowanie", "Jesteśmy z KAŻDYM DNIEM coraz lepsi w programowanie!"));

// let zdanie = "Jesteśmy z każdym dniem coraz gorsi w programowanie";
// zdanie = zdanie.replace("gorsi", "lepsi");
// zdanie = zdanie.replace("każdym", "KAŻDYM").replace("dniem", "DNIEM");
// zdanie = zdanie + "!";
// console.log(zdanie);

// let text = "Jesteśmy z każdym dniem coraz gorsi w programowanie";
// text = text.replace("gorsi", "lepsi");
// text = text.replace("każdym dniem", "KAŻDYM DNIEM");
// console.log(text + "!");

// let text = "Jesteśmy z każdym dniem coraz gorsi w programowanie";
// console.log(text.replace("gorsi", "lepsi").replace("z każdym dniem", "Z KAŻDYM DNIEM").concat("!")),

// let tekst = "Jesteśmy z każdym dniem coraz gorsi w programowanie";
// console.log(tekst.replace("Jesteśmy z każdym dniem coraz gorsi w programowanie", "Jesteśmy z KAŻDYM DNIEM coraz lepsi w programowanie!"))

// alert("Witaj na naszej stronie");
// const odpowiedz = confirm("Witaj na naszej stronie");
// console.log(odpowiedz);

// const odpowiedz = prompt("Pytanie");
// console.log(odpowiedz);

// prompt("Ile punktów dodajemy");
// let wynik = 10;
