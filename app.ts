// let num1=3;
// let num2=4;
// function calculate(num1:number,num2:number){
//   return num1+num2;

// }
// console.log(calculate(num1,num2));



function getTotal(numbers: Array<number>) {
  return numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0)
}
// console.log(getTotal([3,4,5,6,7]));



//create a object

const user = {

  firstName: <string>"john",
  lastName: <string>"Weak",
  role: <string>"Software Engineer",
  age: <number>40
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
const transaction2:Transaction = {
  payerAccountNumber: 100,
  payeeAccountNumber: 5001
 

};

const bankAccount: BankAccount = {
  accountNumber: 1001,
  accountHolder: "Mark Wood",
  isBalance: 50000,
  isActive: true,
  transactions: [transaction1,transaction2]


};

// console.log(bankAccount.transactions)




//extends

interface Book{
  name:string;
  author:string;
  price:number;
}

interface EBook extends Book{ //access to Book interface automatically
  // name:string;
  // author:string;
  // price:number;
  fileSize:string;
  format:string;

}
interface AudioBook extends EBook{ //access to EBook automatically
  // name:string;
  // author:string;
  // price:number;
  // fileSize:string;
  // format:string;
  duration:string

}


const book:AudioBook={
  name:'Learn With Python',
  author:'Md.Anisul Islam',
  price:500,
  fileSize:'300MB',
  format:'pdf',
  duration:'4.0h'

}

// console.log(book);



//two interface Marge

interface Product{
  name:string;
  price:number;
  company:string;

}
interface Product{
  productTax:number;
}

const product:Product={
  name:'computer SSD',
  price:4200,
  company:'samsung',
  productTax:10

}

// console.log(product);



//Unions
type userId=number|string;

function printId(id:userId){

  //Narrowing
  if(typeof id==='string'){
    // console.log(id.toUpperCase());
  }else{
    //  console.log(id);

  }
 
}
printId('mahfuz1234');
 printId(1234)

 function getFirstThree(x:string|number[]){
  return x.slice(0,4);

 }
//  console.log(getFirstThree('hello'))
//  console.log(getFirstThree([1,2,3,4,5,6]))