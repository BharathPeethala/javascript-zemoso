const square = (a) => a ** 2;
const add = (a, b) => a + b;
const mutlipy = (a, b) => a * b;

function APlusBWholeSquare(square, add, a, b) {
	return add(add(square(a), square(b)), mutlipy(2, mutlipy(a, b)));
}

console.log(APlusBWholeSquare(square, add, 10, 15));
