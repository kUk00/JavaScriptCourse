//Деструктурирующее присваивание
// у нас есть массив с именем и фамилией
let arr = ["Ilya", "Kantor"];

// деструктурирующее присваивание
// записывает firstName = arr[0]
// и surname = arr[1]
let [firstName, /*, , , - пропуск элементов*/ surname] = arr;

alert(firstName); // Ilya
alert(surname);  // Kantor

// ... - остаточные параметры
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest это массив элементов, начиная с 3-го
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

// значения по умолчанию
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name);    // Julius (из массива)
alert(surname); // Anonymous (значение по умолчанию)

//Деструктуризация объекта
//let {var1, var2} = {var1:…, var2:…}
let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  let {title, width, height} = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200

// Если Имена переменных отличаются от ключей обьекта

  // { sourceProperty: targetVariable }
  let {width: w, height: h, title} = options;
  
  // width -> w
  // height -> h
  // title -> title
  
  alert(title);  // Menu
  alert(w);      // 100
  alert(h);      // 200

  // значения  по умолчанию + название переменной отличное от ключа 
  let {width: w = 100, height: h = 200, title} = options;

  alert(title);  // Menu
  alert(w);      // 100
  alert(h);      // 200

  // ... - остаточные параметры для обьектов

  // title = свойство с именем title
// rest = объект с остальными свойствами
let {title, ...rest} = options;

// сейчас title="Menu", rest={height: 200, width: 100}
alert(rest.height);  // 200
alert(rest.width);   // 100


//Вложенная деструктуризация
let options2 = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  // деструктуризация разбита на несколько строк для ясности
  let {
    size: { // положим size сюда
      width,
      height
    },
    items: [item1, item2], // добавим элементы к items
    title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
  } = options2;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200
  alert(item1);  // Cake
  alert(item2);  // Donut

  // ЗАДАЧИ
/*

Деструктурирующее присваивание
важность: 5
У нас есть объект:

let user = {
  name: "John",
  years: 30
};
Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
Пример переменных после вашего присваивания:

let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false
*/

let user = { name: "John", years: 30 };

let {name, years: age, isAdmin = false} = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

/*
Максимальная зарплата
важность: 5
У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
*/
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  function topSalary(salaries) {
    let max = 0;
    let maxname = null
    for(const[name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        maxname = name;
      }
    }
  
    return maxname;
  }
  
  alert(topSalary(salaries))
