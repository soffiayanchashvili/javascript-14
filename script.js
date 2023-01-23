//#1.
let personsArry = [
    {
        name : "sofia",
        age : 16,
        address : "vaja-pshavela"
    },
    {
        name : "nia",
        age : 15,
        address : "gldani"
    }, 
    {
        name : "mariami",
        age : 23,
        address : "naxalovka"
    }
];

//#2.
console.log(`My name is ${personsArry[0].name}`);
console.log(`My age is ${personsArry[0].age}`);
console.log(`My address is ${personsArry[0].address}`);

//#3.
if (personsArry[0].age < 19) {
    console.log("i am a teenager")
} else {
    console.log("I am an adult")
}

//#4.
let numbers = [1, 2, 3, 4, 5]
console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])
console.log(numbers[4])