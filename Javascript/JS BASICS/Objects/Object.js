// JavaScript objects can be thought of as collections of key-value pairs. As such, they are similar to:Dictionaries in Python.

const student = {
	id: "1",
	firstName: "2",
	lastName: "3",
	grade: "",
	fullName: function () {
		return this.lastName + this.firstName;
	},
	set grades(grade) {
		this.grade = grade;
	},
	get grades() {
		return this.grade;
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
std3.grades = "A";
console.log(std3.grades);




// constructor function
function Person(firstName, lastName, age) {
	(this.firstName = firstName),
		(this.lastName = lastName),
		(this.fullName = firstName + " " + lastName),
		(this.age = age);
}

// creating objects
const person1 = new Person("Bharath", "Peethala", 29);
const person2 = new Person("King", "Kong", 39);

// adding a method to the constructor function
Person.prototype.uppercase = function () {
	return "hello" + " " + this.fullName.toUpperCase();
};

console.log(person1.uppercase());
console.log(person2.uppercase()); 