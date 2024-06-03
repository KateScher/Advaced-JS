/* Урок 3. Промисы. Хранилище
Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

//  ------Страница добавления отзыва:------
Поле для ввода названия продукта.
Текстовое поле для самого отзыва.
Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.*/

const selectProduct = document.querySelector(".nameProduct");
const reviewUser = document.querySelector(".rew");
const buttonAdd = document.querySelector(".btn_add");
const pError = document.querySelector(".message-err");

buttonAdd.addEventListener("click", function () {
  const product = selectProduct.value;
  const writeReview = reviewUser.value;
  console.log(product);
  console.log(writeReview);

  if (product !== "" && writeReview !== "") {
    let reviewBacks = JSON.parse(localStorage.getItem(product));
    if (reviewBacks === null) {
      reviewBacks = [];
    }
    reviewBacks.push(writeReview);
    localStorage.setItem(product, JSON.stringify(reviewBacks));
  } else {
    pError.textContent = "Заполните все поля!";
  }
});
