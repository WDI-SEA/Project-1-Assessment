const plusButton = document.querySelector('#plus-button');
const minusButton = document.querySelector('#minus-button');

let addOrSubtract = () => {
    let output = 0
    // output = document.querySelector('#output').innerText = 0;
    plusButton.addEventListener('click', () => {
        let input = parseInt(document.querySelector('#input-field').value);
        output = input + output;
        console.log(output);
        document.querySelector('#output').innerText = output;

        if (output < 0) {
            document.querySelector('#output').style.color = 'red';
        } else {
            document.querySelector('#output').style.color = 'black';
        }
    })
    minusButton.addEventListener('click', () => {
        let input = parseInt(document.querySelector('#input-field').value);
        output = output - input;
        console.log(output);
        document.querySelector('#output').innerText = output;

        if (output < 0) {
            document.querySelector('#output').style.color = 'red';
        } else {
            document.querySelector('#output').style.color = 'black';
        }
    })

}

addOrSubtract();