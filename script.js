// dom manipulation
document.addEventListener("DOMContentLoaded", () => {
    let upDog = document.getElementById('plus')
    let downDog = document.getElementById('minus')
    let numSel = document.getElementById('numval')
    let numView = document.getElementById('numdisplay')

    // + onclick, numdisplay + input value
    upDog.addEventListener('click', () => {
        numView.innerText++
    })

    // - onclick, numdisplay - input value
    downDog.addEventListener('click', () => {
        numView.innerText--
    })
})
// [ number display ]
// [ + ] <input>  [ - ]
// start app
// numdisplay = 1
// <input> = 1
// +- onhover, color invert
