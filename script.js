const numbers = document.querySelectorAll(".number")
const calculatorScreen = document.querySelector(".calculator_screen")
let currentInput = '0'
let calculationOperator = ' '
let prevInput = '0'
const updateScreen = (number) =>{
      calculatorScreen.value = number
}
const inputNumber = (number) =>{
      currentInput += number
}


numbers.forEach((number) =>{
    number.addEventListener("click", (event) =>{
          inputNumber(event.target.value)
          updateScreen(currentInput)
    })
})



