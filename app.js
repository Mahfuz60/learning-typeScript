// let num1=3;
// let num2=4;
// function calculate(num1:number,num2:number){
//   return num1+num2;
// }
// console.log(calculate(num1,num2));
function getTotal(numbers) {
    return numbers.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);
}
// console.log(getTotal([3,4,5,6,7]));
//create a object
var user = {
    firstName: "john",
    lastName: "Weak",
    role: "Software Engineer",
    age: 40
};
console.log(user);
var customer = {
    name: "John Leo",
    age: 30,
    product: "Mobile",
    address: "dhaka,bangladesh",
    price: 30000
};
console.log(customer);
function login(userData) {
    return userData;
}
// console.log(login({ name: 'methon', age: 34, product: 'laptop', price: 123000 }));

var userId = 'Mahfuz1232';
// console.log(userId);
