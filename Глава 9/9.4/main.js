//Приватные и защищённые методы и свойства
/*
Внутренний интерфейс – методы и свойства, доступные из других методов класса, но не снаружи класса.
Внешний интерфейс – методы и свойства, доступные снаружи класса.


В JavaScript есть два типа полей (свойств и методов) объекта:

Публичные: доступны отовсюду. Они составляют внешний интерфейс. До этого момента мы использовали только публичные свойства и методы.
Приватные: доступны только внутри класса. Они для внутреннего интерфейса.
*/

class CoffeeMachine {
    waterAmount = 0; // количество воды внутри
  
    constructor(power) {
      this.power = power;
      alert( `Создана кофеварка, мощность: ${power}` );
    }
  
  }
  
  // создаём кофеварку
  let coffeeMachine = new CoffeeMachine(100);
  
  // добавляем воды
  coffeeMachine.waterAmount = 200;

  // ====свойства waterAmount и power публичные. =======

  class CoffeeMachine {
    // ...
  
    constructor(power) {
      this._power = power;
    }
  
    get power() {
      return this._power;
    }
  
  }
  
  // создаём кофеварку
  let coffeeMachine = new CoffeeMachine(100);
  
  alert(`Мощность: ${coffeeMachine.power}W`); // Мощность: 100W
  
  coffeeMachine.power = 25; // Error (no setter)
// теперь мы не можем устанавливать значение для повер

//==== ватерамонут спрятано

class CoffeeMachine {

    #waterAmount = 0;
  
    get waterAmount() {
      return this.#waterAmount;
    }
  
    set waterAmount(value) {
      if (value < 0) throw new Error("Отрицательный уровень воды");
      this.#waterAmount = value;
    }
  }
  
  let machine = new CoffeeMachine();
  
  machine.waterAmount = 100;
  alert(machine.#waterAmount); // Error