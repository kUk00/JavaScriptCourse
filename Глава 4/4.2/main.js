//При копировании переменной объекта копируется ссылка, но сам объект не дублируется.
let person = { name: 'John' };

let admin = person;

admin.name = 'Pete'; // изменено по ссылке из переменной "admin"

alert(person.name); // 'Pete', изменения видны по ссылке из переменной "user"

//Сравнение по ссылке

let a = {};
let b = a; // копирование по ссылке

alert( a == b ); // true, обе переменные ссылаются на один и тот же объект
alert( a === b ); // true

// =======++++=======

let c = {};
let d = {}; // два независимых объекта

alert( c == d ); // false


//Клонирование и объединение, Object.assign

let user = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // новый пустой объект
  
  // давайте скопируем все свойства user в него
  for (let key in user) {
    clone[key] = user[key];
  }
  
  // теперь clone это полностью независимый объект с тем же содержимым
  clone.name = "Pete"; // изменим в нём данные
  
  alert( user.name ); // все ещё John в первоначальном объекте


  /*
  Object.assign(dest, [src1, src2, src3...])
    Первый аргумент dest — целевой объект.
    Остальные аргументы src1, ..., srcN (может быть столько, сколько необходимо) являются исходными объектами
    Метод копирует свойства всех исходных объектов src1, ..., srcN в целевой объект dest. Другими словами, свойства всех аргументов, начиная со второго, копируются в первый объект.
    Возвращает объект dest.
*/
// ПРИМЕР ИСПОЛЬЗОВАНИЯ:
let user2 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user2, permissions1, permissions2);

// теперь user2 = { name: "John", canView: true, canEdit: true }

//Если скопированное имя свойства уже существует, оно будет перезаписано

// ПРИМЕР КЛОНИРОВАНИЯ(КОПИРОВАНИЯ)
let user3 = {
    name: "John",
    age: 30
  };
  
  let clone = Object.assign({}, user3);


  //Вложенное клонирование
  let user4 = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, user4);
  
  alert( user4.sizes === clone.sizes ); // true, тот же объект
  
  // user4 и clone обладают общим свойством sizes
  user4.sizes.width++;       // изменяем свойства в первом объекте
  alert(clone.sizes.width); // 51, видим результат в другом\

//Для глубокого клонирования используют _.cloneDeep(obj)
// structuredClone(), который позволяет сделать полную копию объекта.
// К сожалению он поддерживается только современными браузерами.