//Перебираемые объекты
let range = {
    from: 1,
    to: 5
  };
  
  // 1. вызов for..of сначала вызывает эту функцию
  range[Symbol.iterator] = function() {
  
    // ...она возвращает объект итератора:
    // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
    return {
      current: this.from,
      last: this.to,
  
      // 3. next() вызывается на каждой итерации цикла for..of
      next() {
        // 4. он должен вернуть значение в виде объекта {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };
  
  // теперь работает!
  for (let num of range) {
    alert(num); // 1, затем 2, 3, 4, 5
  }

  //Псевдомассивы это обьекты очень похожие на массив, но они не являются массивами у них не работает .push .pop итд
  let obj = {
    0: "Ваня",
    1: "Аня",
    length: 2
  }

  // Создание массива из Псевдомассива
  let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
  };
  
  let arr = Array.from(arrayLike); // Array.from(псевдомассив) - делает массив
  alert(arr.pop()); // World (метод работает)
// Аналогично и с интерируемыми обьектами

// Дополнительное свойство Array.from(obj, func)
// возводим каждое число в квадрат
let arr2 = Array.from(range, num => num * num);
