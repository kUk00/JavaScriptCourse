//Класс: базовый синтаксис
//Синтаксис «class»


class MyClass {
    prop = value; // свойство
    constructor(...) { // конструктор
      // ...
    }
    method(...) {} // метод
    get something(...) {} // геттер
    set something(...) {} // сеттер
    [Symbol.iterator]() {} // метод с вычисляемым именем (здесь - символом)
    // ...
  }

//Пример

class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

// Использование:
let user = new User("Иван");
user.sayHi();

//В JavaScript класс – это разновидность функции.

class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }
  
  // доказательство: User - это функция
  alert(typeof User); // function


  let User2 = class {
    sayHi() {
      alert("Привет");
    }
  };


//====
class User3 {

    constructor(name) {
      // вызывает сеттер
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Имя слишком короткое.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user3 = new User3("Иван");
  alert(user3.name); // Иван
  
  user3 = new User3(""); // Имя слишком короткое.


  //часы в консоль
  class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}


let clock = new Clock({template: 'h:m:s'});
clock.start();