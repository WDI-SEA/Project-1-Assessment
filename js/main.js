document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('input').value = 1

    let display = parseInt(document.getElementById('display').innerText)
    
    document.getElementById('plus').addEventListener('click', function (e){
        e.preventDefault()
        const value = document.getElementById('input').value
        
        document.getElementById('display').innerText = (+value + +display)
        display += +value
        console.log(display)
    })
    document.getElementById('minus').addEventListener('click', function (e){
        e.preventDefault()

        const value = document.getElementById('input').value
        
        document.getElementById('display').innerText = (+value + +display)
        display -= +value
        console.log(display)
    })
















})