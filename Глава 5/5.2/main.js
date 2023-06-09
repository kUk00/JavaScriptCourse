//"e" производит операцию умножения числа на 1 с указанным количеством нулей.
let billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей

alert( 7.3e9 );  // 7.3 миллиардов (7,300,000,000)

let ms = 1e-6; // шесть нулей, слева от 1 == 0.000001
//Если мы подсчитаем количество нулей 0.000001, их будет 6. Естественно, верная запись 1e-6.

alert( 0xff ); // 255
alert( 0xFF ); // 255 (то же самое, регистр не имеет значения)

let a = 0b11111111; // бинарная форма записи числа 255
let b = 0o377; // восьмеричная форма записи числа 255

alert( a == b ); // true, с двух сторон число 255

//Метод num.toString(base)
//base может варьироваться от 2 до 36 (по умолчанию 10).
let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

alert( 123456..toString(36) ); // 2n9c 
// или так (123456).toString(36).
// елси поставить с одной точкой JS будет думать что это дробное число и выдаст ошибку

/*
Округление

Math.floor
Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.
Math.ceil
Округление в большую сторону: 3.1 становится 4, а -1.1 — -1.
Math.round
Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а -1.1 — -1.
Math.trunc (не поддерживается в Internet Explorer)
Производит удаление дробной части без округления: 3.1 становится 3, а -1.1 — -1.
*/

//Определённое округление
//Умножить и разделить.

//Например, чтобы округлить число до второго знака после запятой, мы можем умножить число на 100, вызвать функцию округления и разделить обратно.

let num1 = 1.23456;

alert( Math.floor(num1 * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

//Метод toFixed(n) округляет число до n знаков после запятой и возвращает строковое представление результата.

let num2 = 12.34;
alert( num2.toFixed(1) ); // "12.3"

//Округляет значение до ближайшего числа, как в большую, так и в меньшую сторону, аналогично методу Math.round:

let nu3 = 12.36;
alert( num3.toFixed(1) ); // "12.4"

// результат возвращения строка, чтобы получить число используем +num.toFixed(n)


//Если число слишком большое, оно переполнит 64-битное хранилище, JavaScript вернёт бесконечность:
alert( 1e500 ); // Infinity

// НЕТОЧНОСТИ
// у любого числа есть неточность например 0.3 это 0.30000000004 и тд
// из-за этого
alert( 0.1 + 0.2 == 0.3 ); // false т.к. получается 0.3000000004 == 0.3

// чтобы обойти неточности используем toFixed(n)
// Из 64 бит, отведённых на число, сами цифры числа занимают до 52 бит, остальные 11 бит хранят позицию десятичной точки и один бит – знак.
// 0 == -0

//isNaN(value) преобразует значение в число и проверяет является ли оно NaN
// NaN === NaN (false), т.к NaN уникально и не может равняться себе
//isFinite(value) преобразует аргумент в число и возвращает true, если оно является обычным числом, т.е. не NaN/Infinity/-Infinity
alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, потому что специальное значение: NaN
alert( isFinite(Infinity) ); // false, потому что специальное значение: Infinity


//parseInt и parseFloat.
//Они «читают» число из строки.
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, вернётся только целая часть
alert( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке

/*
Math.random()
Возвращает псевдослучайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)

Math.random()
Возвращает псевдослучайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)

Math.random()
Возвращает псевдослучайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)
*/

alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (любое количество псевдослучайных чисел)
alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1
alert( Math.pow(2, 10) ); // 2 в степени 10 = 1024



//ЗАДАЧИ
/*
Сумма пользовательских чисел
важность: 5
Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

Запустить демо

P.S. Есть «подводный камень» при работе с типами.
*/

let nm1 = +prompt('num1: ', 0);
let nm2 = +prompt('num2: ', 0);
alert(nm1 + nm2);
//Почему 6.35.toFixed(1) == 6.3? , т.к. 6.35 = 6.349999999
alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

/*
Ввод числового значения
важность: 5
Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
*/

function readNumber() {
    let numbe;
    do
    {
      numbe = prompt('Введите число: ', 0);
    }while(!isFinite(numbe))
  
    if(numbe === null || numbe === '') return null;
  
    return +numbe;
  };
  
  readNumber();

  /*
  Бесконечный цикл по ошибке
  Этот цикл – бесконечный. Он никогда не завершится, почему?

    let i = 0;
    while (i != 10) {
    i += 0.2;
    }

    Так как 0.2 не 0.2 а 0.200000000003 поэтому ровно 10 не получится никогда
  */

/*
Случайное число от min до max
важность: 2
Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
*/

function random(min, max) {
    return Math.round(min + Math.random() * (max - min));
  }

/*
Случайное целое число от min до max
важность: 2
Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.
*/

function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  }