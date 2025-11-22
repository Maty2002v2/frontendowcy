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

// let zdanie = "Jesteśmy z każdym dniem coraz gorsi w programowanie";
// zdanie = zdanie.replace("gorsi", "lepsi");
// zdanie = zdanie.replace("każdym", "KAŻDYM").replace("dniem", "DNIEM");
// zdanie = zdanie + "!";
// console.log(zdanie);

// let punkty = prompt("Ile punktów dodajemy?");
// let wynik = 10;
// punkty = Number(punkty);
// let suma = wynik + punkty;
// console.log("Suma punktów:", suma);
// (true&&true)||((true||true)&&(false||true))||false
// true || true || false
// const imiona = ["Kasia", "Marzena", "Kamil", "Piotrek", "Łukasz"];
// console.log("Cześć, mam na imię " + imiona[1] + " i mój index to: 1");


// let numbers = [1, 2, 3];
// console.log(numbers);
// numbers.push(4, 5);
// console.log(numbers);
// numbers.shift();
// console.log(numbers);
// let zawieraTrzy = numbers.includes(3);
// console.log("Tablica: ", numbers);
// console.log("Czy zawiera 3?", zawieraTrzy);
// console.log("Długość tablicy:", numbers.length);
// const numbers = [1, 2, 3, 4, 5];


// const result = numbers.find((obecnyElement) => {
//     return obecnyElement > 2
// })
// console.log(result);


// console.log(owocki);
// console.log(editedOwocki);

// const owocki = ["jabłko", "gruszka", "banan", "ananas", "śliwka"];
// owocki.forEach((nazwy) => {
//     console.log(nazwy);
// })
// owocki.push("truskawka");
// console.log(owocki);

// const editedOwocki = owocki.map((obecnaWartosc) => {
//     return obecnaWartosc + "a";
// })

// const jestSliwka = owocki.includes("śliwka");

// console.log("Czy jest śliwka? ", jestSliwka);

// const indexAnanasa = owocki.indexOf("ananas");
// const wyrzucone = owocki.splice(indexAnanasa, 1);

// console.log(`Wyrzuciłam ${wyrzucone[0]}, bo był robaczywy`);
// console.log("Pozostałe owoce:", owocki);

// console.log("Liczba owoców:", owocki.length);

// let owocki2 = owocki;
// console.log(owocki2);

// const users = [
//     { name: "Anna", age: 17, role: "student" },
//     { name: "Bartek", age: 22, role: "admin" },
//     { name: "Celina", age: 19, role: "student" },
//     { name: "Darek", age: 30, role: "user" },
// ];
// const pelnoletni = users.filter(user => {
//     const wiek = user.age;
//     return wiek >= 18;
// });
// console.log(pelnoletni);

// const imiona = users.map(user => user.name);
// console.log(imiona);

// const tylkoStudenci = users.filter(u => u.role === "student");
// const iluStudentow = tylkoStudenci.length;
// console.log(iluStudentow);

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     console.log(`Hej,`);
//     if (user.age > 18) {
//         console.log(`${user.name}! Chodź na piwo!`);
//         continue;
//     }
// }
// function hello(name) {
//     return name;
// }
// console.log(`Witaj ${hello("Marzena")}`);

// const login = prompt("Podaj login:");
// switch (login) {
//     case "admin":
//         console.log("Witaj admin");
//         break;

//     case "user":
//         console.log("Witaj użytkowniku");
//         break;

//     default:
//         console.log("Nieznany użytkownik");
// }

// const message = "Hello JavaScript World";
// const words = message.split(" ");
// console.log("Liczba słów:", words.length);

// console.log(message.toUpperCase());

// console.log("Litera o indeksie 6:", message[6]);

// console.log("Odwrócona kolejność słów:", words.reverse());

// const user = {
//     imie: "Marzena",
//     wiek: 26,
//     pieniadze: 1500,
//     przywitajSie() {
//         console.log(`Cześć, jestem ${this.imie}`);
//     },
//     czyDorosly() {
//         return this.wiek >= 18;
//     },
//     czyMnieStac(kwota) {
//         if (this.pieniadze >= kwota) {
//             return `Tak, stać mnie na to, żeby wydać ${kwota} zł`;
//         } else {
//             return `Nie, nie stać mnie na to, żeby wydać ${kwota} zł`;
//         }
//     }
// };
// user.przywitajSie();
// console.log("Czy dorosły?", user.czyDorosly());
// console.log(user.czyMnieStac(2000));
// console.log(user.czyMnieStac(100));


class User {
    constructor(imie, wiek, pieniadze, waga, wzrost, maAlergieNa) {
        this.imie = imie
        this.wiek = wiek
        this.pieniadze = pieniadze
        this.waga = waga
        this.wzrost = wzrost
        this.maAlergieNa = maAlergieNa
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
            return true
        }
        else { return false };
    }
    kup(kwota) {
        if (this.czyMnieStac(kwota)) {
            console.log("Stac mnie");
            this.pieniadze = this.pieniadze - kwota;
            console.log(`Zostalo ci ${this.pieniadze}`);
        }

        else {
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
    wzrostWMetrachDoKwadratu() {
        const wzrost = this.wzrost;
        const doBMI = (wzrost / 100) * (wzrost / 100);
        return doBMI;
    }
    policzBMI() {
        const waga = this.waga;
        const BMI = waga / this.wzrostWMetrachDoKwadratu();
        const naCzesci = BMI.toString().split("."); //rozdzielam na przedprzecinkowe i poporzecinkowe
        const przedPrzecinkiem = Number(naCzesci[0]);
        const poPrzecinku = naCzesci[1];
        let wynik;
        if (poPrzecinku[1] >= 5) {
            wynik = (przedPrzecinkiem * 10 + Number(poPrzecinku[0]) + 1) / 10;
        } else {
            wynik = (przedPrzecinkiem * 10 + Number(poPrzecinku[0])) / 10;
        }
        console.log(`BMI osoby o imieniu ${this.imie} wynosi ${wynik}`);
    }
    czyMozeZjesc(potrawa) {
        if (potrawa.czyZawieraAlergen(this.maAlergieNa)) {
            console.log(`${this.imie}, Nie może zjeść potrawy ${potrawa.nazwa}, bo zawiera alergen: ${this.maAlergieNa}!`);
            return false;
        } else {
            console.log(`${this.imie}, może zjeść ${potrawa.nazwa}`);
            return true;
        }
    }
}
class Potrawa {
    constructor(nazwa, alergen1, alergen2, alergen3) {
        this.nazwa = nazwa;
        this.alergen1 = alergen1;
        this.alergen2 = alergen2;
        this.alergen3 = alergen3;
    }
    czyZawieraAlergen(alergen) {
        if (
            this.alergen1 === alergen ||
            this.alergen2 === alergen ||
            this.alergen3 === alergen
        ) {
            return true;
        } else {
            return false;
        }
    }
}

const user0 = {
    imie: "Ola",
    wiek: 25,
    pieniadze: 500,
    waga: 55,
    wzrost: 160,
};
const user1 = new User("Marek", 30, 6500, 70, 180, "orzechy");
const user2 = new User("Ola", 23, 2000, 54, 158, "laktoza");
const potrawa1 = new Potrawa("Lody czekoladowe", "laktoza", "jajka", "orzechy");
const potrawa2 = new Potrawa("Bolognese", "gluten", "pomidory", "laktoza");
const potrawa3 = new Potrawa("Carbonara", "gluten", "laktoza", "czosnek");
const potrawa4 = new Potrawa("Curry wegańskie", "kokos", "orzechy", "kolendra")
console.log(user0);
console.log(user1);
console.log(user2);
user1.kup(500);
user1.wyplata(1000);
user1.policzBMI();
user1.czyMozeZjesc(potrawa1);
user2.czyMozeZjesc(potrawa4);

