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
var customer = {
    name: "John Leo",
    age: 30,
    product: "Mobile",
    address: "dhaka,bangladesh",
    price: 30000
};
// console.log(customer)
function login(userData) {
    return userData;
}
var userId = 'Mahfuz1232';
;
;
var transaction1 = {
    payerAccountNumber: 100,
    payeeAccountNumber: 5000
};
var transaction2 = {
    payerAccountNumber: 100,
    payeeAccountNumber: 5001
};
var bankAccount = {
    accountNumber: 1001,
    accountHolder: "Mark Wood",
    isBalance: 50000,
    isActive: true,
    transactions: [transaction1, transaction2]
};
var book = {
    name: 'Learn With Python',
    author: 'Md.Anisul Islam',
    price: 500,
    fileSize: '300MB',
    format: 'pdf',
    duration: '4.0h'
};
var product = {
    name: 'computer SSD',
    price: 4200,
    company: 'samsung',
    productTax: 10
};
function printId(id) {
    //Narrowing
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId('mahfuz1234');
printId(1234);
function getFirstThree(x) {
    return x.slice(0, 4);
}
console.log(getFirstThree('hello'));
console.log(getFirstThree([1, 2, 3, 4, 5, 6]));
