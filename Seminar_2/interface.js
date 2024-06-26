/* Задание 3 (тайминг 15 минут)
Вы создаете интерфейс, где пользователь вводит число. 
Ваша задача — проверить, является ли введенное значение числом или нет, и дать соответствующий ответ.
1. Создайте HTML-структуру: текстовое поле для ввода числа и кнопку 
"Проверить".
2. Добавьте место (например, div) для вывода сообщения пользователю.
3. Напишите функцию, которая будет вызвана при нажатии на кнопку. Эта функция 
должна использовать try и catch для проверки вводимого значения. */

const inputEl = document.querySelector("#num");
const btnEl = document.querySelector("button");
const showEl = document.querySelector(".show");

btnEl.addEventListener("click", function (e) {
  e.preventDefault();
  try {
    if (isNaN(inputEl.value)) throw new Error("Not a Number!");
    showEl.innerText = "Num = " + inputEl.value;
  } catch (error) {
    showEl.innerText = error.message;
  }
});
