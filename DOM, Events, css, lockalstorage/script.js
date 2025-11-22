// DOM - document object model
// Events - user interactions
// CSS - styling
// localStorage - web storage API

// pobrac element -> by zrobic akcje

// Pobieranie elementu po ID
const header = document.getElementById("title");

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
