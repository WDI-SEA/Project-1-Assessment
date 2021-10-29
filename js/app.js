document.addEventListener('DOMContentLoaded', () => {
    console.log('the dom is loaded')
    // event listener for plus button
    plus.addEventListener('click', () => {
        console.log('you clicked plus')
        // retrieve number from input box
        const input = parseInt(userInput.value)
        if (!Number.isInteger(input)) {
            console.log('enter an integer')
            warning.innerText = 'Please enter an integer.'
        } else {
            warning.innerText = ''
            const current = parseInt(countDisplay.innerText)
            const result = current + input
            countDisplay.innerText = result
            if (result < 0) {
                countDisplay.style.color = 'red'
            } else {
                countDisplay.style.color = 'black'
            }
        }
    })

    // event listener for minus button
    minus.addEventListener('click', () => {
        console.log('you clicked minus')
        // retrieve number from input box
        const input = parseInt(userInput.value)
        if (!Number.isInteger(input)) {
            console.log('enter an integer')
            warning.innerText = 'Please enter an integer.'
        } else {
            warning.innerText = ''
            const current = parseInt(countDisplay.innerText)
            const result = current - input
            countDisplay.innerText = result
            if (result < 0) {
                countDisplay.style.color = 'red'
            } else {
                countDisplay.style.color = 'black'
            }
        }
    })
})