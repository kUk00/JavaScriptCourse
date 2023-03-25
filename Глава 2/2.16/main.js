let a = 5, b = 10;
// Function Declaration
// может выполнять до обьявления
sum(a,b)
function sum(a, b) {
    return a + b;
  }

let b = sum; // теперь b является функцией sum
let c = sum(); // теперь  c имеет значение выполнения функции sum

  // Function Expression
  // не может выполниться до обьявления
let sum2 = function(a, b) {
    return a + b;
  };
 sum2(a,b)

 let age = prompt("Сколько Вам лет?", 18);

let welcome = (age < 18) ?
  function() { alert("Привет!"); } :
  function() { alert("Здравствуйте!"); };

welcome(); 


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  // Так называемый коллбек
  function showOk() {
    alert( "Вы согласны." );
  }
  
  // коллбек
  function showCancel() {
    alert( "Вы отменили выполнение." );
  }
  
  // использование: функции showOk, showCancel передаются в качестве аргументов ask
  ask("Вы согласны?", showOk, showCancel);