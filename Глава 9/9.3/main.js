//Статические свойства и методы
class User {
    static staticMethod() {
      alert(this === User);
    }
  }
  
  User.staticMethod(); // true

  //Одно и тоже

  class User2 { }

User2.staticMethod = function() {
  alert(this === User2);
};

//Статические методы используются для функциональности, принадлежат классу «в целом», а не относятся к конкретному объекту класса.
