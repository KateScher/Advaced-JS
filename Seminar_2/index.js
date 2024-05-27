/* Задание 1 (тайминг 25 минут)
Давайте создадим класс для управления банковским счетом. В этом классе будет приватное свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
1. Класс должен содержать приватное свойство #balance, которое инициализируется значением 0 и представляет собой текущий баланс счета.
2. Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
3. Реализуйте метод deposit(amount), который позволит вносить средства на счет. Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте ошибку.
4. Реализуйте метод withdraw(amount), который позволит снимать средства со счета. Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в противном случае выбрасывайте ошибку.
5. Реализуйте конструктор, который принимает начальный баланс в качестве аргумента. Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте ошибку.*/

// class BankAccount {
//   // Приватное свойство для хранения баланса
//   #balance = 0;
//   constructor(amount) {
//     // constructor нужен для инициализации начального баланса
//     if (amount < 0) {
//       throw new Error("Отрицательный баланс");
//     }
//     this.#balance = amount; // записываем в приватное свойство баланс
//   }
//   // Геттер для получения текущего баланса
//   get balance() {
//     // для получения баланса (мы захотели узнать баланс)
//     return this.#balance;
//   }

//   set balance(amount) {
//     // set - чтобы нельзя было поменять значение
//     // выставление баланса
//     this.#balance = amount;
//   }
//   // Метод для внесения денег на счет
//   deposit(cash) {
//     if (cash <= 0) {
//       throw new Error("Сумма для депозита должна быть больше 0");
//     }
//     this.#balance += cash;
//     return this.#balance;
//   }
//   // withdraw(amount) Метод для снятия денег со счета
//   withdraw(cash) {
//     if (cash <= 0) {
//       throw new Error("Сумма для снятия должна быть больше 0");
//     }
//     if (this.#balance - cash < 0) {
//       throw new Error("Сумма для снятия больше суммы счета");
//     }
//     this.#balance -= cash;
//     return this.#balance;
//   }
//   // constructor(initialBalance) Конструктор для инициализации начального баланса
//   constructor(initialBalance) {
//     this.#balance = initialBalance;
// }
// }
// // Создаем новый банковский счет с начальным балансом 500
// let account = new BankAccount(500); // инициализируем 500 руб. на балансе
// console.log(account.balance); // Выводит: 500

// account.deposit(200);
// console.log(account.balance); // Выводит 700

// account.withdraw(100);
// console.log(account.balance); // Выводит: 600

// 2й вариант
class BankAccount {
  #balance = 0;
  set balance(value) {
    if (value < 0) {
      throw new Error("Initial balance < 0");
    }
    this.#balance = value;
  }

  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    try {
      if (amount < 0) {
        throw new amountError("Отрицательное пополнение");
      } else this.#balance += amount;
    } catch (e) {
      if (e.name === "amountError") {
        console.log(amountError);
      }
    }
  }
  withdraw(amount) {
    try {
      if (amount < 0) {
        throw new amountError("Отрицательное снятие");
      } else if (amount > this.balance) {
        throw new amountError("Снятие больше счета");
      } else this.#balance -= amount;
    } catch (e) {
      if (e.name === "amountError") {
        console.log(amountError);
      }
    }
  }
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
}

let account = new BankAccount(500);
account.balance = 10;
console.log(account.balance);
account.deposit(200);
console.log(account.balance);
account.withdraw(100);
console.log(account.balance);

/* Задание 2 (тайминг 35 минут)
У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а некоторые – нет.
Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния и instanceof.
1. Создайте базовый класс User с базовой информацией (например, имя и фамилия).
2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс 
PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока 
действия), а у RegularUser такого свойства нет.
3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и 
возвращает информацию о наличии и сроке действия премиум-аккаунта, используя 
Опциональную цепочку вызовов методов и оператор нулевого слияния.
4. В функции getAccountInfo используйте instanceof для проверки типа переданного 
пользователя и дайте соответствующий ответ.*/
// class User {
//   #name;
//   #family;
//   constructor(name, family) {
//     this.#name = name;
//     this.#family = family;
//   }

//   get name() {
//     return this.#name;
//   }

//   get family() {
//     return this.#family;
//   }
// }

// class PremiumUser extends User {
//   constructor(name, family) {
//     super(name, family);
//   }
//   premiumAccount = null;
//   setPremiumAccount() {
//     this.premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1);
//   }
// } // Пример: установите срок действия на год вперед

// // создать RegularUser
// class RegularUser extends User {
//   constructor(name, family) {
//     super(name, family);
//   }
// }

// function getAccountInfo(user) {
//   // Премиум аккаунт действителен до такой-то даты или информация отсутствует
//   // пользователь без премиум аккаунта
//   // Тип пользователя не определен
//   if (user instanceof PremiumUser) {
//     console.log(
//       `Премиум аккаунт действителен до ${new Date(
//         user.premiumAccount // или для даты можно использовать toLocalDateString
//       ).getFullYear()}` ?? "Информация отсутствует",
//       user.name,
//       user.family
//     );
//   } else if (user instanceof RegularUser) {
//     console.log("Пользователь без премиум аккаунта: ", user.name, user.family);
//   } else {
//     console.log("Тип пользователя не определен");
//   }
// }

// // Проверка
// const regular = new RegularUser("Вася", "Пупкин");
// const premium = new PremiumUser("Katya", "Scherbakova");
// premium.setPremiumAccount();
// const premiumLim = new PremiumUser("Sveta", "Svetoch");

// getAccountInfo(regular);
// getAccountInfo(premium);
// getAccountInfo(premiumLim);

// ---------------------2й вариант
// class User {
//   constructor(userName, userSurname) {
//     this.userName = userName;
//     this.userSurname = userSurname;
//   }
// }

// class PremiumUser extends User {
//   constructor(userName, userSurname) {
//     super(userName, userSurname);
//   }
//   premiumAccount = null;
//   setPremiumAccount() {
//     this.premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1);
//   }
// }

// class RegularUser extends User {
//   constructor(userName, userSurname) {
//     super(userName, userSurname);
//   }
// }

// function getAccountInfo(user) {
//   if (user instanceof PremiumUser) {
//     return `Premium account ${user.userName}, ${
//       user.userSurname
//     } valid: ${new Date(user.premiumAccount).getFullYear()}`;
//   } else if (user instanceof RegularUser) {
//     return `Regular account ${user.userName}, ${user.userSurname}`;
//   } else return "Unkown user";
// }

// const regular = new RegularUser("Ivan", "Ivanov");
// const premium = new PremiumUser("Maria", "Petrova");
// premium.setPremiumAccount();
// const exPremium = new PremiumUser("1337", "42");

// console.log(getAccountInfo(regular));
// console.log(getAccountInfo(premium));
// console.log(getAccountInfo(exPremium));

// const button = document.querySelector("#myNumber");
// console.log(button);

// const callback = () => {
//     console.log("Must be number");
// };
// button.addEventListener("click", callback);
// const inputText = document.getElementById("textField");
// const inputButton = document.getElementById("buttonField");

// inputText.oninput = disableButton;

// function disableButton() {
//   document.getElementById("result").innerHTML = inputText.value;
//   if (inputText.value != "") {
//     inputButton.disabled = false;
//   } else {
//     inputButton.disabled = true;
//   }
// }

// 3й вариант
class User {
  #name = null;
  #surname = null;
  #age = null;

  constructor(name, surname, age) {
    this.#name = name;
    this.#surname = surname;
    this.#age = age;
  }

  get name() {
    return this.#name;
  }
  get surname() {
    return this.#surname;
  }
  get age() {
    return this.#age;
  }

  set name(value) {
    this.#name = value;
  }
  set surname(value) {
    this.#surname = value;
  }
  set age(value) {
    this.#age = value;
  }
}

class PremiumUser extends User {
  #premiumAccount = null;

  constructor(name, surname, age, year) {
    super(name, surname, age);
    // Пример: установите срок действия на год вперед
    this.#premiumAccount = new Date().setFullYear(
      new Date().getFullYear() + year
    );
  }

  get premiumAccount() {
    return new Date(this.#premiumAccount).toLocaleDateString();
  }
}

// создать RegularUser
class RegularUser extends User {
  constructor(name, surname, age) {
    super(name, surname, age);
  }
}

function getAccountInfo(user) {
  const date = user?.premiumAccount;
  if (user instanceof PremiumUser)
    console.log(`Премиум аккаунт действителен до ${date}`);
  else if (user instanceof RegularUser)
    console.log("Пользователь без премиум аккаунта");
  else console.log("Тип пользователя не определен");
}

const vipUser = new PremiumUser("Мажор", "Мажоров", 45, 3);
const nonentityUser = new RegularUser("Отброс", "Никчёмный", 27);
const unknownUser = new User("Непойми", "Кто", 99);

getAccountInfo(vipUser);
getAccountInfo(nonentityUser);
getAccountInfo(unknownUser);
