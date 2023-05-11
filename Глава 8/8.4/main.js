//Методы прототипов, объекты без свойства __proto__
/*
Object.create(proto, [descriptors]) – создаёт пустой объект со свойством [[Prototype]], указанным как proto, и необязательными дескрипторами свойств descriptors.
Object.getPrototypeOf(obj) – возвращает свойство [[Prototype]] объекта obj.
Object.setPrototypeOf(obj, proto) – устанавливает свойство [[Prototype]] объекта obj как proto.
*/

let animal = {
    eats: true
  };
  
  let rabbit = Object.create(animal, {
    jumps: {
      value: true
    }
  });
  
  alert(rabbit.jumps); // true

//===

  function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function() {
    alert( this.name );
  }
  
  let rabbit = new Rabbit("Rabbit");
  
  rabbit.sayHi();                        // Rabbit
  Rabbit.prototype.sayHi();              // undefined
  Object.getPrototypeOf(rabbit).sayHi(); // undefined
  rabbit.__proto__.sayHi();              // undefined