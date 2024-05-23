/* Задание 1 (тайминг 20 минут)
Создать механизм для безопасного добавления метаданных к 
объектам книг с использованием Symbol.
1. Создать уникальные символы для метаданных: отзывы, рейтинг, теги.
2. Реализовать функции addMetadata (добавление метаданных) 
и getMetadata (получение метаданных).
3. Создать объект книги, добавить метаданные и вывести их на консоль.*/

// Функция для добавления метаданных к объектам
function addMetadata(book, metadataType, data) {
  if (book[metadataType]) {
    book[metadataType].push(data);
  } else {
    book[metadataType] = [data];
  }
  // book[metadataType] = [data];
}

// Функция для извлечения метаданных из объекта
function getMetadata(book, metadataType) {
  return book[metadataType];
}

// Creating object and adding metadata
const book = {
  title: "1984",
  author: "George Orwell",
};

const reviewSymbol = Symbol("review");
const ratingSymbol = Symbol("rating");
const tagsSymbol = Symbol("tags");

addMetadata(book, reviewSymbol, "Nice book");
addMetadata(book, ratingSymbol, 5);
addMetadata(book, tagsSymbol, "dystopia");

// Output metadata - вывод метаданных для книги
console.log(getMetadata(book, reviewSymbol));
console.log(getMetadata(book, ratingSymbol));
console.log(getMetadata(book, tagsSymbol));

// --- Задача 2.
/* Используя Symbol.iterator, создайте объект "Библиотека", который можно 
итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.
1. Создайте объект library, который содержит массив книг и имеет свойствосимвол Symbol.iterator.
2. Реализуйте кастомный итератор для объекта library. Итератор должен 
перебирать книги по порядку.
3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на консоль.
Массив книг: 
const books = [
{ title: "1984", author: "George Orwell" },
{ title: "Brave New World", author: "Aldous Huxley" },
{ title: "Fahrenheit 451", author: "Ray Bradbury" }
];*/

const books = [
  { title: "1984", author: "George Orwell" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
];

books[Symbol.iterator] = function () {
  return {
    current: 0,
    to: this.length,
    next() {
      return this.current < this.to
        ? { done: false, value: books[this.current++] }
        : { done: true };
    },
  };
};

for (const book of books) {
  console.log(`Title: ${book.title}, Author: ${book.author}`);
}

/* Задание 3 (тайминг 15 минут)
Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые 
не являются стандартными массивами, но похожи на них. Однако у таких коллекций нет методов массива, и здесь на помощь приходит Array.from. В этом задании вы научитесь конвертировать коллекции DOM-элементов в массивы и работать с ними.
Дан код html:
<div>Element 1</div>
<div data-active="true">Element 2</div>
<div>Element 3</div>
<div data-active="true">Element 4</div>
Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и фильтрует только те из них, у которых есть атрибут data-active.
Выведите результат на консоль.*/

const divElements = Array.from(document.querySelectorAll("div"));

const activeDivs = divElements.filter((element) =>
  element.hasAttribute("data-active")
);

activeDivs.forEach((element) => {
  console.log(element);
});

/* Задание 4 (тайминг 20 минут)
Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, кто из них посетил какие уроки и кто из преподавателей вёл данные уроки. 
1. Map будет использоваться для хранения соответствия между уроком и 
преподавателем.
2. Set будет использоваться для хранения уникальных уроков, которые 
посетил каждый студент.

1. Map: урок => преподаватель
let lessons = new Map(); // "Математика", "Смирнов"
"История", "Иванова"

// 2. Map: студент => Set уроков
// Проверка:
console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`); // Смирнов
console.log(`Уроки Ивана: тут вывод уроков Ивана`); // математика, история */

let lessons = new Map();

lessons.set("Математика", "Смирнов");
lessons.set("История", "Иванова");

const ivanLessons = new Set()
  .add("Математика")
  .add("История")
  .add("Математика");

const students = new Map();
students.set("Иван", ivanLessons);

console.log(`Преподаватель по математике: ${lessons.get("Математика")}`);
console.log(`Учитель истории: ${lessons.get("История")}`);
console.log(`Уроки Ивана: ${[...students.get("Иван")]}`);
