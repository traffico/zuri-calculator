'use strict'

// Declaring variables
let result, operator, firstNumber, secondNumber

// Assigning variables to each prompt input

firstNumber = parseInt(prompt("Enter first number"))

operator = prompt('Enter one operator i.e  +  or  -  or  *  or  /')
secondNumber = parseInt(prompt(`Enter second number`)) 

//checking for the operation choosen by the user
if(isNaN(firstNumber) || isNaN(secondNumber)){
    alert(`Invalid Operation: ${firstNumber} ${operator} ${secondNumber}. Kindly restart`)
}
else{
    if(!(operator == '+') && !(operator == '-') && !(operator == '*') && !(operator == '/')){
        alert(`Invalid Operation: ${firstNumber} ${operator} ${secondNumber}. Kindly restart`)
    }
    else{
        if(operator == '+'){
            result = firstNumber + secondNumber
        }
        else if(operator == '-'){
            result = firstNumber - secondNumber
        }
        else if(operator == '*'){
            result = firstNumber * secondNumber
        }
        else if(operator == '/'){
            result = firstNumber / secondNumber
        }
        alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
    }
}
