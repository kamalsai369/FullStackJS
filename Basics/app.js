console.log('Hello World!');
//variables
/*  variables are containers for storing data values.
    In this example, x, y, and z are variables. 
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.
*/

var name="John";
let age=25;
const country="India";
console.log(name,age,country);

//Terneary operator
let a=10;   
let b=20;
let c=a>b?a:b;
console.log(c);

//switch case
let day=3;  
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}

//loops
//for loop
for(let i=1;i<=10;i++){
    console.log(i);
}
//while loop
let i=1;        
while(i<=10){
    console.log(i);
    i++;
}
//do while loop
let j=1;
do{
    console.log(j);
    j++;
}
while(j<=10);

//arrays    
let fruits=["Apple","Banana","Mango"];
console.log(fruits[0]); 
console.log(fruits[1]);
console.log(fruits[2]);  
console.log(fruits.join(" - "));   
console.log(fruits.slice(0,2));

//objects
let person={
    name:"John",
    age:25,
    country:"India"
};
console.log(person.name);
console.log(person.age);
console.log(person.country);
console.log(typeof person);

//functions
function add(a,b){
    return a+b;
}
add(5,10);
console.log(add(5,10));


function fun(user){
    console.log(`Hello ${user}`);
}
console.log(fun("John"));

//callback function 
function greet(name,callback){
    console.log(`Hello ${name}`);
    callback();
} 
function callMe(){
    console.log("I am callback function");
}
greet("John",callMe);

//methods

function fun(){
    return `hello, my name is ${this.name} . iam ${this.age} years old`
}
 const person1={
        name:"John",
        age:25,
        fun,
 };
 console.log(person1.fun());


 