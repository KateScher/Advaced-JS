/* Symbol — это встроенный объект, конструктор которого возвращает значение примитивного типа symbol. Такие значения называют символьными значениями (Symbol value) или просто символами (Symbol), их основная особенность в том, что они гарантируют уникальность. Символы часто используются в качестве уникальных ключей объекта.*/

const symbol = Symbol(); // объявление

// const dogID = Symbol("dog"); // значение уникально, даже если мы создадим несколько символов с одинаковым описанием

const dog1 = Symbol("dog");
const dog2 = Symbol("dog");

console.log(dog1 === dog2); // false
/////////
const dogID = Symbol("super dog");
console.log(dogID.description); // dog - можно посмотреть описание

//////

// let id = Symbol("dogID");
// let buddy = {
//   [id]: "Жучка",
// };

// buddy[id] = "Бобик"; // идентификаторы создаются уникальными всегда
// console.log(buddy[id]); // Жучка

/////// Проблемы, которые могут возникнуть без использования Symbol
// let buddy = { name: "Тузик" }; // Обяъявлем в нашем скрипте свойство id
// buddy.id = "Наш идентификатор"; //.. другой скрипт тоже хочет свой идентификатор
// buddy.id = "Их идентификатор"; // Ой! Свойство перезаписано сторонней библиотекой
// console.log(buddy.id); // выведется => 'Их идентификатор'

// // Как решить?
// let buddies = {
//   [Symbol("Жучка")]: "Жучка",
//   [Symbol("Мурка")]: "Мурка",
//   [Symbol("Таракашка")]: "Таракашка",
//   elephant: "Слон",
// };
// console.log(buddies);

// let newBuddies = {};
// Object.assign(newBuddies, buddies); // копирует все свойства, в т.ч., и символьные
// buddies.cat = "Барсик";

// console.log(newBuddies);
// console.log(buddies);

// // -----Symbol.for ------

// читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for("id"); // если символа не существует, он будет создан

// читаем его снова и записываем в другую переменную (возможно из другого места кода)
let idAgain = Symbol.for("id");

// Проверяем: это один и тот же символ
alert(id === idAgain); // true

// // ---- Symbol.keyfor -------- описание символа по идентификатору
//  получаем символ по имени
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// поулчаем имя по символу
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id
