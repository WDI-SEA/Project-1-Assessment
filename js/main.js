const minusButton = document.getElementById('minusButton')
const plusButton = document.getElementById('plusButton')
let result = document.getElementById('result')
let numberVariable = document.getElementById('numberVariable')

minusButton.addEventListener('click', () => {
    let resultMinus = Number(result.innerText) - Number(numberVariable.value)
    result.innerText = resultMinus
})

plusButton.addEventListener('click', () => {
    let resultPlus = Number(result.innerText) + Number(numberVariable.value)
    result.innerText = resultPlus
})