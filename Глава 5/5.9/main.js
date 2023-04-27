//Object.keys, values, entries
/*
Методы поддерживаются для структур:
Map
Set
Array
*/

/*
Object.keys, values, entries
Для простых объектов доступны следующие методы:

Object.keys(obj) – возвращает массив ключей.
Object.values(obj) – возвращает массив значений.
Object.entries(obj) – возвращает массив пар [ключ, значение].
*/

/*
Сумма свойств объекта
важность: 5
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
*/


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  function sumSalaries(salaries) {
    let sum = 0;
    for(let vl of Object.values(salaries))
      sum += Number(vl);
    return sum;
  }
  
  alert( sumSalaries(salaries) ); // 650


  /*
  Подсчёт количества свойств объекта
важность: 5
Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Постарайтесь сделать код как можно короче.

P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».
*/

let user = {
    name: 'John',
    age: 30
  };
  
  function count(us) {
    return Object.keys(us).length;
  }
  
  alert( count(user) ); // 2