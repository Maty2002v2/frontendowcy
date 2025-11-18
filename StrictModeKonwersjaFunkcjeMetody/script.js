// "use strict";

// template literal
// const imie = "Marek";
// console.log(`Witaj ${imie}`);
// console.log("Witaj" + imie);

// strict mode
// "use strict"
// let username = "Mruczek";
// usernmae = "Filemon";
// delete username;
// console.log(username);

// Konwersja typów (zmiana jednego typu danych na inny)
// String()
// Number()
// Boolean()

// console.log(String(10));
// console.log(String("10"));
// console.log(Number("10"));
// console.log(Number(10));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Boolean(Number("0")));
// console.log(Boolean(3));
// console.log(Boolean("false"));
// console.log(Number("false"));
// console.log("5" + 5);
// console.log("5" - 3);

// Equality Operators (== vs ===)
// console.log(5 == "5");
// console.log(5 === "5");
// console.log(null == undefined);
// console.log(NaN === NaN);
// console.log(0 == false);
// console.log(0 === false);

// function dodawanie(liczba1, liczba2) {
//   return liczba1 + liczba2;
// }

// // let wynik = dodawanie();
// console.log(`Wynik to: ${dodawanie(4, 5)}`);
// console.log(`Wynik to: ${dodawanie(1, 1)}`);
// console.log(`Wynik to: ${dodawanie(100, 600)}`);

// Tworzymy funkje przywitaj która ma dostać parametr z imieniem i jej wynikiem w consoli ma być tekst "Witaj, Bartek"
// function przywitaj(imie) {
//   return "witaj " + imie;
// }
// console.log(przywitaj("Bartek"));

// function czy_pelnoletni(lata) {
//   if (lata >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function przywitanie(czyPelnoletni) {
//   if (czyPelnoletni) {
//     console.log("Miłej zabawy");
//   } else {
//     console.log("No niestety");
//   }
// }

// const lata = prompt("Ile masz lat");
// const wynikiCzyPelnoletni = czy_pelnoletni(lata);

// przywitanie(wynikiCzyPelnoletni);

// Zrobienie funkcji która dostanie 3 parametry, funcja będzie nazywać się oblicz, a parametry to liczba1, liczba2, działanie

// przykład działania funkcji oblicz
// oblicz(2, 6, "dodawanie") -> 8
// oblicz(2, 6, "odejmowanie") -> -4
// oblicz(2, 6, "mnożenie") -> 12
// oblicz(2, 6, "dzielenie") -> 0.33333333333
