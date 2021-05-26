document.addEventListener('DOMContentLoaded', () => {

    // Add User Input to h1
    document.getElementById("submit_plus").addEventListener('click', add)
    function add() { 
        let h1 = document.querySelector('h1').innerText
        let number = document.querySelector("#input").value
        let result = Number(h1) + Number(number)
        document.querySelector('h1').innerText = result
        if(result >= 0) {
            document.querySelector('h1').style.color = "black"
        }
    }

    // Subtract User Input from h1
    document.getElementById("submit_minus").addEventListener('click', subtract)
    function subtract() { 
        let h1 = document.querySelector('h1').innerText
        let number = document.querySelector("#input").value
        let result = Number(h1) - Number(number)
        document.querySelector('h1').innerText = result
        if(result < 0) {
            document.querySelector('h1').style.color = "red"
        }
    }    
})