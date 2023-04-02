//Опциональная цепочка '?.'

let user = {}; // пользователь без свойства "address"

alert(user.address.street); // Ошибка!

// Пример решения

let user = {};

alert(user.address ? user.address.street : undefined);

// или

let user = {}; // у пользователя нет адреса

alert(user.address ? user.address.street ? user.address.street.name : null : null);

//=================================================================================================

let user = {}; // пользователь без адреса

alert( user.address && user.address.street && user.address.street.name ); // undefined (без ошибки)


// А теперь использование оптициональной цепочки

let user = {}; // пользователь без адреса

alert( user?.address?.street ); // undefined (без ошибки)

let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined

// Однако если левать часть не обьявлена то быдет ошибка
//пример

//let user = null; 

alert(user?.address); // ошибка   ReferenceError: user is not defined