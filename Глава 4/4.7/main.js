//Тип данных Symbol

// Создаём новый символ - id
let id1 = Symbol();

// Создаём символ id с описанием (именем) "id"
let id2 = Symbol("id");

alert(id1 == id2); // false

let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string

let id = Symbol("id");
alert(id.toString()); // Symbol(id), теперь работает

//«Скрытые» свойства

let user = {
    name: "Вася"
  };
  
  let id = Symbol("id");
  
  user[id] = 1;
  
  alert( user[id] ); // мы можем получить доступ к данным по ключу-символу

  //Символы в литеральном объекте

  let id = Symbol("id");

let user = {
  name: "Вася",
  [id]: 123 // просто "id: 123" не сработает
};

//Глобальные символы

// читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for("id"); // если символа не существует, он будет создан


//=====

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, глобальный символ
alert( Symbol.keyFor(localSymbol) ); // undefined для неглобального символа

alert( localSymbol.description ); // name