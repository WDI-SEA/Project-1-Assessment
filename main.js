document.addEventListener('DOMContentLoaded', () => {
    let score = 0

    const plus = document.querySelector('.plus')
    const minus = document.querySelector('.minus')
    minus.addEventListener('click', () => {
        let text = document.querySelector('.input')
        score -= Math.floor(text.value)
        console.log(score)
        let number = document.querySelector('.number')
        number.innerText = score
    })
    plus.addEventListener('click', () => {
        let text = document.querySelector('.input')
        score += Math.floor(text.value)
        console.log(score)
        let number = document.querySelector('.number')
        number.innerText = score

    })


    let number = document.querySelector('.number')
    number.innerText = score
    

})
