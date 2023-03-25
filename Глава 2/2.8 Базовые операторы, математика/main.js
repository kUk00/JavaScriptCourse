let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

let a = 2;

let x = 1 + (a *= 2); //5


let p = "" + 1 + 0 // 10
p = "" - 1 + 0 // -1
p = true + false // 1
p = 6 / "3" // 2
p = "2" * "3" // 6
p = 4 + 5 + "px" // 9px
p = "$" + 4 + 5 // $45
p = "4" - 2 // 2
p = "4px" - 2 // NaN
p = "  -9  " + 5 // -9 5
p = "  -9  " - 5 //-14
p = null + 1 // 1
p = undefined + 1 // NaN
p = " \t \n" - 2 // -2

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(a + b); // 12
alert(+a + +b); // 3