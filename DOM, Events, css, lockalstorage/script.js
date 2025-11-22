// DOM - document object model
// Events - user interactions
// CSS - styling
// localStorage - web storage API

// pobrac element -> by zrobic akcje

// Pobieranie elementu po ID
// const header = document.getElementById("title");

// Pobieranie elementow po klasie
// Starszy sposob na zamiane html collection na tablice
// const buttons = Array.from(document.getElementsByClassName("button"));

// Nowszy sposob na zamiane html collection na tablice
const buttons = [...document.getElementsByClassName("button")];

// Pobieranie elementow po tagu
const inputByTag = document.getElementsByTagName("input");

const queryId = document.querySelector("#changeColorBtn1");
const queryClass = document.querySelector(".button");
const queryTag = document.querySelector("input");
const queryTagMaster = document.querySelector("input[type='number']");

const queryAllId = document.querySelectorAll("#changeColorBtn1");
const queryAllClass = document.querySelectorAll(".button");
const queryAllTag = document.querySelectorAll("input");
const queryTagAllMaster = document.querySelectorAll("input[type='number']");
const queryTagAllMaster2 = document.querySelectorAll("button.button-red");

// console.log("header", header);
// console.log("buttons", buttons);
// console.log("inputByTag", inputByTag);
// console.log("queryId", queryId);
// console.log("queryClass", queryClass);
// console.log("queryTag", queryTag);
// console.log("queryTagMaster", queryTagMaster);
// console.log("queryAllClass", queryAllClass);

// console.log("queryAllId", queryAllId);
// console.log("queryAllClass", queryAllClass);
// console.log("queryAllTag", queryAllTag);
// console.log("queryTagAllMaster", queryTagAllMaster);
// console.log("queryTagAllMaster2", queryTagAllMaster2);

// Odczytanie teksstu
// console.log(header.textContent);
// console.log(header.innerHTML);

// Zamina kontentu
// header.textContent = "Nowy tytul strony";
// header.innerHTML = "Nowy tytul strony";
// queryId.textContent = "Zmieniono kolor przycisku 1";

// const productBox = document.querySelector("div.product-box");
// productBox.textContent = "<h3>Nowa zawartosc diva o klasie product-box</h3>";

// productBox.innerHTML = "<h3>Nowa zawartosc diva o klasie product-box</h3>";

// Stworz funkcje kopia ktora jako parametr dostaje wartosc id jakiegos elementu
// nastepnie w funkcji pobierz elemnt po jego id (wartosc podana w parametrze)
// nastepnie pobierz element o id #docelowy (bedzie to div ktory jest juz stworzymy w html)
// nastepnie przez textContent skopiuj tekst z elementu pobranego po parametrze do elemetu #docelowy

// function kopia(idElementu) {
//   const element = document.getElementById(idElementu);

//   const divDocelowy = document.getElementById("docelowy");

//   divDocelowy.textContent = element.innerHTML;
// }

// kopia("div2");

// style
// header.style.color = "blue";
// header.style.backgroundColor = "lightgray";

// const kolor = prompt("Podaj kolor nagłówka (np. red, #ff0000):");

// function ustawKolorNaglowka() {
//   if (!kolor) {
//     alert("Nie podałeś koloru!");

//     return;
//   }

//   const header = document.querySelector("h1");

//   if (header) {
//     header.style.color = kolor;
//   } else {
//     alert("Na stronie nie ma elementu <h1>!");
//   }
// }

// ustawKolorNaglowka();

// const wybranyKolor = prompt("Wpisz kolor:");
// header.style.color = wybranyKolor;

// Atrybuty
const image = document.querySelector("img");
// image.alt = "Opis alternatywny obrazka";
// image.src = "https://via.placeholder.com/150";

// console.log(image.getAttribute("src"));
// image.setAttribute("alt", "Nowy opis alternatywny 2");

// const buttonRed = document.getElementById("changeColorBtn1");
// const price = buttonRed.getAttribute("data-price");
// buttonRed.setAttribute("data-price", "100");
// console.log(price);

// Events
// const buttonRed = document.getElementById("changeColorBtn1");

// buttonRed.addEventListener("click", () => {
//   console.log("Kliknieto przycisk czerwony");
// });

// mini zadanie

const colorButtons = [...document.querySelectorAll(".button")];
const header = document.getElementById("title");

colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.getAttribute("data-color");
    header.style.color = color;

    const spanWPrzycisku = button.querySelector("span");

    const staraWartosc = Number(spanWPrzycisku.textContent);
    const nowaWartosc = staraWartosc + 1;

    spanWPrzycisku.textContent = nowaWartosc;

    // localStorage
    localStorage.setItem(color, nowaWartosc);
  });
});

// _____________________________________________________________________________________

// TODO: przy ladowaniu strony sprawdzic czy w localStorage sa wartosci dla kolorow
// jesli tak to zaktualizowac liczniki w przyciskach

// Można to zrobić np dzieki wydarzeniu zdarzeniu load, które jest wywoływane
// gdy cała strona (wraz z zasobami takimi jak obrazy) została w pełni załadowana.
// window.addEventListener("load", () => {})

// Wtedy mozna pobrac wartosci z localStorage i zaktualizowac liczniki w przyciskach
// w podobny sposob jak w event listenerach powyzej

// _____________________________________________________________________________________

// const buttonRed = document.getElementById("changeColorBtn1");
// const buttonGreen = document.getElementById("changeColorBtn2");
// const buttonYellow = document.getElementById("changeColorBtn3");
// const buttonBlue = document.getElementById("changeColorBtn4");

// buttonRed.addEventListener("click", () => {
//   header.style.color = "red";
// });

// buttonGreen.addEventListener("click", () => {
//   header.style.color = "green";
// });

// buttonYellow.addEventListener("click", () => {
//   header.style.color = "yellow";
// });

// buttonBlue.addEventListener("click", () => {
//   header.style.color = "blue";
// });

// buttonWhite.addEventListener("click", () => {
//   header.style.color = "white";
// });

// localStorage
// localStorage.setItem("wynik", 100);
// const wynik = localStorage.getItem("wynik");
// console.log(wynik);

// localStorage.removeItem("wynik");
