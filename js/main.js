// Cache DOM elements

const counter = document.querySelector('.counter')
const boxPlus = document.querySelector('.boxPlus')
const boxMinus = document.querySelector('.boxMinus')
const input = document.querySelector('input')

let cumuValue = 0

console.log(cumuValue)

boxPlus.addEventListener('click', (e) => {
  //   input.value = parseInt(input.value) + 1
  cumuValue += parseInt(input.value)
  finalNum()
})

boxMinus.addEventListener('click', (e) => {
  //   input.value = parseInt(input.value) - 1
  cumuValue -= parseInt(input.value)
  finalNum()
})

function finalNum() {
  document.querySelector('.counter').innerHTML = cumuValue
}
