// let allows you to declare block-level variables. The declared variable is available from the block it is enclosed in.

let x = 10;
console.log(x);
if (x == 10) {
	let x = 20;
	console.log(x);
}
console.log(x);

for (let x = 0; x < 5; x++) {
	console.log(x);
}

console.log(x);
