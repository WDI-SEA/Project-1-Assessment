document.addEventListener('DOMContentLoaded', () => {

    let currentCountBox = document.getElementById('currentCountBox')
    let increment = document.getElementById('increment')
    let addButton = document.getElementById('addButton')
    let subtractButton = document.getElementById('subtractButton')
    let currentCount = 0

    addButton.addEventListener('click', add)
    subtractButton.addEventListener('click', subtract)

    function add () {
        currentCount +=  +increment.value
        currentCountBox.innerText = currentCount
        if (currentCount < 0) {
            currentCountBox.style.color = 'red'
        } else if (currentCount > 0) {
            currentCountBox.style.color = 'green'
        } else {
            currentCountBox.style.color = 'black'
        }
    }
    
    function subtract () {
        currentCount -=  +increment.value
        currentCountBox.innerText = currentCount
        if (currentCount < 0) {
            currentCountBox.style.color = 'red'
        } else if (currentCount > 0) {
            currentCountBox.style.color = 'green'
        } else {
            currentCountBox.style.color = 'black'
        }
    }
})