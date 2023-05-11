//F.prototype
function Rabbit(name) {
    this.name = name;
    alert(name);
  }
  
  let rabbit = new Rabbit("White Rabbit");
  
  let rabbit2 = new rabbit.constructor("Black Rabbit");
  //ИТОГО
  /*
  Выделим основные моменты:
Свойство F.prototype (не путать с [[Prototype]]) устанавливает[[Prototype]] для новых объектов при вызове new F().
Значение F.prototype должно быть либо объектом, либо null. Другие значения не будут работать.
Свойство "prototype" является особым, только когда оно назначено функции-конструктору, которая вызывается оператором new.
*/

function User(name) {
    this.name = name;
  }
  
  let user = new User('John');
  let user2 = new user.constructor('Pete');
  
  alert( user2.name ); // Pete (сработало!)