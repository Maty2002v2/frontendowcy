"use strict";

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

// function oblicz1(liczba1, liczba2, dzialanie) {
//   liczba1 = Number(liczba1);
//   liczba2 = Number(liczba2);

//   if (isNaN(liczba1 || liczba2)) {
//     return "Nie wpisałeś liczb, spróbuj raz jeszcze aby wykonac działanie.";
//   }

//   if (isNaN(liczba1)) {
//     return "W pierwszym polu nie wpisałeś liczby, spróbuj raz jeszcze aby wykonac działanie.";
//   }

//   if (isNaN(liczba2)) {
//     return "W drugim polu nie wpisałeś liczby, spróbuj raz jeszcze aby wykonac działanie.";
//   }

//   if (dzialanie === "+") {
//     return (
//       `Wynik dodawania liczb ${liczba1} i ${liczba2} to: ` + (liczba1 + liczba2)
//     );
//   } else if (dzialanie === "-") {
//     return (
//       `Wynik odejmowania liczb ${liczba1} i ${liczba2} to: ` +
//       (liczba1 - liczba2)
//     );
//   } else if (dzialanie === "*") {
//     return (
//       `Wynik mnożenia liczb ${liczba1} i ${liczba2} to: ` + liczba1 * liczba2
//     );
//   } else if (dzialanie === "/") {
//     return (
//       `Wynik dzielenia liczb ${liczba1} i ${liczba2} to: ` + liczba1 / liczba2
//     );
//   } else {
//     return "Wybrano niepoprawny symbol działania, zacznij raz jeszcze.";
//   }
// }

// let liczba1 = prompt("Podaj pierwszą liczbę:");

// // console.log(liczba1);

// let liczba2 = prompt("Podaj drugą liczbę:");

// // console.log(liczba2);

// let dzialanie = prompt(
//   `Jakie działanie chcesz wykonać? \n Dodawanie wpisz: + \n Odejmowanie wpisz: - \n Mnożenie wpisz: * \n Dzielenie wpisz: /`
// );

// // console.log(dzialanie);

// console.log(`Hej! ${oblicz(liczba1, liczba2, dzialanie)}`);

// const l1 = Number(prompt("Podaj pierwszą liczbę"));

// const l2 = Number(prompt("Podaj drugą liczbę"));

// const dzial = prompt("Jakie działanie mam wykonać na tych liczbach: + - / *?");

// function oblicz2(l1, l2, dzial) {
//   if (isNaN(l1) || isNaN(l2)) {
//     return "Nie mogę podać wyniku. To nie są liczby.";
//   }

//   if (dzial === "+") {
//     wynik = l1 + l2;
//   } else if (dzial === "-") {
//     wynik = l1 - l2;
//   } else if (dzial === "/") {
//     if (l2 === 0) {
//       return "Nie mogę podać wyniku. Nie można dzielić przez zero.";
//     }

//     wynik = l1 / l2;
//   } else if (dzial === "*") {
//     wynik = l1 * l2;
//   } else {
//     return "Niepoprawny parametr. Użyj: +, -, / lub *.";
//   }

//   return wynik;
// }

// const wynikDzialania = oblicz(l1, l2, dzial);
// alert(`Wynik działania to: ${wynikDzialania}`);

// this
// const user = {
//   imie: "Ala",
//   wiek: 30,
//   hobby: ["szachy", "kolorowanie", "bieganie"],
//   wypiszHobby: function () {
//     this.hobby.forEach((hobby) => {
//       console.log(`${this.imie} interesuje sie ${hobby}`);
//     });
//   },
// };

// user.imie = "Marta";
// user.wypiszHobby();

// Zrobić obiekt user, będzie mieć w sobie klucze imie, wiek, pieniadze
// oraz metody przywitajSie - komunikat z imieniem
// czyDorosly - zwraca informacje czy osoba jest dorosla
// czyMnieStac - metoda przyjoje parametr kwota, i daje informacje czy osoba ma tyle pieniedzy

// const user = {
//   imie: "Marzena",
//   wiek: 26,
//   pieniadze: 1500,
//   przywitajSie() {
//     console.log(`Cześć, jestem ${this.imie}`);
//   },
//   czyDorosly() {
//     return this.wiek >= 18;
//   },
//   czyMnieStac(kwota) {
//     if (this.pieniadze >= kwota) {
//       return `Tak, stać mnie na to, żeby wydać ${kwota} zł`;
//     } else {
//       return `Nie, nie stać mnie na to, żeby wydać ${kwota} zł`;
//     }
//   },
// };

// user.przywitajSie();
// console.log("Czy dorosły?", user.czyDorosly());
// console.log(user.czyMnieStac(2000));
// console.log(user.czyMnieStac(100));

const user = {
  imie: "Ola",
  wiek: 25,
  pieniądze: 500,
  przywitajSie: function () {
    alert(`${this.imie}`);
  },
  czyDorosly: function () {
    return this.wiek >= 18;
  },
  czyMnieStac: function (kwota) {
    return this.pieniądze >= kwota;
  },
};

// TODO: NA KONIEC POWIEDZIEC O UTRACIE KONTEKSTU

// user.przywitajSie();
// console.log(user.czyDorosly());
// console.log(user.czyMnieStac(400));

// class
class User {
  constructor(imie, wiek, pieniadze) {
    this.imie = imie;

    this.wiek = wiek;

    this.pieniadze = pieniadze;

    // console.log(`Hej, powstalem, jest ${imie}, dodatkowa mam ${wiek} id odlozone ${pienadze} zł.`);
  }

  przywitajSie() {
    console.log(`Czesc, jestem ${this.imie}`);
  }

  czyDorosly() {
    if (this.wiek >= 18) {
      console.log("tak, dorsly");

      return true;
    } else {
      console.log("Nie, nie dorosly");

      return false;
    }
  }

  czyMnieStac(kwota) {
    if (this.pieniadze >= kwota) {
      return true;
    } else {
      return false;
    }
  }

  kup(kwota) {
    if (this.czyMnieStac(kwota)) {
      console.log("Stac mnie");

      this.pieniadze = this.pieniadze - kwota;

      console.log(`Zostalo ci ${this.pieniadze}`);
    } else {
      console.log("Nie stac mnie");
    }
  }

  wyplata(kwota) {
    if (this.czyDorosly()) {
      this.pieniadze = this.pieniadze + kwota * 0.88;
    } else {
      this.pieniadze = this.pieniadze + kwota;
    }

    console.log(`Masz teraz ${this.pieniadze}`);
  }
}

const user0 = {
  imie: "Ola",

  wiek: 25,

  pieniadze: 500,
};

const user1 = new User("Marek", 30, 6500);

const user2 = new User("Ola", 23, 2000);

console.log(user0);

console.log(user1);

console.log(user2);

user1.kup(500);

user1.wyplata(1000);

// console.log(user1);
// console.log(user2);
