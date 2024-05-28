/* Урок 2. Продвинутая работа с функциями и классами
Задание 1
Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.*/

class Library {
  #books = [];
  constructor(initialBooks) {
    const uniqueBooks = new Set(initialBooks);
    if (uniqueBooks.size !== initialBooks.length) {
      throw new Error("Список книг не должен содержать дубликатов.");
    }

    this.#books = initialBooks;
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error("Книга с таким названием уже существует в библиотеке.");
    }

    this.#books.push(title);
  }

  removeBook(title) {
    const index = this.#books.indexOf(title);
    if (index === -1) {
      throw new Error("Книги с таким названием нет в библиотеке.");
    }

    this.#books.splice(index, 1);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

const myLib = new Library(["Война и мир", "Отцы и дети", "Дубровский"]);

console.log(myLib.allBooks);

myLib.addBook("Руслан и Людмила");
console.log(myLib.allBooks);

myLib.removeBook("Отцы и дети");
console.log(myLib.allBooks);
myLib.removeBook("Фантастика");
console.log(myLib.allBooks);

console.log(myLib.hasBook("Война и мир"));
console.log(myLib.hasBook("Отцы и дети"));
