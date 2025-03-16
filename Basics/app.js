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



 //json methods
    const person2={
        name:"John",
        age:25,
        country:"India" 
    };  
    console.log(person2);
    console.log(JSON.stringify(person2));
    console.log(JSON.stringify(person2,null,2));
    console.log(JSON.stringify(person2,["name","age"],2));
   
    //date 
let date=new Date();
console.log(date);
const year=date.getFullYear();
console.log(year);
const month=date.getMonth();
console.log(month); 
const hours=date.getHours();
console.log(hours);
const minutes=date.getMinutes();
console.log(minutes);
const seconds=date.getSeconds();
console.log(seconds);
const milliseconds=date.getMilliseconds();
console.log(milliseconds);

console.log(date.toDateString());
console.log(date.toTimeString());


//settimeout
setTimeout(function(){
    console.log("Hello");
},3000);

const interval=setInterval(function(){
    console.log("Hello");
}, 1000);

setTimeout(function(){
    clearInterval(interval);
},3000);
 
//arrow function


const double=(n)=>n*2;
console.log(double(21));

//object literals   
function user1(name,age){
    return{
        name:name,
        age:age,
    };
}
const huxn=user1("John",25);
console.log(huxn);


//enhanced object literals
function user2(name,age){
    return{
        name,
        age,
        intro:function(){
            return `Hello, my name is ${this.name} and I am ${this.age} years old`;
        }
    };
} 

const huxn1=user2("John",25);
console.log(huxn1.intro());


function user3(name,age){
    return{
        name,
        age,
        intro(){
            return `Hello, my name is ${this.name} and I am ${this.age} years old`;
        }
    };
}
const huxn2=user3("John",25);
console.log(huxn2.intro());

const lib={
    sum:(a,b)=>a+b,
    sub:(a,b)=>a-b, 
}
console.log(lib.sum(10,5));
console.log(lib.sub(10,5));


function getPersionES6(name,age,height){
    return {name,age,height};
}
const personES6=getPersionES6("John",25,5.8);
console.log(personES6);
 

//spread operator is a new addition to the set of operators in JavaScript ES6. It takes in the contents of an iterable like an array or object and expands it into individual elements.
//spread operator for arrays
const arr1=[1,2,3];
const arr2=[4,5,6];
const arr3=[...arr1,...arr2];
console.log(arr3);

//spread operator for functions
function sum(a,b,c){
    return a+b+c;
}
const numbers=[1,2,3];
console.log(sum(...numbers));

//spread operator for objects
const person4={
    name:"John",
    age:25,
};  
const person5={
    ...person4,
    country:"India",
};
console.log(person5);
