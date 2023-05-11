//Геттеры и сеттеры
let obj = {
    get propName() {
      // геттер, срабатывает при чтении obj.propName
    },
  
    set propName(value) {
      // сеттер, срабатывает при записи obj.propName = value
    }
  };

  let user2 = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  alert(user2.fullName); // John Smith

  let user = {
    get name() {
      return this._name;
    },
  
    set name(value) {
      if (value.length < 4) {
        alert("Имя слишком короткое, должно быть более 4 символов");
        return;
      }
      this._name = value;
    }
  };
  
  user.name = "Pete";
  alert(user.name); // Pete
  
  user.name = ""; // Имя слишком короткое...