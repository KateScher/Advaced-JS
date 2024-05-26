// Опциональная цепочка вызовов методов и оператор нулевого слияния (очень удобны для работы с объектами)
// Объект с информацией о пользователе
const user = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    street: "123 Main St",
  },
  contacts: {
    email: "john@example.com",
    phone: "+1234567890",
  },
};

// Опциональная цепочка вызовов методов
const email = user?.contacts?.email;
console.log(email); // Выводит 'john@example.com'

// Если значение не определено или равно null или undefined, используется значение по умолчанию
const defaultValue = user?.otherValue ?? "Default Value";
console.log(defaultValue); // Выводит 'Defeult Value', т.к. свойство 'otherValue' не существует в объекте user

// Опциональная цепочка вызовов методов и оператор нулевого слияния вместе
const streetName = user?.address?.street ?? "Unknown";
console.log(streetName); // Выводит '123 Main St', т.к. свойство 'street' существует в объекте user.address
