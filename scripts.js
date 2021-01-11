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
