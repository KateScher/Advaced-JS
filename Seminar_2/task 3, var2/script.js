const inputEl = document.querySelector("#input");
const btnEl = document.querySelector("#button");
const showEl = document.querySelector("#block");

btnEl.addEventListener("click", function (e) {
  try {
    const inputEl = num.value;
    if (isNaN(inputEl.value)) throw new Error("Not a Number!");
    showEl.textContent = "Молодец";
  } catch (error) {
    showEl.textContent = error.message;
  }
});
