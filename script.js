const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equal = document.querySelectorAll(".equal")
const calculator_screen = document.querySelectorAll(".calculator_screen")
let currentInput = '0'
let calculationOperator = ' '
let prevInput = '0'
const updateScreen = (number) => {
    calculatorScreen.value = number
}
const inputOperator = (operator) => {
    prevInput = currentInput
    calculationOperator = operator
    currentInput = '0'
}
const inputNumber = (number) => {
    if (currentInput === '0'){
        currentInput = number
    }
    else{
        currentInput += number
    }
}
operators.forEach((number) =>{
    operator.addEventListener("click", (event) => {
        // console.log(event.target.value)
        inputOperator(event.target.value)
    })
})
const inputOperator = (operator) =>{
    prevInput = currentInput
    calculationOperator = operator
    currentInput = '0'
}
const inputNumber = (number) => {
    currentInput = number
}

numbers.forEach((number) => {
    numbers.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        // console.log(currentInput)
        updateScreen(currentInput)
    })
})
equal.addEventListener("click" () => {
    calculate()
    updateScreen(currentInput)
    // console.log("equal button is pressed")
})



const calculate = ()=> {
    let result = '0'
    prevInput = parseInt(prevInput)
    currentInput = parseInt(currentInput)
    switch(calculationOperator) {
        case '+':
            result = prevInput + currentInput
            break;
        case '*':
            result = prevInput + currentInput
            break;
        case '-':
            result = prevInput + currentInput
            break;
        case '/':
            result = prevInput + currentInput
            break;
        default:
            return
    }
    currentInput = return.toString()
    calculationOperator = ''
}
    

