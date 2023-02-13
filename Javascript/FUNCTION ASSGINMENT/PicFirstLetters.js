const student = {
	name: {
		first: "",
		last: "",
	},
	age: 0,
	IntialLetters: function () {
		return (this.name.first[0] + this.name.last[0]).toUpperCase();
	},
};

let std1 = student;
std1.name.first = "Bharath";
std1.name.last = "Peethala";
std1.age = 20;
console.log(std1.IntialLetters());
