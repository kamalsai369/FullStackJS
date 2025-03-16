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
// setTimeout(function(){
//     console.log("Hello");
// },3000);

// const interval=setInterval(function(){
//     console.log("Hello");
// }, 1000);

// setTimeout(function(){
//     clearInterval(interval);
// },3000);
 
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

//rest operator
//The rest operator is used to represent an indefinite number of arguments as an array.
function user(...userdata){
    console.log(userdata);
}
user("John",25,"India");

function person6(firstname,lastname,...userdata){
    console.log(`Hello ${firstname} ${lastname}`);
    console.log(userdata);
}
person6("John","Doe",25,"India");

//destructuring
//Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
//destructuring arrays
const numbers1=[1,2,3];
const [x,y,z]=numbers1;
console.log(x,y,z);

//destructuring objects
const person7={
    name1:"John",
    age1:25,
    country1:"India",
};
const {name1,age1,country1}=person7;
console.log(name1,age1,country1);

//destructuring function arguments
function f(){
    return [1,2]
}
let r,t;
[r,t]=f();
console.log(r,t);

const [s,...u]=[1,2,3,4,5];
console.log(s);
console.log(u);

//ternary operator
//condition?true:false
let p=10;
let q=20;    
let l=p>q?p:q;
console.log(r);

function passwordChecker(ps){
    if(ps===8){
        return "Password is valid";
    }
    else{
        return "Password is invalid";
    }
}
const res1=passwordChecker(8);
console.log(res1);

//that whole function can be write in the form of a ternary operator
function passChecker(ps){
    return ps===8?"password is valid":"password is invalid";
}
const res2=passChecker(8);
console.log(res2);


const age4=19;
const vote=age4>=18?"Eligible for voting":"Not eligible for voting";
console.log(vote);


let personmoney=true;
let money=personmoney?"he can buy":"he can't buy";
console.log(money);

//for in loop
//The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
//syntax:==> for(let key in object){statement}
//cant support break,continue and return statements
//supports callback functions
const person8={
    name:"John",
    age:25,
    country:"India",
};
for(let key in person8){
    console.log(person8[key])
}


//for of loop
//The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. 
//syntax:==> for(let variable of iterable){statement}
//can support break,continue and return statements
//can support callback functions
const fruits1=["Apple","Banana","Mango"];
for(let fruit of fruits1){
    console.log(fruit);
}  

const veg=["potato","tomato","spinach"]
for(let v of veg)
{
    console.log(v);
}

const text="hello world";
for(let char of text){
    console.log(char);
}


//forEach loop
//The forEach() method executes a provided function once for each array element.
//syntax:==> array.forEach(function(currentValue, index, arr), thisValue)
//can't support break,continue and return statements
const colors=["red","green","blue"];
colors.forEach(function(color){
    console.log(color);
});
colors.forEach(color=>console.log(color));


const words=["hello","world","javascript"];
const capwords=words.forEach((word,index,arr)=>{
    arr[index]=word[0].toUpperCase()+word.substring(1);
})
console.log(words);

let numbers2=[1,2,3,4,5];
let sum1=0;
function adder(number){
    sum1+=number;
}
numbers2.forEach(adder);
console.log(sum1);

let numbers3=[1,2,3,4,5];
let double2=numbers3.map(number=>number*2)
console.log(double2);

let peoples=[
    {firstname:"John",lastname:"Doe"},
    {firstname:"Jane",lastname:"Doe"},
]
peoples.forEach(people=>console.log(`${people.firstname} ${people.lastname}`));
const resul1=peoples.map(people=>(`${people.firstname} ${people.lastname}`)); 
console.log(resul1);

let res3=peoples.map(people=>{
    return [people.firstname,people.lastname];
})
console.log(res3);



//filter
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
//syntax:==> array.filter(function(currentValue, index, arr), thisValue)
const computers=[
    {name:"Apple",ram:16},
    {name:"Acer",ram:4},
    {name:"Dell",ram:8},
];
const res4=computers.filter(computer=>computer.ram>5);
console.log(res4);

const ages1=[10,20,30,40,50];
const res5=ages1.filter(age=>age>18);
console.log(res5);



const words1=["hello","world","javascript"];
const res6=words1.filter(word=>word.length>5);
console.log(res6);



//find
//The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
//syntax:==> array.find(function(currentValue, index, arr),thisValue)   
const peoples2=[
    {firstname:"John",lastname:"Doe"},
    {firstname:"Jane",lastname:"Doe"},  
];

const res7=peoples2.find(people=>people.firstname==="John");
console.log(res7);


//every and some
//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
//The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
//syntax:==> array.every(function(currentValue, index, arr), thisValue)
//syntax:==> array.some(function(currentValue, index, arr), thisValue)
const poeples3=['John','Jane','Doen'];
const res8=poeples3.every(people=>people.length===4);
console.log(res8);
const res9=poeples3.some(people=>people.length<5);
console.log(res9);



//reduce 
//The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
//syntax:==> array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
const numbers5=[1,2,3,4,5]; 
const sum2=numbers5.reduce((p,c)=>{
    console.log(`previous value:${p}`);
    console.log(`current value:${c}`);
    return p+c;
})
console.log(sum2);


//Map data structure
//The Map object holds key-value pairs and remembers the original insertion order of the keys.
//syntax:==> new Map([iterable])
const map=new Map();
const key1="name";
const key2={};
const key3=function(){};
map.set(key1,"sai");
map.set(key2,"Empty object");
map.set(key3,"empty function");
console.log(map.get(key1));
console.log(map.get(key2));
console.log(map.get(key3));
console.log(map.size);
console.log(map.has(key1));
console.log(map.has(key2));
console.log(map.has(key3));
console.log(map.keys());
console.log(map.values());

//iteration using map
for(let [key,value] of map){
    console.log(`${key}=${value}`);
}
map.forEach((value,key)=>{
    console.log(`${key}=${value}`);
});



//set data structure
//The Set object lets you store unique values of any type, whether primitive values or object references.
//syntax:==> new Set([iterable])
const val1=[1,2,2,2,2,2,2,3];
const myset=new Set(val1);
console.log(myset);
console.log(myset.size);
console.log(myset.has(2));
console.log(myset.has(4));
console.log(myset.add(4));
console.log(myset.delete(2));   

//iteration using set
for(let values of myset){
    console.log(values);
}



