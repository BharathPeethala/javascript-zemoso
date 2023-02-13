let array = [1,2,3,4,5];
let set =new Set(['bharath','jogi','mani'])

for(let i=0;i<array.length;i++){
    console.log(array[i]);
}
for(const i of array){
    console.log(i);
}
for(const i of set){
    console.log(i);
}