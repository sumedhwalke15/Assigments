// Primitive Data Types in JavaScript
// 1. String
var firstName = "John Doe";
var lastName = "Jane Smith"; // Reassigning the variable
console.log("Name:", lastName);

// 2. Number
var age = 30;   
age = 31; // Reassigning the variable
console.log("Age:", age);
console.log("Type of Age:", typeof age); // Output: number
var height = 5.9; // Float number
height = 6.0; // Reassigning the variable
console.log("Height:", height);
console.log("Type of Height:", typeof height); // Output: number

// 3. Boolean
var isStudent = true; // Boolean value      

isStudent = false; // Reassigning the variable
console.log("Is Student:", isStudent);
console.log("Type of Is Student:", typeof isStudent); // Output: boolean

// 4. Undefined
var address; // Variable declared but not initialized

console.log("Address:", address); // Output: undefined
console.log("Type of Address:", typeof address); // Output: undefined
// 5. Null
var phoneNumber = null; // Explicitly set to null
console.log("Phone Number:", phoneNumber); // Output: null
console.log("Type of Phone Number:", typeof phoneNumber); // Output: object

// 6. Symbol (ES6 feature)
var uniqueId = Symbol("id"); // Unique identifier       
console.log("Unique ID:", uniqueId); // Output: Symbol(id)
console.log("Type of Unique ID:", typeof uniqueId); // Output: symbol
// 7. BigInt (ES11 feature)
var bigNumber = BigInt(123456789012345678901234567890); // Large integer
console.log("Big Number:", bigNumber); // Output: 123456789012345678
console.log("Type of Big Number:", typeof bigNumber); // Output: bigint




// Non Primitive Data Types

//array, object, function, date, regex, map,set
// 1. Object

var person=
{
//key : Value pairs
    firstName:"Sumedh",
    lastName:"walke",
    age:25,
    isStudent:true,
}

//console.log("Person Object:", person);

//Array
const numbers=[1,2,3,4];
//console.log(typeof numbers)

//date
const date = new Date();
//console.log("Date:",date);

//map 
//special data type which can store values as key value pair same 
//like objects but there are some differences 

//objects will have keys as strings only no other datatype be allowed to be used as a "Key"
//while in map we can say any data type as key like string, number, boolean
const myMap= new Map();

//set the values in the map
myMap.set("name","Atul");
myMap.set("age",21);
myMap.set(100,"one hundred");
myMap.set(true,"boolean key");

//get the values from the map
// console.log(myMap.get(100));
// console.log(myMap.get(true));
// console.log(myMap.get("age"));


// //delete from the map
// //myMap.delete("name");
// console.log(myMap.set("name","Akshay"));
// console.log(myMap.get("name"))


//functions
// a function is reusable code which has specific instuctions to perform some operations

//parameter less function 
//function declaration
// function nameofFunction(){
//     return "Hello world";
// };
//calling of the function
// console.log(nameofFunction());
//parameterised
//name==>parameter

function nameofFunction(name){
    return "Hello"+ name;
}
console.log(nameofFunction("Sumedh"));