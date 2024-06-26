/* Задание 2 (тайминг 25 минут)
Создать интерактивную веб-страницу, где пользователи могут вводить текст, сохранять его в localStorage, а затем загружать или удалять сохраненные данные.
Разработка Интерфейса:
Создать HTML-страницу с:
● Одним текстовым полем для ввода данных пользователем.
● Тремя кнопками: "Сохранить", "Загрузить" и "Очистить".
● Местом для отображения сохраненного текста.
Программирование Логики на JavaScript:
1. При нажатии на "Сохранить", введенный текст должен сохраняться в localStorage.
2. При нажатии на "Загрузить", текст из localStorage должен отображаться на странице.
3. При нажатии на "Очистить", сохраненный текст должен быть удален из localStorage, и соответствующее сообщение отображается на странице. */
"use strict";

const inputEl = document.querySelector(".input");
const saveBtn = document.querySelector(".save");
const loadBtn = document.querySelector(".load");
const clearBtn = document.querySelector(".clear");
const viewBox = document.querySelector(".view");

saveBtn.onclick = () => {
  localStorage.setItem("text", inputEl.value);
  inputEl.value = "";
  alert("Saved to LocalStorage");
};

loadBtn.onclick = () => (viewBox.innerHTML = localStorage.getItem("text"));

clearBtn.onclick = () => {
  inputEl.value = "";
  viewBox.innerHTML = "";
  localStorage.removeItem("text");
  alert("LocalStorage cleared");
};
