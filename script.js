//Definition of document element constants

const numbers = document.querySelectorAll('.number');
const operation = document.querySelectorAll('.operation');
const equalButton = document.getElementById('equals')
const clear = document.getElementById('clear');
const del = document.getElementById('del');
const point = document.getElementById('point');
const display = document.getElementById('display');
const firstOperandDisplay = document.getElementById('firstOperandDisplay')
//Definition of internal variables
let firstOperand = 0, secondOperand = 0, currentOperation = null;

//Adding functionality to buttons
numbers.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
)
operation.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
)
equalButton.addEventListener('click', calculate)
clear.addEventListener('click', clearDisplay);
del.addEventListener('click', deleteNumber);
point.addEventListener('click', addPoint);



function appendNumber(number) {
    if (display.innerHTML === "0") {
        display.innerHTML = number
    } else
        display.innerHTML += number;
}


function calculate() {
    
    if (!currentOperation) { 
        display.innerHTML="Error!"
    }
    secondOperand = display.innerHTML;
   
    firstOperandDisplay.innerHTML+=secondOperand;
    
    if (currentOperation === "+") {
        display.innerHTML=+firstOperand+secondOperand;

    }
    if (currentOperation === "-") {
        display.innerHTML=firstOperand-secondOperand;

    }
    if (currentOperation === "*") {
        display.innerHTML=firstOperand*secondOperand;

    }
    if (currentOperation === "/") {
        if(secondOperand==0){
           
            display.innerHTML="Error: Divided by 0"
        }else
        display.innerHTML=firstOperand/secondOperand;

    }
}
function clearDisplay() {
    firstOperandDisplay.innerHTML = "";
    display.innerHTML = "0";

}

function deleteNumber() {


    let s = display.innerHTML;
    if (s.length == 1) {
        display.innerHTML = "0"
    } else
        display.innerHTML = s.slice(0, -1);

}

function addPoint() {
    display.innerHTML += ".";
}
function setOperation(operator) {
    firstOperand = display.innerHTML;
    firstOperandDisplay.innerHTML = display.innerHTML;
    display.innerHTML = "";

    console.log(operator);
    if (operator === "x") {
        currentOperation = "*";
        firstOperandDisplay.innerHTML += "x";
    }
    if (operator === "+") {
        currentOperation = "+";
        firstOperandDisplay.innerHTML += "+";
    }
    if (operator === "-") {
        currentOperation = "-";
        firstOperandDisplay.innerHTML += "-";
    }
    if (operator === "÷") {
        currentOperation = "/";
        
        firstOperandDisplay.innerHTML += "÷";
    }

}