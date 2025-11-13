// Konwersja typów
// let x = 5;
// let y = "5";

// console.log(typeof x);
// console.log(typeof y);

// console.log(typeof Number(y), y);

// console.log(y + 5);

// y = Number(y);

// console.log(y + 5);

// ____________
// let z = "10.06";
// console.log(typeof z, z);
// z = parseInt(z);
// console.log(typeof z, z);

// let z2 = "10.05";
// console.log(typeof z2, z2);
// z2 = parseFloat(z2);
// console.log(typeof z2, z2);

// ____________
// let h = "5.5";
// console.log(typeof +h, +h);
// console.log(typeof h, h + 5);

// boolean
// const prawda = true;
// const fałsz = false;

// console.log(typeof prawda, typeof fałsz);

// >
// <
// ==
// ===
// >=
// <=
// !=
// !==

// wartosc znak_porownania wartosc

// console.log(10 > 4);
// console.log(6 > 1);
// console.log(5 > 10);

// console.log(10 < 11);
// console.log(4 < 2);
// console.log(0 < -3);
// console.log(11 < 15);

// console.log(5 >= 8);
// console.log(6 >= 3);
// console.log(5 >= 5);
// console.log(5 > 5);

// console.log(5 <= 9);
// console.log(3 <= 1);
// console.log(4 <= 4);

// console.log(5 == 5);
// console.log(6 == 9);
// console.log(2 == 6);
// console.log(8 == 8);
// console.log(3 == "5");
// console.log("4" == "4");
// console.log("5" == "8");
// console.log(5 == "5") true;

// console.log(5 === "5");
// console.log(5 === 5);
// console.log("5" === "6");

// console.log(3 != 2);
// console.log(3 != 3);
// console.log(3 != "3");
// console.log(4 != "5");

// console.log(6 !== 9);
// console.log(6 !== 6);
// console.log(5 !== "5");
// console.log(3 !== "9");

// && - and - zawsze musi byc true by było ostatecznie true
// || - or - musi byc chociaz 1x true by było true

// console.log(true && true);
// console.log(false && true && true && true);

// console.log(true && false) -> false;
// console.log(true && false && true) -> false;
// console.log(false && false) -> false;
// console.log(5 > 6 && 3 < 1); -> false && false
// console.log(7 == 7 && 4 > 3); -> true && true
// console.log(7 == "7" && 7 !== 7) -> true && false

// console.log(5 > 4 && 5 < 6 && 7 == "7" && 6 >= 6 && true && 2 !== "3") -> true

// console.log(false || true);
// console.log(true || true);
// console.log(false || false);

// console.log(5 > 40 || 5 > 6 || 7 != "70" || 6 >= 6 || false || 2 !== "3") -> true;

// !

// console.log(!true);
// console.log(!false);

// console.log(!true || false || !true) -> false;

// console.log((true && false) || (true && true && false)) -> false || false -> false;

// (6 !== 9 && 3 !== "9") || ((10 > 4 || !false) && (5 > 6 || 7 != "70")) || !(10 < 11);

// true || true || false

// tablice array
// console.log([]);
// console.log(typeof []);

// const imiona = ["Kasia", "Marzena", "Kamil", "Piotrek", "Łukasz"];
// console.log(imiona);

// Stwórz logikę która wyświetli komunikat "Cześć jestem (towje imie) mój index to (index)"
// console.log("Cześć, mam na imię " + imiona[1] + " i mój index to: 1");

// const index = imiona.indexOf("Kasia");
// console.log("Cześć jestem " + imiona[0] + ", moj indeks to " + index );

// console.log("Cześć mam na imie " + imiona[4] + " i mój index to: 4");

// console.log("Cześć, mam na imię " + imiona[3] + "mój index to: 3");

// _____________________________
// const nowa_dlugosc = imiona.push("Tomasz");
// console.log(imiona, nowa_dlugosc);

// const nowa_dlugosc_2 = imiona.unshift("Mateusz");
// console.log(imiona, nowa_dlugosc_2);

// console.log(imiona, imiona.length);

// const odcieta = imiona.pop();
// console.log(imiona, odcieta);

// const odcieta_2 = imiona.shift();
// console.log(imiona, odcieta_2);

// console.log(imiona[imiona.length - 1]);

// const q = [4, "Ala"];

// const index = q.indexOf("ala");
// console.log(index);

// console.log(imiona);
// console.log(imiona.includes("Kamil", 3));

// Stwórz tablicę numbers = [1, 2, 3].
// Dodaj 4 i 5 na końcu.
// Usuń pierwszy element.
// Sprawdź, czy tablica zawiera liczbę 3.
// Wypisz długość tablicy.

// const tmp = new Array([3, 3]);
// const tmp = [3, 3];

// imiona.forEach((elementTablicy) => {
//   console.log("Witaj " + elementTablicy);
// });

// const numbers = [1, 2, 3, 4];
// numbers.forEach((obecnyNumer) => {
//   console.log(obecnyNumer + 10);
// });

// const editedNumbers = numbers.map((obecnaWartosc) => {
//   return obecnaWartosc;
// });

// console.log(numbers);
// console.log(editedNumbers);

// const result = numbers.find((obecnyElement) => {
//   return obecnyElement > 2;
// });
// console.log(result);

// const parzyste = numbers.filter((obecnyElement) => {
//   return obecnyElement % 2 === 0;
// });
// console.log(parzyste);

// Mamy tablice 5 owoców,
// dodajemy nowy owoc,
// dodajemy do koażdego owocu na koncu literke "a"
// sprawdzamy czy w owocach jest sliwka
// wyrzucamy jeden owoc, dodawkowo po wyrzyceniu napiszemy w konsoli jaki owoc był wyzucony i powod
// na koniec wypisujemy ile owocow mamy na liscie

// const owocki = ["jabłko", "gruszka", "banan", "ananas", "śliwka"];
// owocki.forEach((nazwy) => {
//   console.log(nazwy);
// });
// const editedOwocki = owocki.map((obecnaWartosc) => {
//   return obecnaWartosc + "a";
// });
// owocki.push("truskawka");
// console.log(owocki);
// const jestSliwka = owocki.includes("śliwka");
// console.log("Czy jest śliwka? ", jestSliwka);
// const indexAnanasa = owocki.indexOf("ananas");
// const wyrzucone = owocki.splice(indexAnanasa, 1);
// console.log(`Wyrzuciłam ${wyrzucone[0]}, bo był robaczywy`);
// console.log("Pozostałe owoce:", owocki);
// console.log("Liczba owoców:", owocki.length);

// const owoce = ["jablko", "pomarancza", "sliwka", "malina", "truskawka"];
// const owoce2 = owoce.push("agrest");
// const literka = owoce.map((noweOwoce) => {
//   return noweOwoce + "a";
// });
// console.log(literka);
// const result = owoce.find((obecnyElement) => {
//   return obecnyElement === "sliwka";
// });
// console.log(result);
// const wyrzuconyOwoc = owoce.pop();
// console.log(wyrzuconyOwoc + " wyrzucony bo był zepsuty");
// owoce.forEach((elementyTablicy) => {
//   console.log(elementyTablicy);
// });

// const fruits = ["pomarańcza", "jabłko", "śliwka", "gruszka", "malina"];
// console.log(fruits);
// fruits.push("cytryna");
// console.log(fruits);
// const jest = fruits.includes("śliwka");
// console.log(jest);
// const badFruits = fruits.shift();
// console.log(badFruits + " bo był robaczywy");
// console.log(fruits.length);

// let owoce = ["jablko", "banan", "gruszka", "sliwka", "pomarancza"];
// owoce.push("truskawka");
// const noweOwoce = owoce.map((obecnaWartosc) => {
//   return obecnaWartosc + "a";
// });
// console.log("Lista owoców:", noweOwoce);
// let wyrzucony = noweOwoce.pop();
// console.log(`${wyrzucony} został wyrzucony bo był spleśniały`);
// console.log(`Na liście pozostało ${noweOwoce.length}`);

// const numbers = [1, 2, 3, 4];
// console.log(numbers);

// numbers[1] = "Ala";
// console.log(numbers);

// numbers = ["pomarańcza", "jabłko", "śliwka", "gruszka", "malina"];
// console.log(numbers);

// const owocki = ["pomarańcza", "jabłko", "śliwka", "gruszka", "malina"];

// let owockiKopia = [...owocki];

// owocki.push("banan");

// console.log(`owocki: ${owocki}`);
// console.log(`owockiKopia: ${owockiKopia}`);

// Obiekty
// const owoc = {
//   nazwa: "banan",
//   kolor: "zolty",
//   terminWanosci: 5,
//   czyJestDobry: () => {
//     console.log("Tak, jest pyszny");
//     return "cos";
//   },
// };

// console.log(owoc["nazwa"]);
// console.log(owoc.nazwa);

// owoc.terminWanosci = 4;

// console.log(owoc);

// owoc.cena = 3;

// console.log(owoc);

// delete owoc.kolor;

// const wynikFunckcji = owoc.czyJestDobry();
// console.log(wynikFunckcji);
// console.log(owoc.czyJestDobry());

// undefined
// let owocki;
// console.log(owocki);

// null
// const owocki = null;
// console.log(typeof null);

// Stworz tablice obiektow które będą reprezentować osoby (5),
// niech kazdy obiekt ma klucz imie, nazwisko, wiek,
// dodaj do tablicy i na początku i na końcu po nowej osobie,
// napisz logikę która od filtruje niepełnoletnie osoby,
// napisz logikę która znajdzie pierwszą kobiete (napisy też są tablicąm jeśli mamy zmienną const imie = "ala" to możemy się odnieść imie[index], więc można sprawdzić czy ostatnia literka to a)

// jakieś zmiany
