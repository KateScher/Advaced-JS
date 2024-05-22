// let map = new Map();

// map.set("1", "str1"); // строка в качестве ключа
// map.set(1, "num1"); // цифра как ключ
// map.set(true, "bool1"); // булево значение как ключ

// console.log(map);

// // помните, обычный объект Object приводит ключи к строкам?
// // Map сохраняет тип ключей, так что в этом случае созранится 2 разных значения:
// console.log(map.get(1)); // 'num1'
// console.log(map.get("1")); // 'str1'
// console.log(map.size); // 3

//---- get, set

// let map = new Map();
// map.set("1", "We").set(1, "likes").set(true, "JS");

// console.log(map);

// ---------------- Перебор коллекции Мар

// let recipeMap = new Map([
//   ["огурец", 500],
//   ["помидор", 350],
//   ["лук", 50],
// ]);
// console.log(recipeMap);
// // перебор по ключам (овощи)
// for (let vegetable of recipeMap.keys()) {
//   console.log(vegetable); // огурец, помидор, лук
// }
// // // перебор по значениям (числа)
// for (let amount of recipeMap.values()) {
//   console.log(amount); // 500, 350, 50
// }
// // // перебор по элементам в формате [ключ, значение]
// for (let entry of recipeMap) {
//   // то же самое, что и recipeMap.entries()
//   console.log(entry); // огурец, 500 (и так далее)
// }

// // // выполняем функцию для каждой пары (ключ, значение)
// recipeMap.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`); // огурец: 500 и т.д.
// });

// ------------ Работа с объектами

// // Object.entries поможет создать Мар:
// let map = new Map(Object.entries(obj));
// // Object.fromEntries поможет создать объект из Мар:
// let obj = Object.fromEntries(map);

// ----------- Set ---------
// коллекция
let buddies = [
  "Жучка",
  "Тузик",
  "Булька",
  "Тузик",
  "Бобик",
  "Жучка",
  "Валера",
  "Жучка",
  "Тузик",
  "Манька",
];

let uniqueBuddies = new Set(buddies);
console.log(uniqueBuddies); // вывод только уникальных значений

// Перевести обратно из коллекции в массив с пом. метода Array.from
let arr = Array.from(uniqueBuddies);
console.log(arr);
