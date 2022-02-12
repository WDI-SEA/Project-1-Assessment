let counterDisplayNumber = 0;

const addValue = () => {
    const valueToCalculate = document.querySelector('.value').value
    const total = counterDisplayNumber + Number(valueToCalculate)
    document.querySelector('.count-display').innerText = total
    counterDisplayNumber = total
    if (total >= 0) {
        document.querySelector('.count-display').style.color = 'black'
    }
}

const subtractValue = () => {
    const valueToCalculate = document.querySelector('.value').value
    const total = counterDisplayNumber - Number(valueToCalculate)
    document.querySelector('.count-display').innerText = total
    counterDisplayNumber = total
    if (total < 0) {
        document.querySelector('.count-display').style.color = 'red'
    }
}

const addButton = document.querySelector('.add').addEventListener('click', addValue)
const subtractButton = document.querySelector('.subtract').addEventListener('click', subtractValue)



