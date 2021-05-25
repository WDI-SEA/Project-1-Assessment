// dom manipulation
document.addEventListener("DOMContentLoaded", () => {
    let upDog = document.getElementById('plus')
    let downDog = document.getElementById('minus')
    let toAdd = document.getElementById('addeller')
    let numView = document.getElementById('numdisplay')

    // + onclick, numdisplay + input value
    upDog.addEventListener('click', () => {
        numView.innerText = toAdd.value + numView.innerText
    })

    // - onclick, numdisplay - input value
    downDog.addEventListener('click', () => {
        numView.innerText = toAdd.value - numView.innerText
    })
    console.log(toAdd.value)
})


// [ number display ] - set
// [ + ] <input>  [ - ] - set
// start app - it just works
// numdisplay = 1 - done
// <input> = 1 - done
// +- onhover, color invert - css
