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
	let result = 0;
	switch (operator) {
	case 'addOp':
		result = add(a, b);
		break;
	case 'subOp':
		result = subtract(a, b);
		break;
	case 'multOp':
		result = multiply(a, b);
		break;
	case 'divOp':
		result = divide(a, b);
		break;
	default:
	}
	return result;
}

const audio = document.querySelector('audio');
audio.volume = 0.3;
const screen = document.getElementById('screen');
const container = document.getElementById('container');
let screenContent = [];
let oper;
let i = 1;

function clearScreen() {
	screen.textContent = '';
	screenContent = [];
	oper = '';
}
function checkZero() {
	if (screenContent[1] == 0 && oper === 'divOp') {
		alert('You can\'t divide by 0, come on!!');
		clearScreen();
	}
}

/* ------------------------- keyboard event listener ------------------------ */
document.addEventListener('keydown', (e) => {
	const keys = document.querySelector(`button[data-key='${e.keyCode}']`);
	audio.currentTime = 0;
	audio.play();
	keys.classList.add('active');
	keys.click();
	setTimeout(() => keys.classList.remove('active'), 100);
});

/* -------------------------- click event listener -------------------------- */
container.addEventListener('click', (e) => {
	audio.currentTime = 0;
	audio.play();
	if (e.target.classList.contains('numbers')) {
		if (i !== 0) {
			const number = e.target.textContent;
			const before = screen.textContent;
			screen.textContent = before + number;
			i = 1;
		} else {
			const number = e.target.textContent;
			screen.textContent = number;
			i = 1;
		}
	} else if (e.target.textContent === '*' && i !== 0) {
		screenContent.push(Number(screen.textContent));
		checkZero();
		if (screenContent.length === 2) {
			const result = operate(oper, screenContent[0], screenContent[1]);
			screen.textContent = Math.round(result * 10000) / 10000;
			screenContent = [];
			screenContent.push(result);
		}
		oper = 'multOp';
		i = 0;
	} else if (e.target.textContent === '-' && i !== 0) {
		screenContent.push(Number(screen.textContent));
		checkZero();
		if (screenContent.length === 2) {
			const result = operate(oper, screenContent[0], screenContent[1]);
			screen.textContent = Math.round(result * 10000) / 10000;
			screenContent = [];
			screenContent.push(result);
		}
		i = 0;
		oper = 'subOp';
	} else if (e.target.textContent === '+' && i !== 0) {
		screenContent.push(Number(screen.textContent));
		checkZero();
		if (screenContent.length === 2) {
			const result = operate(oper, screenContent[0], screenContent[1]);
			screen.textContent = Math.round(result * 10000) / 10000;
			screenContent = [];
			screenContent.push(result);
		}
		i = 0;
		oper = 'addOp';
	} else if (e.target.textContent === '/' && i !== 0) {
		screenContent.push(Number(screen.textContent));
		checkZero();
		if (screenContent.length === 2) {
			const result = operate(oper, screenContent[0], screenContent[1]);
			screen.textContent = Math.round(result * 10000) / 10000;
			screenContent = [];
			screenContent.push(result);
		}
		i = 0;
		oper = 'divOp';
	} else if (e.target.textContent === '.') {
		if (screen.textContent.match(/\./));
		else if (screen.textContent === '') {
			const number = e.target.textContent;
			const before = 0;
			screen.textContent = before + number;
		} else {
			const number = e.target.textContent;
			const before = screen.textContent;
			screen.textContent = before + number;
		}
	} else if (e.target.textContent === '+ / -') {
		if (screen.textContent !== '.') {
			screen.textContent *= -1;
		}
	} else if (e.target.textContent === 'A/C') {
		clearScreen();
	} else if (e.target.id === 'back') {
		screen.textContent = screen.textContent.slice(0, -1);
	} else if (e.target.textContent === '=' && oper !== '=') {
		screenContent.push(Number(screen.textContent));
		checkZero();
		if (screenContent.length === 2) {
			const result = operate(oper, screenContent[0], screenContent[1]);
			screen.textContent = Math.round(result * 10000) / 10000;
			screenContent = [];
		}
		oper = '=';
	}
});
