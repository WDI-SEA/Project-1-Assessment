let answer = document.getElementById('input')
let plusSign = document.getElementById('plus')
let minusSign = document.getElementById('minus')
let result = document.getElementById('result')

document.addEventListener('DOMContentLoaded', () => {
    result.innerText = 0
    answer.value = 1

    plusSign.addEventListener('click', () => {
        result.innerText = Number(result.innerText) + Number(answer.value)
        console.log(result.innerText)
    })
})

minusSign.addEventListener('click', () => {
    result.innerText = result.innerText - answer.value
    console.log(result.innerText)

})