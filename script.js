document.addEventListener('DOMContentLoaded', () => {
    //variables
 
        let counter = document.querySelector('#counter')
        let input = document.querySelector('#input')
        let addButton = document.querySelector('#add-button')
        let subtractButton = document.querySelector('#subtract-button')

    //event listeners
        addButton.addEventListener('click', editCounterUp)
        subtractButton.addEventListener('click', editCounterDown)

    //functions
    function editCounterUp(){
        counter.innerText = parseInt(counter.innerText) + parseInt(input.value)
        if(counter.innerText < 0){
            counter.style.color = 'red'
        } else{
            counter.style.color = 'black'
        }
    }
    function editCounterDown(){
        counter.innerText = parseInt(counter.innerText) - parseInt(input.value)
        if(counter.innerText < 0){
            counter.style.color = 'red'
        } else{
            counter.style.color = 'black'
        }
    }

    

})