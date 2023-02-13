// 5. Logical assignment

let a;
let b = 5;

if (a == null || a == undefined) {
	a = b;
}
a = false;
b = 10;
// a??(a=b)
// or
a ??= b; //x = y if x is nullish, else no effect
a ||= b; //x = y if x is falsy, else no effect
a &&= b; //x = y if x is truthy, else no effect

console.log(a);
