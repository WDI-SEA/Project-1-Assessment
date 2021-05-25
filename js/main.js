document.addEventListener("DOMContentLoaded", () => {

// DOM 
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
let input = document.querySelector('#input')
let displayCount = document.querySelector('#display-count')
//init
let count = 1

plus.addEventListener('click', () => {
  count += parseInt(input.value, 10)
  plusMinus()

})
minus.addEventListener('click', () => {
  count -= parseInt(input.value, 10)
  plusMinus()
})

// function to disply add/subtract
function plusMinus() {
  displayCount.innerText = count
  if (displayCount.innerText < 0) {
    displayCount.style.color = "red"
  } else {
    displayCount.style.color = "black"
  }
}


})