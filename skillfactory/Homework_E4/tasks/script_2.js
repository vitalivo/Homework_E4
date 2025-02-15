// Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.

function checkProperty(str, obj) {
    return obj.hasOwnProperty(str);
}   

// Тестовые примеры
const testObj = {
    name: 'John',
    age: 30,
    city: 'New York'
};

console.log(checkProperty('name', testObj));     
console.log(checkProperty('age', testObj));      
console.log(checkProperty('job', testObj));     
console.log(checkProperty('city', testObj));    