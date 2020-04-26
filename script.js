const numbers = document.querySelectorAll(".number")
const calculatorScreen = document.querySelector(".calculator_screen")

const updateScreen = (number) => {
      calculatorScreen.value = number
}
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)

    })
})



