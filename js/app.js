window.addEventListener("DOMContentLoaded", () => {
    // grab DOM elements
    const INPUT_FORM = document.querySelector("form")
    const OUTPUT_FIELD = document.querySelector("#output")

    // this is the variable we will alter each time the user adds or subtracts
    let total = 0

    INPUT_FORM.addEventListener("submit", event => {
        // supress refreshing the page
        event.preventDefault()

        // bring in the user typed in value
        let userInput = input.value

        // add or subtract from total
        if(event.submitter.value == "+") {
            total += Number(userInput)
        } else {
            total -= Number(userInput)
        }

        // change color of text if total is a negative number
        // change it back to black when 0 or greater
        if(total < 0) {
            OUTPUT_FIELD.style.color = "red"
        } else {
            OUTPUT_FIELD.style.color = "black"
        }
        
        // update the DOM to show new total
        OUTPUT_FIELD.textContent = total
    })
})