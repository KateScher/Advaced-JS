// // Работа с window
// console.log(window);
// const newWindow = window.open("https://www.example.com", "_blank"); // Открывает новое окно браузера
// // window.close(); // закрывает текущее окно
// // window.resizeTo(800, 600); // изменяет размер окна на 800х600 пикселей, используется в основном для адаптива, НО не очень популярный метод
// window.location.href = "https://www.example.com"; // перенаправляет на другую страницу
// const windowWidth = window.innerWidth; // получает ширину окна

// // Работа с window.window
// const isWindowOpen = window.window.open("https://www.example.com") !== null; // проверяет, открыто ли окно
// const windowHeight = window.window.innerHeight; // получает высоту окна
// window.window.location.href = "https://www.example.com"; // перенаправляет на другую страницу во вложенном окне

// // Работа с self
// const newWindowSelf = self.open("https://www.example.com", "_blank"); // открывает новое окно браузера с использованием self
// self.close(); // закрывает текущее окно с использованием self
// self.resizeTo(800, 600); // изменяет размер окна с использованием self
// self.location.href = "https://www.example.com"; // перенаправляет на др.страницу с использованием self

// // Работа с frames
// const frames = frames[0]; // получае ссылку на фрейм по индексу
// frames[0].location.href = "https://www.example.com"; // перенаправляет на другую страницу во фрейме
// const frameCount = frames.length; // получает количество фреймов на странице
// const parentWindow = window.parent; // получает доступ к родительскому окну из фрейма

// // Работа с globalThis
// const globalObject = globalThis; // получает глобальный объект
// globalThis.newVariable = "Hello, world!"; // определяет новую глобальную переменную
// const globalVariable =
//   globalThis.window === globalThis.self ? "Window" : "Worker"; // получает доступ к глобальным переменным из разных сред исполнения

// // var
// var glob = 5;
// // function
// function increment(val) {
//   return val + 1;
// }
// console.log(window.glob); // 5
// console.log(window.increment);
// // f increment(val){
// //   return val + 1;
// // }

// // alert
// console.log(alert() === window.alert()); // true

// alert("Можно так");
// window.alert("А можно и так");

// // const let
// const local = 5;
// let localFunc = () => "localFunc";
// console.log(local); // 5
// console.log(localFunc); // localFunc
// console.log(window.local); // undefined
// console.log(window.localFunc); // undefined

// // Из прошлой части
// console.log(window.Symbol.for); // f for() { [native code] }
// console.log(window.Symbol.iterator); // Symbol(Symbol.iterator)
// console.log(window.Array.from); // f from() { [native code] }
