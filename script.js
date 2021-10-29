/// Variables ///
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const display = document.getElementById("display")
let number = document.getElementById("number")

let count = 0
updateDisplay()

/// Variables Ended ///

/// eventListeners ///
minus.addEventListener("click", function() {
    count--
    updateDisplay()
})

plus.addEventListener("click",function() {
    count++
    updateDisplay()
})
//// eventListeners Ended ///

/// functionality ///
display.innerText = `${count}`
function updateDisplay() {
    // count += 1
    display.innerText = `${count}`
    // console.log(count)
    if(display)
    /// How to make a negative number red ///

    if(count < 0) {
        display.style.color = "red"
    } else {
        display.style.color = "black"
    }
}

/// Functionality Ended ///