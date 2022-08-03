// Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
//     Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
//     Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string


// program for a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);


// 2nd method
class Calculator{
    addition(a,b){
        let c=a+b
        console.log(c)
    }
    subtraction(a,b){
        let c=a-b
        console.log(c)
    }
    multiplication(a,b){
        let c=a*b
        console.log(c)
    }
    division(a,b){
        let c=a/b
        console.log(c)
    }
}
let calculator = new Calculator()
calculator.addition(4.6,7)
calculator.subtraction(6,5)
calculator.multiplication(3.5,8)
calculator.division(5,6.8)