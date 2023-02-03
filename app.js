var num1 = 3;
var num2 = 4;
function calculate(num1, num2) {
    return num1 + num2;
}
// console.log(calculate(num1,num2));
function getTotal(numbers) {
    return numbers.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);
}
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
        // console.log(id.toUpperCase());
    }
    else {
        //  console.log(id);
    }
}
printId('mahfuz1234');
printId(1234);
function getFirstThree(x) {
    return x.slice(0, 4);
}
//  console.log(getFirstThree('hello'))
//  console.log(getFirstThree([1,2,3,4,5,6]))
//Generics
function logString(arg) {
    // console.log(arg);
    return arg;
}
logString('User Login Successfully!');
function logNumber(arg) {
    // console.log(arg);
    return arg;
}
logNumber(12345);
function logArray(arg) {
    // console.log(arg)
    return arg;
}
logArray([1, 2, 3, 4, 5]);
//generics example
function lonInAnything(arg) {
    // console.log(arg);
    return arg;
}
lonInAnything(1234567);
function getOldest(peoples) {
    return peoples.sort(function (a, b) { return b.age - a.age; })[0];
}
var peoples = [{ age: 30 }, { age: 40 }, { age: 60 }, { age: 20 }];
getOldest(peoples);
var players = [
    { name: 'virat kholi', age: 34 },
    { name: 'sakib al hasan', age: 35 },
    { name: 'Tamim Iqbal', age: 39 },
    { name: 'Masrafi bin Mortuza', age: 38 }
];
var person = getOldest(players);
// console.log(person)
