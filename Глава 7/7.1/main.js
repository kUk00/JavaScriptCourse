/*
Флаги свойств
Помимо значения value, свойства объекта имеют три специальных атрибута (так называемые «флаги»).

writable – если true, свойство можно изменить, иначе оно только для чтения.
enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.
*/

//Метод Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве.
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
//Возвращаемое значение – это объект, так называемый «дескриптор свойства»: он содержит значение свойства и все его флаги.
let user = {
  name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/* дескриптор свойства:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/
/*
Чтобы изменить флаги, мы можем использовать метод Object.defineProperty.

Его синтаксис:

Object.defineProperty(obj, propertyName, descriptor)
obj, propertyName
Объект и его свойство, для которого нужно применить дескриптор.
*/

let user = {};

Object.defineProperty(user, "name", {
  value: "John"
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */

//Сделаем свойство user.name доступным только для чтения. Для этого изменим флаг writable:
let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  writable: false
});

user.name = "Pete"; // Ошибка: Невозможно изменить доступное только для чтения свойство 'name'