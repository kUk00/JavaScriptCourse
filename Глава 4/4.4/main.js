//Для доступа к информации внутри объекта метод может использовать ключевое слово this.

let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" - это "текущий объект".
      alert(this.name);
    }
  
  };
  
  user.sayHi(); // John

//«this» не является фиксированным
let user2 = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// используем одну и ту же функцию в двух объектах
user2.f = sayHi;
admin.f = sayHi;

// эти вызовы имеют  разное значение this
// "this" внутри функции - это объект "перед точкой"
user2.f(); // John  (this == user2)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (нет разницы между использованием точки или квадратных скобок для доступа к объекту)


//У стрелочных функций нет «this»

let user3 = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
    }
  };
  
  user3.sayHi(); // Ilya


/*
Функции, которые находятся в свойствах объекта, называются «методами».
Методы позволяют объектам «действовать»: object.doSomething().
Методы могут ссылаться на объект через this.
Значение this определяется во время исполнения кода.

При объявлении любой функции в ней можно использовать this, но этот this не имеет значения до тех пор, пока функция не будет вызвана.
Функция может быть скопирована между объектами (из одного объекта в другой).
Когда функция вызывается синтаксисом «метода» – object.method(), значением this во время вызова является object.
Также ещё раз заметим, что стрелочные функции являются особенными – у них нет this. Когда внутри стрелочной функции обращаются к this, то его значение берётся извне.
*/


//===ЗАДАЧИ=====
//1)
/*
Использование "this" в литерале объекта
важность: 5
Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?
*/

// Error: Cannot read property 'name' of undefined 
// this = undefined

// 2)
/*
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

let calculator = {
    a : 0,
    b : 0,
  
    read() {
      a = +prompt("Введите число а: ", "");
      b = +prompt("Введите число b: ", "");
    },
  
    sum() {
      return a + b;
    },
  
    mul() {
      return a * b;
    },
  
  };
  
  calculator.read();
  console.log( calculator.sum() );
  console.log( calculator.mul() );


  /*

  Цепь вызовов
важность: 2
У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};
Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
*/

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
  
    down() {
      this.step--;
      return this;
    },
  
    showStep: function() { // показывает текущую ступеньку
      console.log( this.step );
      return this;
    },
  };
  
  ladder.up();
  ladder.showStep();
  ladder.up().up().up().showStep().down().up().up().showStep().down().showStep();
  //второй вариант записи
  ladder
    .up()
    .down()
    .showStep()
    .up()
    .up()
    .showStep();

