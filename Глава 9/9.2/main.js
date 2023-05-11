//Наследование классов

class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} бежит со скоростью ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} стоит неподвижно.`);
    }
  }
  
  let animal = new Animal("Мой питомец");

  //наследуем

class Rabbit extends Animal {
    hide() {
      alert(`${this.name} прячется!`);
    }
  }
  
  let rabbit = new Rabbit("Белый кролик");
  
  rabbit.run(5); // Белый кролик бежит со скоростью 5.
  rabbit.hide(); // Белый кролик прячется!


/*
Чтобы унаследовать от класса: class Child extends Parent:
При этом Child.prototype.__proto__ будет равен Parent.prototype, так что методы будут унаследованы.
При переопределении конструктора:
Обязателен вызов конструктора родителя super() в конструкторе Child до обращения к this.
При переопределении другого метода:
Мы можем вызвать super.method() в методе Child для обращения к методу родителя Parent.
Внутренние детали:
Методы запоминают свой объект во внутреннем свойстве [[HomeObject]]. Благодаря этому работает super, он в его прототипе ищет родительские методы.
Поэтому копировать метод, использующий super, между разными объектами небезопасно.
Также:

У функций-стрелок нет своего this и super, поэтому они «прозрачно» встраиваются во внешний контекст.
*/