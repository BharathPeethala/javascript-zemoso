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

passwordMatch("bharath1234")
	.then((message) => {
        return GotoNextPage(message)
	})
    .then((message)=>{
        console.log(message);
    }
    )
	.catch((error) => {
		console.log(error);
	});

async function authentication(passsword) {
	try {
		const response = await passwordMatch(passsword);
		const processedResponse = await GotoNextPage(response);
		console.log(processedResponse);
	} catch (err) {
		console.log(err);
	}
}

authentication("bharath1234");
