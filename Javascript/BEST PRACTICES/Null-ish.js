//4  Null-ish coalescing

function print(val) {
	return val || "Missing";
}

console.log("||||||||||||||||||");
console.log(print(5));
console.log(print());
console.log(print(undefined));
console.log(print(NaN));
console.log(print(0));

function print1(val) {
	return val ?? "Missing";
}

console.log("????????????????????????");
console.log(print1(5));
console.log(print1());
console.log(print1(undefined));
console.log(print1(NaN));
console.log(print1(0));
console.log(print1(false));
