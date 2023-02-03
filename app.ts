let num1 = 3;
let num2 = 4;
function calculate(num1: number, num2: number) {
  return num1 + num2;

}
// console.log(calculate(num1,num2));



function getTotal(numbers: Array<number>) {
  return numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0)
}
// console.log(getTotal([3,4,5,6,7]));



//create a object

type User = {
  firstName: string,
  lastName: string,
  role: string,
  age: number
}

const user: User = {

  firstName: "john",
  lastName: "Weak",
  role: "Software Engineer",
  age: 40
}
// console.log(user)


//Type alias

type Customer = {
  name: string,
  age: number,
  product: string,
  address?: string,
  price: number

}

const customer: Customer = {
  name: "John Leo",
  age: 30,
  product: "Mobile",
  address: "dhaka,bangladesh",
  price: 30000

}

// console.log(customer)



function login(userData: Customer): Customer {

  return userData;
}

// console.log(login({name:'methon',age:34,product:'laptop',price:123000}));

type ID = number | string;

const userId: ID = 'Mahfuz1232';
// console.log(userId)


//interface
interface Transaction {
  payerAccountNumber: number;
  payeeAccountNumber: number;

};

interface BankAccount {
  accountNumber: number;
  accountHolder: string;
  isBalance: number;
  isActive: boolean;
  transactions: Transaction[];

};

const transaction1: Transaction = {
  payerAccountNumber: 100,
  payeeAccountNumber: 5000


};
const transaction2: Transaction = {
  payerAccountNumber: 100,
  payeeAccountNumber: 5001


};

const bankAccount: BankAccount = {
  accountNumber: 1001,
  accountHolder: "Mark Wood",
  isBalance: 50000,
  isActive: true,
  transactions: [transaction1, transaction2]


};

// console.log(bankAccount.transactions)




//extends

interface Book {
  name: string;
  author: string;
  price: number;
}

interface EBook extends Book { //access to Book interface automatically
  // name:string;
  // author:string;
  // price:number;
  fileSize: string;
  format: string;

}
interface AudioBook extends EBook { //access to EBook automatically
  // name:string;
  // author:string;
  // price:number;
  // fileSize:string;
  // format:string;
  duration: string

}


const book: AudioBook = {
  name: 'Learn With Python',
  author: 'Md.Anisul Islam',
  price: 500,
  fileSize: '300MB',
  format: 'pdf',
  duration: '4.0h'

}

// console.log(book);



//two interface Marge

interface Product {
  name: string;
  price: number;
  company: string;

}
interface Product {
  productTax: number;
}

const product: Product = {
  name: 'computer SSD',
  price: 4200,
  company: 'samsung',
  productTax: 10

}

// console.log(product);



//Unions
type userId = number | string;

function printId(id: userId) {

  //Narrowing
  if (typeof id === 'string') {
    // console.log(id.toUpperCase());
  } else {
    //  console.log(id);

  }

}
printId('mahfuz1234');
printId(1234)

function getFirstThree(x: string | number[]) {
  return x.slice(0, 4);

}
//  console.log(getFirstThree('hello'))
//  console.log(getFirstThree([1,2,3,4,5,6]))

//Generics

function logString(arg: string) {
  // console.log(arg);
  return arg;

}
logString('User Login Successfully!');

function logNumber(arg: number) {
  // console.log(arg);
  return arg;
}

logNumber(12345);

function logArray(arg: any[]) {
  // console.log(arg)
  return arg;
}
logArray([1, 2, 3, 4, 5]);


//generics example

function lonInAnything<T>(arg: T): T {
  // console.log(arg);
  return arg;

}
lonInAnything(1234567);



interface HasAge {
  age: number;
}

function getOldest<T extends HasAge>(peoples:T[]): T {
  return peoples.sort((a, b) => b.age - a.age)[0];

}
const peoples:HasAge[] = [{ age: 30 }, { age: 40 }, { age: 60 }, { age: 20 }];

 getOldest(peoples);



interface Player{
  name:string;
  age:number;
}

const players:Player[]=[
  {name:'virat kholi',age:34},
  {name:'sakib al hasan',age:35},
  {name:'Tamim Iqbal',age:39},
  {name:'Masrafi bin Mortuza',age:38}
];

const person=getOldest(players);
// console.log(person)


//Generics function link passing function

interface IPost{
  id:number;
  title:string;
  body:string;
}

interface IUser{
  id:number;
  title:string;
  body:string;
}

// const fetchPostData=async(path:string):Promise<IPost[]> =>{
//   const response=await fetch(`https://jsonplaceholder.typicode.com${path}`);
//   return response.json();

// }

// const fetchUserData=async(path:string):Promise<IUser[]> =>{
//   const response=await fetch(`https://jsonplaceholder.typicode.com${path}`);
//   return response.json();

// }


const fetchData=async<ResultType>(path:string):Promise<ResultType>=>{
  const response=await fetch(`https://jsonplaceholder.typicode.com${path}`);
  return response.json();

}

(async()=>{
  // const posts=await fetchPostData('/posts');
  // posts[0].body;

  // const users=await fetchUserData('/users');
  // users[0].id;


  // const users=await fetchData<IUser[]>('/posts');
  // users[0].id
  const posts=await fetchData<IPost[]>('/posts');
  posts[0].body;



})();


//structural typing or duck typing

interface ICredential{
  userName:String;
  password:String;
  isAdmin?:boolean;
}

function login(credential:ICredential):boolean{
  // console.log(credential);
  return true;

}

const users:ICredential={
  userName:'Ahmed Furuk',
  password:'secret1234',
  isAdmin:true

}
login(users)


//passing function with argument

interface IAuth{
  userName:string;
  password:string;
  login(userName:string,password:string):boolean;
}

const auth:IAuth={
  userName:'Hasibur Rahman',
  password:'secret12345',
  login(userName:string,password:string){
    return true;

  }
}