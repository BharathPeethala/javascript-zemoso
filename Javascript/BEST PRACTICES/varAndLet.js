// 1 Block scored declarations
var x = 10;
if (true) {
	var x = 20;
	console.log(x);
}
console.log(x);

// var are not block-scoped

let y = 10;
if (true) {
	let y = 30;
	console.log(y);
}
console.log(y);
