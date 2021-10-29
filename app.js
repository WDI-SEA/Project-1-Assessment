
document.addEventListener('DOMContentLoaded', ()=>{
    // form.addEventListener('submit', (e) =>
    // e.preventDefault()
    // )
    let count = 0
    countDisplay.innerText = count

    subtractButton.addEventListener('click', (e) => {
        count = count - inputField.value
        countDisplay.innerText = count
    })
    addButton.addEventListener('click', (e) => {
        count += parseInt(inputField.value) 
        countDisplay.innerText = count
    })
})
