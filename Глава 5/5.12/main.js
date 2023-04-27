/*
JSON.stringify для преобразования объектов в JSON.
JSON.parse для преобразования JSON обратно в объект.

в JSON все ковычки становятся обязательно двойными ""
*/

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };
  
  let json = JSON.stringify(student);
  
  alert(json);


  let user = {
    name: "John",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true
    }
  };
  
  alert(JSON.stringify(user, null, 2));

 // Форматирование: space
  /* отступ в 2 пробела:
  {
    "name": "John",
    "age": 25,
    "roles": {
      "isAdmin": false,
      "isEditor": true
    }
  }
  */
  
  /* для JSON.stringify(user, null, 4) результат содержит больше отступов:
  {
      "name": "John",
      "age": 25,
      "roles": {
          "isAdmin": false,
          "isEditor": true
      }
  }
  */

  //Пользовательский «toJSON»
  /*
  let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room
  };
  
  alert( JSON.stringify(meetup) );
  /*
    {
      "title":"Conference",
      "date":"2017-01-01T00:00:00.000Z",  // (1)
      "room": {"number":23}               // (2)
    }
  */

    /*
    let room = {
        number: 23,
        toJSON() {
          return this.number;
        }
      };
      
      let meetup = {
        title: "Conference",
        room
      };
      
      alert( JSON.stringify(room) ); // 23
      
      alert( JSON.stringify(meetup) );
      /*
        {
          "title":"Conference",
          "room": 23
        }
      */
     
//Чтобы декодировать JSON-строку, нам нужен другой метод с именем JSON.parse.
let user2 = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

user2 = JSON.parse(user2);

alert( user2.friends[1] ); // 1

/*
Использование reviver
*/

let str_ = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup_ = JSON.parse(str_);

alert( meetup_.date.getDate() ); // Ошибка!
//===
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( meetup.date.getDate() ); // 30 - теперь работает!

//ЗАДАЧИ

/*
Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};
*/

let user = {
    name: "Василий Иванович",
    age: 35
  };
  
  let user2 = JSON.parse(JSON.stringify(user));