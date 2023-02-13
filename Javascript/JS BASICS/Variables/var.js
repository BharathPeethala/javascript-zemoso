// var declarations can have surprising behaviors (for example, they are not block-scoped)
var x = 10;
console.log(x);
if (x == 10) {
	var x = 20;
	console.log(x);
}
console.log(x);