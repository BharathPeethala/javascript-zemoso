// const declarations only prevent reassignments — they don't prevent mutations of the variable's value, if it's an object.

const x = 10;
const object ={};
object.name = 'bharath';
console.log(object);
console.log(x);
try {
    
    x = 11;
	console.log(x);
} catch (error) {
    console.log(error.message)
}
