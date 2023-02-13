/*Symbols are often used to add unique property keys to an object 
that won't collide with keys any other code might add to the object, 
and which are hidden from any mechanisms other code will typically use to access the object.*/



let email1 = Symbol("email");
let email2 = Symbol("email");
let employee = {};
employee.name = "bharath";
employee.age = 20;
employee[email1] = "bharathpeethala@gmail.com";
employee[email2] = "bharathpeethala@outlook.com";
console.log(Object.keys(employee));
console.log(employee);

for (const key in employee) {
	console.log(key + ":keys");
}

let sym1 = Symbol("foo");
let sym2 = Symbol("foo");
console.log(typeof sym1);
console.log(sym1 == sym2);

let sym3 = Symbol.for("foo");
let sym4 = Symbol.for("foo");

console.log(sym3 == sym4);