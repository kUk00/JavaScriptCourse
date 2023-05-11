//Обработка ошибок, "try..catch"
try {

    // код...
  
  } catch (err) {
  
    // обработка ошибки
  
  }

  //Пример использования
  try {

    alert('Начало блока try');  // (1) <--
  
    lalala; // ошибка, переменная не определена!
  
    alert('Конец блока try (никогда не выполнится)');  // (2)
  
  } catch(err) {
  
    alert(`Возникла ошибка!`); // (3) <--
  
  }

  // err может иметь любое название или вообще без названия 


  //РАБОЧИЙ КОд
  let json = '{"name":"John", "age": 30}'; // данные с сервера

let user = JSON.parse(json); // преобразовали текстовое представление в JS-объект

// теперь user - объект со свойствами из строки
alert( user.name ); // John
alert( user.age );  // 30

//КОД 

let json2 = "{ некорректный JSON }";

try {

  let user = JSON.parse(json2); // <-- тут возникает ошибка...
  alert( user.name ); // не сработает

} catch (e) {
  // ...выполнение прыгает сюда
  alert( "Извините, в данных ошибка, мы попробуем получить их ещё раз." );
  alert( e.name );
  alert( e.message );
}

//Оператор throw генерирует ошибку.
/*
Синтаксис:

throw <объект ошибки></объект>

let error = new Error(message);
// или
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...
*/

let error = new Error(" Ого, ошибка! o_O");

alert(error.name); // Error
alert(error.message); //  Ого, ошибка! o_O

//ПРимер
try {
    JSON.parse("{ bad json o_O }");
} catch(e) {
  alert(e.name); // SyntaxError
  alert(e.message); // Unexpected token b in JSON at position 2
}

//Преобразуем

let json3 = '{ "age": 30 }'; // данные неполны

try {

  let user = JSON.parse(json3); // <-- выполнится без ошибок

  if (!user.name) {
    throw new SyntaxError("Данные неполны: нет имени"); // (*)
  }

  alert( user.name );

} catch(e) {
  alert( "JSON Error: " + e.message ); // JSON Error: Данные неполны: нет имени
}

/*
try {
   ... пробуем выполнить код...
} catch(e) {
   ... обрабатываем ошибки ...
} finally {
   ... выполняем всегда ...
}
*/

try {
    alert( 'try' );
    if (confirm('Сгенерировать ошибку?')) BAD_CODE();
  } catch (e) {
    alert( 'catch' );
  } finally {
    alert( 'finally' );
  }

  /*
  У кода есть два пути выполнения:
  Если вы ответите на вопрос «Сгенерировать ошибку?» утвердительно, то try -> catch -> finally.
  Если ответите отрицательно, то try -> finally.
  */