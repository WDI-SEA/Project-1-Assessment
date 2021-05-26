// Cache DOM elements

const counter = document.querySelector('.counter')
const boxPlus = document.querySelector('.boxPlus')
const boxMinus = document.querySelector('.boxMinus')
const input = document.querySelector('input')

boxPlus.addEventListener('click', () => {
  input.value = parseInt(input.value) + 1
})
boxMinus.addEventListener('click', () => {
  input.value = parseInt(input.value) - 1
})

document.querySelector('.counter').innerHTML = input.value
