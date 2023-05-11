/*
Проверка класса: "instanceof"
Оператор instanceof позволяет проверить, принадлежит ли объект указанному классу, с учётом наследования.
*/

//Синтаксис:

//obj instanceof Class

class Rabbit {}
let rabbit = new Rabbit();

// это объект класса Rabbit?
alert( rabbit instanceof Rabbit ); // true


function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true

/*
instanceof не учитывает саму функцию при проверке, а только prototype, который проверяется на совпадения в прототипной цепочке.

И в данном примере a.__proto__ == B.prototype, так что instanceof возвращает true.

Таким образом, по логике instanceof, именно prototype в действительности определяет тип, а не функция-конструктор.
*/