// Cache DOM elements

const counter = document.querySelector('.counter')
const boxPlus = document.querySelector('.boxPlus')
const boxMinus = document.querySelector('.boxMinus')
const input = document.querySelector('input')

let cumuValue = 0

boxPlus.addEventListener('click', () => {
  cumuValue += parseInt(input.value)

  cumuValue < 0
    ? (counter.style.color = 'red')
    : (counter.style.color = 'black')

  finalNum()
})

boxMinus.addEventListener('click', () => {
  cumuValue -= parseInt(input.value)

  cumuValue < 0
    ? (counter.style.color = 'red')
    : (counter.style.color = 'black')

  finalNum()
})

function finalNum() {
  document.querySelector('.counter').innerHTML = cumuValue
}
