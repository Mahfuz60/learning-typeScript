/*let num1=3;
let num2=4;
function calculate(num1:number,num2:number){
  return num1+num2;

}
console.log(calculate(num1,num2));
*/
function getTotal(numbers) {
    return numbers.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);
}
console.log(getTotal([3, 4, 5, 6, 7]));
