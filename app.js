var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
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
