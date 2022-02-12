const addUp = document.querySelector(".up");
const minusDown = document.querySelector(".down");

function add(){
	addUp.addEventListener("click", addUp)
	const num1 = 1;
	let num2 = parseInt(".display").value;

	const sum = num1 + num2;

	console.log(sum);
}

add();

function subtract (){
	minusDown.addEventListener("click", minusDown)
	const num1 = 1;
	let num2 = parseInt(".display").value;

	const sumsubtract = num2 - num1;

	console.log(subtract);
}

subtract();








