/*
Примитив

Это – значение «примитивного» типа.
Есть 7 примитивных типов: string, number, boolean, symbol, null, undefined и bigint.
Объект

Может хранить множество значений как свойства.
Объявляется при помощи фигурных скобок {}, например: {name: "Рома", age: 30}. 
В JavaScript есть и другие виды объектов: например, функции тоже являются объектами.
*/

/*
Можно ли добавить свойство строке?
важность: 5
Взгляните на следующий код:

let str = "Привет";

str.test = 5;

alert(str.test);
Как вы думаете, это сработает? Что выведется на экран?
нельзя, - undefined 
*/