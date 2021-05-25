window.addEventListener("DOMContentLoaded", () => {
    //actual count state
    let count = 0
    //get DOM content
    const counter = document.querySelector(".counter")
    const form = document.querySelector("form")
    const add = document.querySelector(".add")
    const subtract = document.querySelector(".subtract")
    const argument = document.querySelector(".argument")
    //add click listeners for buttons
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        let val = parseInt(argument.value)
        if(e.submitter === add) count += val
        else if (e.submitter === subtract) count -= val
        counter.textContent = count
        if(count < 0) counter.style.color = "red"
        else counter.style.color = "black"
    })
})