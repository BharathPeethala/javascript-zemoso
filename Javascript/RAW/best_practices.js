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

// 2 Arrow functions

let arr = [1, 2, 3, 4, 5];

let top = (arr) => arr[arr.length - 1];
let last = () => arr[0];
let mid = () => arr[parseInt(arr.length / 2)];

console.log(top([1, 2, 3]), last(), mid());

// 3 Optional chaining

const person = {
	age: 22,
};

console.log(person?.name?.full);
// console.log(person.name.full)

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

// 6. Named capture groups

let re = /(\d{4})-(\d{2})-(\d{2})/;
let result = re.exec("Pi day this year falls on 2021-03-14!");
console.log(result[0], result[1], result[2], result[3]);

re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

result = re.exec("Pi day this year falls on 2021-03-14!");
let { year, month, day } = result.groups;

console.log(day, month, year);

// async & await
let a_b = "bharat";
const p = new Promise((resolve, reject) => {
	if (a_b === "bharath") {
		resolve("String Matched");
	} else {
		reject("String Not Matched");
	}
});


p.then((message) => {
	console.log(message);
}).catch((message) => {
	console.log(message);
});

const recordVideoOne = new Promise((resolve, reject) => {
	resolve("Video 1 Recorded");
});
const recordVideoTwo = new Promise((resolve, reject) => {
	resolve("Video 2 Recorded");
});
const recordVideoThree = new Promise((resolve, reject) => {
	resolve("Video 3 Recorded");
});
Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
	(message) => {
		console.log(message);
	}
);




function passwordMatch(passsword) {
    return new Promise((resolve, reject) => {
        if (passsword === "bharath1234") {
            resolve("Password Matched");
        } else {
            reject("Password Not Matched");
        }
    });
}
function GotoNextPage(response) {
    return new Promise((resolve, reject) => {
        resolve("You are logged into the website");
    });
}




// passwordMatch("bharath1234")
// 	.then((message) => {
//         return GotoNextPage(message)
// 	})
//     .then((message)=>{
//         console.log(message);
//     }
//     )
// 	.catch((error) => {
// 		console.log(error);
// 	});



async function authentication(passsword){
    try{
    const response = await passwordMatch(passsword);
    const processedResponse = await GotoNextPage(response);
    console.log(processedResponse);
    }
    catch(err){
        console.log(err);
    }

}

authentication('bharath123')

