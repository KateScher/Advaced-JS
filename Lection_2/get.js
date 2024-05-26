// class AutoMobile {
//   _horsePowers = 0; // объявление приватного свойства _horsePowers со значением 0, используя синтаксис приватных полей

//   set horsePowers(value) {
//     //определение сеттера для свойства horsePowers
//     if (value < 0) throw new Error("Отрицательное количество сил"); // Проверка, что значение больше или равно 0, иначе выбрасывается исключение
//     this._horsePowers = value; // Установка значения свойства _horsePowers
//   }

//   get horsePowers() {
//     // Определение геттера для свойства horsePowers
//     return this._horsePowers; // Возвращает значение свойства _horsePowers
//   }

//   constructor(power) {
//     // определение конструктора класса
//     this._horsePowers = power; // Установка значения свойства _horsePowers при создании объекта класса
//   }
// }

// // создаем новую машину
// let auto = new AutoMobile(100); // Создание нового объекта класса AutoMobile и передача значения 100 в конструктор

// // устанавливаем количество сил
// auto.horsePowers = -10; // Установка значения свойства horsePowers на -10 вызвает исключение "Отрицательное количество сил"

// // Приватные свойства - эти свойства начинаются со знака # и имеют защиту на уровне языка.

// ------
class AutoMobile {
  #horsePowers = 0;

  set horsePowers(value) {
    if (value < 0) throw new Error("Отрицательное количество сил");
    this.#horsePowers = value;
  }

  get horsePowers() {
    return this.#horsePowers;
  }

  constructor(power) {
    this.#horsePowers = power;
  }
}

// создаем новую машину
let auto = new AutoMobile(100);
// устанавливаем количество сил через сеттер
auto.horsePowers = 50;
console.log(auto.horsePowers); // 50
// // устанавливаем количество сил напрямую
// auto.#horsePowers = 10; // синтаксическая ошибка
