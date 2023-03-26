//Объекты
let user = new Object(); // синтаксис "конструктор объекта"
let user2 = {};  // синтаксис "литерал объекта"

let client = {
    name: "Вадим",
    age: 19,        // в конце запятая не обязательна
    "Два слова": "unknown", // ключ может состоять из нескольких слов
};
// Ключи или названия могут быть любыми по правилам переменных, даже могут использоваться слова for return let, кроме __proto__
let Fruit = 'apple';
let Bag = {
  [Fruit + 'Computers']: 5 // Bag.appleComputers = 5
};

client["Два слова"] = "true";

//Обращение
alert(client.name); // Вадим
alert(client["Два слова"]); // true


let obj = {
    0: "Тест" // то же самое что и "0": "Тест"
  };

alert( obj["0"] ); // Тест
alert( obj[0] ); // Тест (то же свойство)

//Удаление
delete client.age;

//Константа
const example = {
    name: "John",
}

example.name = "Petr";

alert(example.name); // Petr Дело в том, что объявление const защищает 
//от изменений только саму переменную example, а не её содержимое.

let fruit = prompt("Какой фрукт купить?", "apple");

let bag = {
  [fruit]: 5, // имя свойства будет взято из переменной fruit
};

alert( bag.apple ); // 5, если fruit="apple"
alert(bag[fruit]); // имя свойства будет взято из переменной fruit

//Пример использования функции
function makeUser(name, age) {
    return {
      name: name,
      age: age
      // ...другие свойства
    };
  }
  
  let persone = makeUser("John", 30);
  alert(persone.name); // John

//При обращении к свойству, которого нет, возвращается undefined
let a = {};
alert( a.noSuchProperty === undefined ); // true означает "свойства нет"

//Оператор in проверяет на существование свойства возвращает true/false
let user3 = { name: "John", age: 30 };
// проверяемое свойство вносится в кавычки, либо без ковычек, если это переменная возвращающая название свойства
alert( "age" in user3 ); // true, user3.age существует
alert( "blabla" in user3 ); // false, user3.blabla не существует

//важный момент
let objt = {
    test: undefined
  };
  
  alert( objt.test ); //  выведет undefined, значит свойство не существует?
  alert( "test" in objt ); // true, свойство существует!


  //ЦИКЛ для вывода всех свойств
  let ppls = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in ppls) {
    // ключи
    alert( key );  // name, age, isAdmin
    // значения ключей
    alert( ppls[key] ); // John, 30, true
  }

  //Авоматически сортируются
  let codes = {
  "49": "Германия",
  "41": "Швейцария",
  "44": "Великобритания",
  // ..,
  "1": "США"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}

//чтобы не сортировались просто добавим + к ключам

let codes2 = {
    "+49": "Германия",
    "+41": "Швейцария",
    "+44": "Великобритания",
    // ..,
    "+1": "США"
  };
  
  for (let code in codes2) {
    alert( +code ); // 49, 41, 44, 1
  }



/*
=======Задачи=======
Привет, object
важность: 5
Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
*/
let User = {};
User.name = "John";
User.surname = "Smith";
User.name = "Pete";
delete User.name;

/*Проверка на пустоту
важность: 5
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/

function isEmpty(obj)
{
    for(let key in obj)
    {
        return false;
    }

    return true;
}

/*
Объекты-константы?
важность: 5
Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete";
*/

//ДА можно Объявление const защищает только саму переменную от изменений.

/*
Сумма свойств объекта
важность: 5
У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.
*/

function sum(obj)
{
  let sum = 0;
  for (let key in obj)
  {
    sum += obj[key];
  }

  return sum;
}

console.log(sum(salaries));

/*
Умножаем все числовые свойства на 2
важность: 3
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое.
*/

function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof(obj[key]) == "number")
        obj[key] *= 2;
    }
  }