const prompt=require("prompt-sync")({sigint:true});

let firstNum = prompt("Please type first number ");
firstNum = parseInt(firstNum);
console.log("First number " + firstNum + "!");
let operator = prompt("Please type operator ");
console.log("Operator " + operator + "!");

let secondNum = prompt("Please type second number ");
secondNum = parseInt(secondNum);
console.log("Second number " + secondNum + "!");

let result = 0;

if (operator === "+")
{
    result = secondNum + firstNum;
}
else if (operator === "-")
{
    result = firstNum - secondNum;
}
else if (operator === "*")
{
    result = secondNum * firstNum;
}
else if (operator === "/")
{
    result = firstNum / secondNum;
}
console.log("Result is " + result);
