console.log('hello assessment')

const input = document.querySelector('#input')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const output = document.querySelector('#output')

// initial input value is 1 
input.value = 1 

let count = 0
// function to make count red if negative 
const turnRed = function () {
    if (count<0) {
        output.classList.add('red')
    }
    else {
        output.classList.remove('red')
    }
}


plus.addEventListener('click' ,()=> {
    if (parseInt(input.value)) { 
        const num = parseInt(input.value)
        count += num
        output.innerHTML = count
        turnRed()
    }
    else {
        count = 0
        turnRed()
        output.innerHTML = 'You did not input a valid number. Count is reset to 0. Try again.'
    }
})

minus.addEventListener('click' ,()=> {
    if (parseInt(input.value)) { 
        const num = parseInt(input.value)
        count -= num
        output.innerHTML = count 
        turnRed()
    }
    else {
        count = 0
        turnRed()
        output.innerHTML = 'You did not input a valid number. Count is reset to 0. Try again.'
    }
})

plus.addEventListener('mouseover',()=> {
    plus.classList.add('hover')
})
plus.addEventListener('mouseout',()=> {
    plus.classList.remove('hover')
})
minus.addEventListener('mouseover',()=> {
    minus.classList.add('hover')
})
minus.addEventListener('mouseout',()=> {
    minus.classList.remove('hover')
})





