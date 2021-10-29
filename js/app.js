const total = document.querySelector("h1")
const num = document.getElementById("num")
const add = document.getElementById("add")
const minus = document.getElementById("minus")
// Set total h1 default to 0 on page load
document.addEventListener("DOMContentLoaded", () => {
    total.innerText = 0
})
// Setup click event for adding
// ParseInt not working for this??
add.addEventListener("click", () => {
    total.innerText = Number(total.innerText) + Number(num.value)
    
    if (Number(total.innerText < 0)) {
        total.style.color = "red"
    } else {
        total.style.color = "black"
    }
})
// Setup click event for subtracting
minus.addEventListener("click", () => {
    total.innerText = total.innerText - num.value

    if (Number(total.innerText < 0)) {
        total.style.color = "red"
    } else {
        total.style.color = "black"
    }
})





