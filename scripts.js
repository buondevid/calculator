function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(operator, a, b) {
	switch (operator) {
	case addOp:
		add(a, b);
		break;
	case subOp:
		subtract(a, b);
		break;
	case multOp:
		multiply(a, b);
		break;
	case divOp:
		divide(a, b);
		break;

	default:
	}
}

function clearScreen() {
	screen.textContent = '';
}


const clear = document.getElementById('clear')
const screen = document.getElementById('screen');
const container = document.getElementById('container');

clear.addEventListener('click', clearScreen);

container.addEventListener('click', (e) => {
	if (e.target.classList.contains('numbers')) {
		const number = e.target.textContent;
		const before = screen.textContent;
		screen.textContent = before + number;
		console.log(number);
	}
});
