let Number = 100;
let bigInt = 9007199254740991n;
let String = "Bharath";
let Boolean = true;
let float = 10.55;
let Null = null;
let Undefined;
alert('hello this is bharath');
console.log(`${typeof Number}:${Number}`);
console.log(`${typeof bigInt}:${bigInt}`);
console.log(`${typeof String}:${String}`);
console.log(`${typeof Boolean}:${Boolean}`);
console.log(`${typeof float}:${float}`);
console.log(`${typeof Null}:${Null}`);
console.log(`${typeof Undefined}:${Undefined}`);
console.log(parseInt("10101"));
console.log(parseFloat("10.0"));
console.log(42 / 0);

// JavaScript strings are immutable.

let firstName = "Bharath";
let lastName = " Peethala";
let fullName = firstName + lastName;

console.log(fullName.concat("is a bad boy"));
console.log(fullName.substring(2, 9));
console.log(fullName[fullName.length - 1]);

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

let arr1 = [1, 2, 3, 4, "Bharath", "Chaitanya"];
let set1 = new Set([2, 3, 4, 6]);

let map1 = new Map([
	["apples", 500],
	["banana", 600],
	["orange", 700],
]);
map1.set("cherries", 1000);
map1.delete("orange");
for (const i in arr1) {
	console.log(arr1[i]);
}

for (let i = 0; i <= 10; i++) {
	arr1.push(i);
	arr1.unshift(i);
	arr1.splice(4, 0, i);
}
for (let i = 0; i < 3; i++) {
	arr1.pop();
	arr1.splice(2, 1);
}
console.log(arr1);

for (let i = 0; i <= 6; i++) {
	set1.add(i);
	console.log(set1);
}
for (let i of map1.keys()) {
	console.log(`${map1.get(i)}:${i}`);
}

console.log(set1.delete(3));
console.log(set1.has(5));
// map
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]

// filter
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]

// reduce
const sum = numbers.reduce(function (result, item) {
	return result + item;
}, 0);
console.log(sum);

/* A JavaScript object is a collection of unordered properties.

Properties can usually be changed, added, and deleted, but some are read only.


In JavaScript, objects can be seen as a collection of properties.
With the object literal syntax, a limited set of properties are initialized; then properties can be added and removed. 
Object properties are equivalent to key-value pairs. 
Property keys are either strings or symbols. 
Property values can be values of any type, including other objects, which enables building complex data structures.*/

// In JavaScript, almost "everything" is an object.
// JavaScript can secure better data quality when using getters and setters.

const student = {
	id: "1",
	firstName: "2",
	lastName: "3",
    grade:"",
	fullName: function () {
		return this.lastName + this.firstName;
	},
	set grades(grade) {
		this.grade = grade;
	},
    get grades(){
        return this.grade
    },
	cars: {
		car1: "Ford",
		car2: "BMW",
		car3: "Fiat",
	},
};
const std3 = student;
std3.firstName = "Bharath";
std3.lastName = "Peethala";

delete student.fullName;
function Student(id, firstName, lastName) {
	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
}

Student.prototype.uppercase = function(){
    return this.firstName;
}
let std1 = new Student(1, "Bharath", "Peethala");
let std2 = new Student(2, "Mani", "Krishna");
let txt = "";
for (let i in student) {
	txt += i;
}
console.log(std1.fullName);
console.log(txt);

const myObj = {
	name: "John",
	age: 30,
	cars: [
		{ name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
		{ name: "BMW", models: ["320", "X3", "X5"] },
		{ name: "Fiat", models: ["500", "Panda"] },
	],
};

let x = "";
for (let i in myObj.cars) {
	x += "{" + myObj.cars[i].name + "}";
	for (let j in myObj.cars[i].models) {
		x += " " + myObj.cars[i].models[j];
	}
}
console.log(x);
console.log(JSON.stringify(std3));
std3.grades = 'A'
console.log(std3.grades)
// constructor function
function Person (firstName,lastName,age) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.fullName = firstName+' '+lastName,
    this.age = age
}

// creating objects
const person1 = new Person('Bharath','Peethala',29);
const person2 = new Person('King','Kong',39);

// adding a method to the constructor function
Person.prototype.uppercase = function() {
    return 'hello' + ' ' +  this.fullName.toUpperCase();
}

console.log(person1.uppercase()); 
console.log(person2.uppercase()); 

