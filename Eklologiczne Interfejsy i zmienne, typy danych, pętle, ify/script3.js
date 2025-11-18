//ify
// console.log("jeden");

// to będzie true
// "napisy", liczby, [], {}, true

// to będzie false
// 0, "", null, undefined, false, NaN

// if (true) {
//   console.log("dwa");
// }

// console.log("trzy");

// const text = prompt("Jak masz na imie?");
// console.log(prompt("Jak masz na imie?"));

// const text = prompt("Ilee masz lat");
// console.log(text);
// if (text >= 18) {
//   console.log("Możesz wejść");
// }

// const text2 = prompt("Ile masz lat?");
// if (text2 >= 18) {
//   alert("Wchodzisz!");
// }

// const age = prompt("Ile masz lat?");
// const wiek = Number(age);
// if (wiek < 18) {
//   console.log("Niestety nie możesz wejść");
// } else {
//   console.log("Zapraszam");
// }

// Ile miales punktow (max to 100)

// const punkty = prompt("Ile miałeś punktów? Max to 100");
// const punkciki = Number(punkty);
// if (punkciki < 60) {
//   console.log("Przykro mi, nie zaliczyłeś");
// } else {
//   console.log("Gratulacje, zdałeś!");
// }

// const wynik = prompt("Ile masz punktów?");
// console.log(wynik);
// if (wynik >= 60) {
//   alert("Gratuluję");
// } else {
//   alert("Niestety, mam złą wiadomość");
// }

// const text = prompt("Ile maiłes punktow (max to 100");
// if (text >= 60) {
//   console.log("Gratuluję!!!" + text + " zdałeś!");
// } else {
//   console.log("Miałeś " + text + " sprobuj jeszcze raz!");
// }

// const wiek = prompt("Ile masz lat?");

// if (wiek > 18) {
//   console.log("Masz wiecej niz 18 lat");
// } else if (wiek == 18) {
//   console.log("Masz dokładnie 18 lat");
// } else {
//   console.log("Masz mniej niż 18 lat");
// }

// if (wiek > 18) {
//   console.log("Masz wiecej niz 18 lat");
// }

// if (wiek == 18) {
//   console.log("Masz dokładnie 18 lat");
// }

// if (wiek < 18) {
//   console.log("Masz mniej niż 18 lat");
// }

// < 0 lub > 100 - zle dane

// 0 - 25 - 1

// 26 - 49 - 2

// 50 - 75 - 3

// 76 - 85 - 4

// 86 - 99 - 5

// 100 - 6

// const punkty = prompt("Ile maiłes punktow (max to 100)");

// if (punkty < 0) {
//   console.log(
//     "Nieprawidłowa liczba punktów! Wpisz liczę w przediale od 0 do 100."
//   );
// } else if (punkty > 100) {
//   console.log(
//     "Nieprawidłowa liczba punktów! Wpisz liczę w przediale od 0 do 100."
//   );
// } else if (punkty <= 25) {
//   console.log("Zdobyłeś " + punkty + " puntów/y. Otzymałeś ocenę: 1");
// } else if (punkty <= 49) {
//   console.log("Zdobyłeś " + punkty + " puntów/y. Otzymałeś ocenę: 2");
// } else if (punkty <= 75) {
//   console.log("Zdobyłeś " + punkty + " puntów/y. Otzymałeś ocenę: 3");
// } else if (punkty <= 85) {
//   console.log("Zdobyłeś " + punkty + " puntów/y. Otzymałeś ocenę: 4");
// } else if (punkty <= 99) {
//   console.log("Zdobyłeś " + punkty + " puntów/y. Otzymałeś ocenę: 5");
// } else {
//   console.log("Zdobyłeś " + punkty + " puntów/y. Otzymałeś ocenę: 6");
// }

// const punkty = prompt("Ile masz punktów?");
// const punkciki = Number(punkty);
// if (punkciki < 0 || punkciki > 100) {
//   console.log("Złe dane");
// } else if (punkciki < 26) {
//   console.log("Przykro mi dostajesz 1");
// } else if (punkciki < 50) {
//   console.log("Dostajesz 2");
// } else if (punkciki < 76) {
//   console.log("Dostajesz 3");
// } else if (punkciki < 86) {
//   console.log("Dostajesz 4");
// } else if (punkciki < 100) {
//   console.log("Dostajesz 5");
// } else {
//   console.log("Dostajesz 6");
// }

// const wynik = prompt("Ile masz punktów?");

// if (wynik < 0 || wynik > 100) {
//   alert("Nieprawidłowy wynik");
// } else if (wynik < 26) {
//   alert("Dostajesz 1");
// } else if (wynik < 50) {
//   alert("Dostajesz 2");
// } else if (wynik < 76) {
//   alert("Dostajesz 3");
// } else if (wynik < 86) {
//   alert("Dostajesz 4");
// } else if (wynik < 100) {
//   alert("Dostajesz 5");
// } else {
//   alert("Dostajesz 6");
// }

// if (wynik < 26) {
//   console.log("prawda");
// } else {
//   console.log("fałsz");
// }

// // warunek ? jesli prawda : jesli fałsz
// wynik < 26 ? console.log("prawda") : console.log("fałsz");

// const imie = prompt("Podaj imie");

// switch (imie) {
//   case "Kasia":
//     console.log("Hej Kasia");
//     break;

//   case "Tomek":
//   case "Piotrek":
//     console.log(`Czesc ${imie}`);
//     break;

//   case "Łukasz":
//     console.log("Siemka Łukasz");
//     break;

//   case "Mati":
//     console.log("Dzien dobry Mati");
//     break;

//   default:
//     console.log("Hej");
// }

// i += 3 -> i = i + 3

// i++ -> i = i + 1

// let liczba = 0;
// console.log(liczba);
// liczba = liczba + 1;
// console.log(liczba);

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 10; i += 3) {
//   console.log("I ma wartość: " + i);
// }

// wypisać wszytskie liczby parzyste z przedzialu 0-100}

// for (let i = 0; i <= 100; i += 2) {
//   console.log(i);
// }

// for (let i = 0; i <= 100; i += 2) {
//   console.log("liczba: " + i);
// }

// for (let i = 0; i <= 100; i += 2) {
//   console.log(i);
// }

// for (let i = 0; i <= 100; i++) {
//   //   if (i % 2 == 0) {
//   //     console.log(i);
//   //   }
//   i % 2 == 0 ? console.log(i) : "";
// }

// const owoce = ["jabłko", "gruszka", "banan", "ananas", "śliwka"];

// // owoce.push("agrest");

// // owoce.pop();

// const imie = "Aleksandra";

// for (let i = imie.length - 1; i >= 0; i--) {
//   console.log(imie[i]);
// }

// console.log(owoce);

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let i = 11;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);
