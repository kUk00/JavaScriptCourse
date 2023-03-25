if ("0") {
    alert( 'Привет' );
  }
  // выведет


  let res = prompt("Какое «официальное» название JavaScript?", '');
  if (res == 'ECMAScript')
  {
    alert('Верно!');
  }
  else
  {
    alert('Не знаете? ECMAScript!');
  }


res = prompt("Введите только число!", '');
if (res > 0)
{
  alert('1');
}
else if (res < 0)
{
  alert('-1');
}
else
{
  alert('0');
}

let a = 1, b = 1;
let result = (a + b < 4) ? 'Мало' : 'Много';


let login = "";
let message = login == 'Сотрудник' ? 'Привет' : login == 'Директор' ? 'Здравствуйте' : login == '' ? 'Нет логина' : '';
console.log(message);


