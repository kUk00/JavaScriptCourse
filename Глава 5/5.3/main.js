//СТРОКИ
// '', "", `` - `` - поддержимает многострочность а так же подстановку строк `${str}`

//Спецсимволы
// \n \t \" \'

//ДЛИНА СТРОКИ
alert( `My\n`.length ); // 3, спецсимвол \n считается как один

//Доступ к символам
let str = `Hello`;

// получаем первый символ
alert( str[0] ); // H
alert( str.at(0) ); // H

// получаем последний символ
alert( str[str.length - 1] ); // o
alert( str.at(-1) ); // o

for (let char of "Hello") {
    alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т.д.)
  }

  //Строки неизменяемы

  //РЕГИСТр
alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface
alert( 'Interface'[0].toLowerCase() ); // 'i'

//Поиск подстроки
/*str.indexOf(substr, pos).

Он ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию, на которой располагается совпадение, 
либо -1 при отсутствии совпадений.


Также есть похожий метод str.lastIndexOf(substr, position), который ищет с конца строки к её началу.

Он используется тогда, когда нужно получить самое последнее 
вхождение: перед концом строки или начинающееся до (включительно) определённой позиции.
*/

//Трюк с побитовым НЕ
alert( ~2 ); // -3, то же, что -(2+1)
alert( ~1 ); // -2, то же, что -(1+1)
alert( ~0 ); // -1, то же, что -(0+1)
alert( ~-1 ); // 0, то же, что -(-1+1)

let str = "Widget";

if (~str.indexOf("Widget")) {
  alert( 'Совпадение есть' ); // работает
}

//includes, startsWith, endsWith
//str.includes(substr, pos) возвращает true, если в строке str есть подстрока substr, либо false, если нет.
alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false

//Методы str.startsWith и str.endsWith проверяют, соответственно, начинается ли и заканчивается ли строка определённой строкой:

alert( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
alert( "Widget".endsWith("get") ); // true, "get" — окончание "Widget"

//Получение подстроки
//В JavaScript есть 3 метода для получения подстроки: substring, substr и slice.
str.slice(start [, end])
str.substring(start [, end])
let str = "stringify";

// для substring эти два примера — одинаковы
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// …но не для slice:
alert( str.slice(2, 6) ); // "ring" (то же самое)
alert( str.slice(6, 2) ); // "" (пустая строка)

//str.substr(start [, length])
//Возвращает часть строки от start длины length.

//В противоположность предыдущим методам, этот позволяет указать длину вместо конечной позиции:

let str = "stringify";
// ring, получаем 4 символа, начиная с позиции 2
alert( str.substr(2, 4) );
//Значение первого аргумента может быть отрицательным, тогда позиция определяется с конца:

let str = "stringify";
// gi, получаем 2 символа, начиная с позиции 4 с конца строки
alert( str.substr(-4, 2) );

//Сравнение строк
alert( 'a' > 'Z' ); // true

//str.codePointAt(pos)
//Возвращает код для символа, находящегося на позиции pos:
//String.fromCodePoint(code)
//Создаёт символ по его коду code

/*
Вызов str.localeCompare(str2) возвращает число, которое показывает, какая строка больше в соответствии с правилами языка:

Отрицательное число, если str меньше str2.
Положительное число, если str больше str2.
0, если строки равны.
*/

//ЗАДАЧА
/*
Сделать первый символ заглавным
важность: 5
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";
*/

function ucFirst(str) {
    return str[0].UpperCase() + str.Slice(1);
  }

  /*
  Проверка на спам
важность: 5
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }

//Усечение строки
/*
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
*/

  function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }

  /*
  Выделить число
важность: 4
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
*/
function extractCurrencyValue(str) {
    return +str.slice(1);
  }