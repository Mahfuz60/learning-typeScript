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
console.log(user)


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

console.log(customer)



function login(userData:Customer):Customer{

  return userData;
}

// console.log(login({name:'methon',age:34,product:'laptop',price:123000}));

type ID=number|string;

const userId:ID='Mahfuz1232';
console.log(userId)


