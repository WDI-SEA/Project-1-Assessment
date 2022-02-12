let counterDisplayNumber = 0;

let countDisplay = document.querySelector('.count-display').innerText
// console.dir(countDisplay)
let valueToCalculate = document.querySelector('.value').value


const addValue = () => {
    const total = counterDisplayNumber + valueToCalculate
    document.querySelector('.count-display').innerText = total
}


const subtractValue = () => {
    
}


const addButton = document.querySelector('.add').addEventListener('click', addValue)
const subtractButton = document.querySelector('.subtract').addEventListener('click', subtractValue)



