window.addEventListener("DOMContentLoaded", () => {
    const INPUT_FORM = document.querySelector("form")
    const OUTPUT_FIELD = document.querySelector("#output")

    let total = 0

    INPUT_FORM.addEventListener("submit", event => {
        event.preventDefault()
        let userInput = input.value

        if(event.submitter.value == "+") {
            total += Number(userInput)
        } else {
            total -= Number(userInput)
        }

        if(total < 0) {
            OUTPUT_FIELD.style.color = "red"
        } else {
            OUTPUT_FIELD.style.color = "black"
        }
        
        OUTPUT_FIELD.textContent = total
    })
})