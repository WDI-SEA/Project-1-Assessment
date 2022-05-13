// SELECTORS
// buttons
let addBtn = document.querySelector('#add')
let subtractBtn = document.querySelector('#subtract')
// inputs
let product = 0
let user = 0
// let userInput = document.querySelector('#userInput')
let results = document.querySelector('#number')

// FUNCTIONS
const math = function(product, user) {
    if(addBtn.clicked) {
        let conversion = (product + user)
        console.log("hi")
        return conversion
    } else if(subtractBtn.clicked) {
        let conversion = (product - user)
        return conversion
    }
}

// addition button
addBtn.addEventListener('click', function(){
    let userInput = document.querySelector('#userInput')
    user = userInput.value
    let answer = math(product, user)
    results.innerText = answer
    // console.log('click')
})


// subtraction button
subtractBtn.addEventListener('click', function(){
    user = userInput.value
    let answer = math(product, user)
    results.innerText = answer
})