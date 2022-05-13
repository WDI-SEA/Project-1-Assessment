let addButton = document.getElementById('add')
let subtractButton = document.getElementById('subtract')
let inputValue = document.getElementById('input')
let totalValue = document.getElementById('total')

// console.log(totalValue.innerText)

addButton.addEventListener('click', () => {
    totalValue.innerText = totalValue.innerText + inputValue.value
})

subtractButton.addEventListener('click', () => {
    totalValue.innerText = totalValue.innerText - inputValue.value
})


// whoops, my addition one doesnt work quite right lol