const addBtn = document.querySelector('.add');
const subtBtn = document.querySelector('.subt');
const input = document.querySelector('.input-field');
const valueNumber = document.querySelector('.show-number');

let mainVar = 0;

addBtn.addEventListener('click', () => {
	addNumber();
});

subtBtn.addEventListener('click', () => {
	subtNumber();
});

const addNumber = () => {
	mainVar += +input.value;
	valueNumber.innerText = mainVar;
	if (mainVar >= 0) {
		valueNumber.style.color = 'black';
		valueNumber.style.fontWeight = '700';
		valueNumber.style.fontSize = '30px';
		valueNumber.style.paddingBottom = '30px';
	}
};

const subtNumber = () => {
	mainVar -= +input.value;
	valueNumber.innerText = mainVar;
	if (mainVar < 0) {
		valueNumber.style.color = 'red';
		valueNumber.style.fontWeight = '700';
		valueNumber.style.fontSize = '30px';
		valueNumber.style.paddingBottom = '30px';
	}
};
