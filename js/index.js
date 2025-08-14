//some every  filter reduce  find map set includes






// Infosys Certified Javascript Developer
//Infosys Certified TypeScript Developer
//Digital Interaction professional
//single threaded vs  multi  threaded
//interpreted  programming language
//loosely  typed  language, strongly typed programming language
//how HTtp works ,TCP, UDP, request response , server  client
//why  javascript  is loosely  typed language:
//answer : because it  dont directly  interact with the system,
//in broweser what memory can be allocated to the variable is not fixed and therefore we cant use like : (int x  = 10)
//hence the dynamic typed is  what supported for the javascript  as ewll
//closures in javascript: in a function having access to the lexical envioprment of the outer functiuon can be  called as closur
//usage of closures  in javascript:*
//vanillla javascrript
//why react is  an advantage over basic  javascript:
//answer : reconcillation : that makes the  react  faster
//diffrence in function based components and class base componenes
//JSX  in react : Javascript  XML
//ask wether to work on the styling , ask interviewer for the requirement,regular  expression to validate email, atleast complete one module in the given time
//event  loop in javascript
//function  currying :
//react is view inside MVXC ie model view controller
//react features , react supports  ssr
//stats  and props functionality and  usage and features
//passing from child to parent we use callback functionality
//class  components
//lifecyle method
//understand  about redux , what is it  how it works and all
//saga functionality , function generator
//thunk
//event  bubbling and event looping in html
//semantic  tags in html
//box model in css, visibility(hidden and display:none);
//display:flex in css
//pseudo classes and  pseudo elements
//difference in margin and padding
//diff in var let const
//hoisting::----------------------------------
//variable  hoisting : it only occurs with var keyword
// In the case of let and const, hoisting still occurs, but they are not initialized until the actual line of code is executed.This results in a temporal dead zone(TDZ) from the start of the block until the declaration is initialized, causing an error if you try to access them before initialization.
// in case of var the vaariable is hoisted and intialized as undefined
// in case of let and cost the variable is hoisted but  not initiated untill the code reaches the declerateion




//debouncing in react
//what is redux and usage  and implementation
//How React is  different other UI libraries or  frameworks 
//virtual dom ?
//undefined is a variable that refers to something that doesn't exist, and the variable isn't defined to be anything. null is a variable that is defined but is missing a value.
//differnce in functiona components and class  componenets
//difference  between promises and async await
//promise : is an object, executive function, resolve and reject(2 functions)
//async await : syntatical sugar , waiting
//Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to ...
//questions :
//synchronous[line by line], asynchronous[overcome the sequentical execution], promises,closures, currying, async-await , event looping[takes the excecution of the javascript code ], variable hoisting,prototype in javascript[eg: achieve inheritance in javacript(top level)], memoization[eg :uses the concept of closures] , Event Bubbling, var,let,const,
//var and let both gets hoisted but (var in global window , let will be hoisted in seperate script block).temporal deadzone(difference between intialization and end), const with primitive and non primitive{eg: array with const},const(can change the properties but not reassign), inside for loop :if we dont want to use let what will be use :(create seperate function and pass i to it : settimeout eg ), how to make a copy of an object (object.assign),
//map and filter difference. PROTOTYPE** and how prototype works , prototype chaining, arrow function and use of arrow function, arrow function dont get hoisted,when do we use bind(create seperate memory location) vs call and apply(get executed as soon as we call it).Difference between rest and spread operator ? event loop,  map,reduce,filter. hoisting** , hoisting works only with the(var) , diff between let and var**, event loop in javascript****, differnce in settimeout and setinterval, ES6 features used , where we mostly use rest  and spread  operator , shallow copy and deep copy differnece .,
//Array.prototype.last => retuns the last element of array
//node js : What is middleware

//questions react: 
//how u pass the same data across all the components,context , propdrilling,
//redux(used in frequent and quick changes) vs  context api(where we dont require that much changes) , when and where they should be used, their usage , differnces,limitations of react , react vs angular? difference between controlled and uncontrolled components in react , how to optimize the react  app performance ,use of react.memo, use of usecallback, usememo,use of frameworks , what is gatsby, error boundaries in react, functions in error boundaries, making generalization from  the complex  code,  difference  between element and component , what are pure components, REFS  in react ?, What is forward  refs , what is virtual dom ? what  is interceptor ? what is react fiber ,  Lifecycle methods of react , in which  case we use higher order components , 1azy  loading ? How to manage nested routes in terms of role based routing? function based components or class based components  ,  string  coercion
//node js is also important ***
//combination of node , frontend ,cloud 
//How to reverse a string , normal way and the built in method for js 
//why we make use of the promises.


//fullstack :angular, node,react, vue, java, python, 
//closure  example : a combination of functions  bundled together 
//with reference to its surroundings , hence the variable defined in outer function can be used 
//in inner functions even after the outer function execution is completed.
//form of lexical scoping used to preserve variables from outer scope of a function 
//in the inner scope of function

function  Parent(){   //closure function
    var name = "first";
    function  child(){
        console.log(name);
    }
    child();
}
Parent();



//function currying example : nested series of the functions each taking single argumet
//helps in avoiding passing the same variable multiple times , and helpts to  create an higher order function 

function  curry(a){
    return (b)=>{
        return (c)=>{
            return a+b+c;
        }
    }
}
console.log(curry(1)(2)(3))
// example of currying  in other way :
const balances = (price) => (discount = 0) => (items = 0) => (balance = 0) => { // this is currying of these attributes  getting used 
    let pricedata = 0
    if (items > 5) {
        pricedata = balance - (price * items - price * discount / 100)
    }
    return pricedata
}
let price = 100
let discount = 10
let items = 6
let balance = 1000
const resultsss = balances(price)(discount)(items)(balance) //  currying herer 
console.log(resultsss)

let a = "Shikher";
return a.slice(3); // will print all after and including the 3rd position element
return a.slice(3,5); //will print all the values after and including the 3rd place value 
//but on the 5th place value 
//slice splice  split
//arr.splice(0,2)  it will print the value from including 0 till before 2 from the array


return b.split(a).length - 1
// The splice() prints the values same like slice but it is removing the values from that  current array
//splice is applied on the array
// The slice() method slices out a piece of an array.means print that section of string 
//eg: arr.splice(2,0,5)means without removing any elemnt at 2nd position fit  value 5
//in array splice addes the elements to  desired location  eg : splice (2,0,55,44);
for(let key in first){
    console.log(key);    //give the key or the index value
}
for(let key of first){
    console.log(key);  //gives the value at index 
}
const arrrr = [1,10000,21,30,4];
arrrr.sort((a,b)=>a-b);
return a.filter((el) => el < 0).length;// length of the array whwre values are less than value El
return a.reduce((acc, cur) => acc + cur, 0) //used for sum of array
// arr.reduce(callback(accumulator, currentValue, index, array), initialValue);
return arr.reduce((acc, cur) => acc + cur, 0) / arr.length//caluclulate average of items in array
return arr.reduce((a, b) => a.length <= b.length ? b : a)//find the longest string in this
return arrays.flat() //concats two array from rest operator
a.sort() // alphabatically sorting  
arr.reverse();

//sort,merge,remove duplicate values from an array eg: myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])
// return [...new Set([...a, ...b])].sort((x, y) => x - y);
//or:
//let data = a.concat(b).sort((a,b)=>a-b);
// return data.filter((item,index)=>data.indexOf(item)===index);
new Set(arr).size === 1 // see  if array dont have the duplicate values



//Declarative functions 
function data(num1  , num2 ){
    return num1 + num2;
}
var result =data(4,5);
console.log(result);

//annoymous function : fuuctions without a name
//we can add multiple  annonymous  functions in the same function 
function  datatwo(choice){
    choice();
}
datatwo(function(){console.log("raina");})

//function expression as parameter
function datathree(choice){
    let message = choice();
    console.log(message);

}
let  resultss = function(){return "this is functions expression passing the paramenter"};
datathree(resultss);

//default  parameters
function multiply(num1, num2 =4){  //if we want to have a default  value then this is how we do it 
    return num1  * num2;            //means we are setting  a value directly  into the function 
}
console.log(multiply(2 , undefined));

//destructed  parameter: means spreading the values in the paramenters 
//simply we use the values which req,from the given array or so
function  destruct([arg1 , arg2]){
    console.log("The val " + arg1 + " " + arg2);
}
destruct(["shikher","raina","data","feroc"])

//destruct in key  value pairs 
function showDetails({name, country}){
    console.log(name + " " + country);
}
showDetails({name:"Shikher", age : "44" ,  country: "india"})

//importing data  from json into the javascript  file :
// import  data from './data.json'  assert { type: "json" };

//arrow function example
function arrow(choice){
   let message = choice();
   return message;
}
arrow(()=>{console.log("Arrow function here");})

//single parameter arrow fucntion 
let single = data =>{
    console.log("This is " + data + " paramenter");
}
//multiple parameter  arrow function
let multiple = (first, second) =>{
    console.log("This is  " + first + "  " + second);
}
multiple("mutliple" , "parameter");

//no paramters arrow function
let noo = () =>{console.log("no parameter arrow function");}
noo();

//special character  arrow function
let  specialcharacter  =_ =>{console.log("this is a " + _  );}
specialcharacter("spefcialcharacter");


//variable scoping 
let global ="globalscope";//globally defined.
// console.log(global);
function  scoping(){
   if(true){
       let global = "block  scope variable"; //this is  block  scope variable and  cant be accessed  outside the if statement
       console.log("Block Scope "  + global);
   }
   console.log("Global scope  " + global);
   
   global = "global variable";//changed the global  scope to  local using the  let keyword
   let local = "local variable"; //acting as  globally , if used let the scope changes to local.
   console.log("global Scope " + global);
   console.log( "Local Scope " + local);
}   
scoping();
console.log(global);
console.log(local);
//reduce()  method : executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.
//Built in functions inside javasccript
console.log(eval('3+3'));
let  parsenum = "54";
console.log(typeof(parsenum));
let  parseintnum = parseInt(parsenum);
console.log(typeof(parseintnum ) + " " + parseintnum)
let parsefloatnum  = parseFloat("3.14a");
console.log(typeof(parsefloatnum));
console.log(parsefloatnum);
console.log(isNaN(23));c
console.log(isFinite(NaN));
//Number() is constructor of number , String()... means converts the value of an object to Number or string or so
console.log(Number("444444"));
console.log(String("23482823"));
console.log(String(1));


//Object Oriented Programming:
//creation array:
const data = "first,second,third,fourth".split(",");
console.log(data);
let data =Array();
let data = new Array("first", "second");
//Array Object

let values = ["first" , "Second ", 111  ,3.12 ,"first"  ]
values.pop();
values.push(22);
values.unshift(0) // adds value in the starting of the array
values[0] = "zero";
values .forEach(element => {
    console.log(element);  
});
console.log(values.length);
//other built in methods: map()
let mappedarray =values.map((data) =>{
    if(typeof data === "string"){
        return data.toUpperCase();
    }
    else return data;
      
})
console.log(mappedarray);
//other  built in methods : filter() : gives all the values 
let filterarray = values.filter((data)=>{
    if(typeof data === "number"){
        return data;
    }
})
console.log(filterarray);

//other  built in methods : find() : gives the first value
let  findarray = values.find((data)=>{
    if(typeof data ==="number"){
        return data;
    }
})
console.log(findarray);
//shift : removes first  eleent and prints it
//unshift: adds  new element in the starting of the array
//splice:splice(1, 0, "Linux");  removes the element from that
// position and enters the new element
//console.log(myArray.slice(1,3)) prints the element including 1 exliuding 3
//indexof(),findnext(),filter(),join(),reduce()
//slice give  (1,3) -> 1,2
//splice give (1,3) ->1,2,3
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//String object
//indexof(),charat(),split(),substr(),concat(),touppercase(),tolowercase()
//DAte Time object , there are other objects  as well

//literal  notations -
//two ways of creating custom object :
//1 .  class and new keyword
// by creating literal  notations

//literal  notations
let first = {}; //empty  literal
console.log(first);

let second ={id:1,name:"shikher", country:"india"} //filled literal
console.log(second);
console.log("This is the dot  notation: " +second.id + ' ' + second.name);
console.log("This is the bracket notation: " + second['country']);
//updating the values like  below
second.id = 3;
console.log(second);
let names = "shikher";
let age = "44";
//another way of creation the object before ES6  version
let newobject = {
        empname : names,
        empage:  age
}
console.log(newobject);

//After  ES6  the syntax is as such
let afteres6 = {
    names,age
};
console.log(afteres6);
//to  access the values present in the literal  object  use the 
//object.values() method

console.log("values of afteres6 " + Object.values(afteres6));
return a.indexOf('is');
//classes  and objects------------------

//classes and static variables
//static method are neither  called on object and nor
//using the this but called by class name
//creation of class and objects








class democlass{
    //constructor
    constructor(id, names , age){
        this.id = id;
        this.names = names;
        this.age = age;
    }
    //creating a method now 
    demomethod(){
        console.log(this.id +" " + this.names + " " +this.age);
    }
    //creating a static method now see how to  access it 
    static staticmethod(){
        console.log("This is static method")
    }

}
let results =new democlass(1,"shikher",22);
console.log("Id = " + results.id);
console.log("Name =" + results['name']);

results.demomethod();
democlass.staticmethod();
//result.staticmethod(); Typeerror

//inheritance in javascript
//keywordS: extend, super

class checkinheritance_parent{
    constructor(age, data){
        this.age = age;
        this.data = data;
    }
    resultmethod(){
        console.log("the ageis : "+ this.age + " and thedata  is " + this.data);
    }
    static  resultmethodstatic(){
        console.log("this is static from parent class");
    }

}
class childclass_child extends checkinheritance_parent{

    constructor(ages, datas, someothervalue){
        super(ages,datas); //for  putting the values to  parent classfrom  child class
        this.someothervalue = someothervalue;

    }
    resultmethod()
    {
        console.log("Inside child");
        //if here want to  invoke the method from  parent class
        //we will have to  use the super keyword
        super.resultmethod();
    }

}
let finalresult = new childclass_child(33,"shikher","3434");
//static can only be accessed by the class name so here also it will be sme
childclass_child.resultmethodstatic();// means the child clas cn acces the static methods of the parent class
// childclass_child.resultmethod();  will not work
finalresult.resultmethod();
//super keyword is  used to  call the parent class properties  and  methods



//object iterations
let data ={id :44,names:"Shikher",country:"India"}
for(let key in data){
    console.log(key," : " , data[key]);
}
//object iteration after  es6  we dont need for
//object.keys() m , .values(), .enteries(); gives the key and values pairs
//after es6
Object.keys(data).forEach((key)=>{
    console.log(key+ " : " + data[key]);
})
//objct.values
Object.values(data).forEach((values)=>{
    console.log(values);})
//object.enteries: creates an array of arrays
//object.enteries();
Object.entries(data).forEach((items)=>{
    console.log(items[0],"---", items[1]);
})



//spread  operator:basically used of  iteration
//...alldata is the rest  operator here
//usage is it dynamically can take the values without writting different statement for every  inputs here
function first(...alldata){
    alldata.forEach(id=>{console.log(id + " ")})
}
first(1,2,3,4,5);
//here we ahe given diff names for the paramaneters 
//spread  operator  allows an iterable to spread or expand  individually 
function  second( firstdata,seconddata,thirddata){
    console.log(firstdata+" "+ seconddata+ " " +thirddata);
}
let sendvalues =[1,2,3];
second(...sendvalues);//spreaded the array to  indivisual values

//deconstruct : deconstructing means taking out indivisual items from  an object or array and storing them in varibles

let  arr = [1,2,3,3];
//now to  deconstruct it 
let [a,b,c,d] = arr;
console.log(a,b,c,d);

//deconstructing an object now 
let cars ={id:1 ,model :123, nams:"sfsafa"};
let {id  , model} = cars;
console.log(id,model);
//creating a new copy of object frletom existing one
let newcar = cars;
console.log(newcar);
//creating a new copy of object from existing one with new properties
let  newcars ={car, clor:"red"};
console.log(newcars);//it contains array inside an arry 
// if we want al to be in the same array then:
let newcarssamearray={...car,clor:"green"};
console.log(newcarssamearray);


//json object 

let car={
    id:1,
    type:"Sedan"
};
//built in obbject:JSON
console.log(JSON.stringify(car));//converted to  string

let jsonstring='{"id":1,"type":"Sedan"}';
console.log(JSON.parse(jsonstring));//vonverted to  the json object


//regular  expressions in javascript
//quantifiers: indicates the frequency of the character thatt can be matched   using regex eg + * ? 
//dot(.) is a meta character  which  means it can match any character
// (^) should not  start expept this defined in [] 
//($) so that the string should end with the whats defined at last 
let email = "username@gmail.com";
let  regex = "^[a-zA-Z0-9_]+@[a-z]+\.(com|in)$";
// or         /^[a-zA-Z0-9_]+@[a-z]+\.(com|in)$/
//a-zA-Z0-9_  can be defined as [\w], .test(), .exec()
email.match(regex)?console.log(true):console.log(false);
let data = "helloworld";
console.log(data.search(/elllo/));
console.log(data.replace(/ello/,/TER/));
console.log(regex.exec("shikher@gmail.com"))
//to replace ALL the occuresce of charcater in .replace()  we will use the charsacter (g)
console.log(data.replace(/l/g,"o"));

//errors  and error  handling in javascript
//try catch throw finally
//error contains : typeoferror ,  , , stack  property
//builtin errors : Evalerror , Internal, range, reference,syntax,type,url
function demo(){
    try{    //try block
     let bike = newbike;
    } catch(error){   //error handler 
     console.log("Error " +  error.message);
    }
 }
 demo();
 //other ways aadvancced
 function first(){
   try {
     let datas = null ;
     let obj = null;
          if(datas==null){
         throw new Error('This is user defined error');
         }
   } catch (error) {
     if(error instanceof ReferenceError){
         console.log(Error + " " + error.message);
     }
     //else if (error  instanceof Typeerror...) like this
   }
   finally{
     console.log("this is finally will work  evverytime");
   }
 }
 first();
 //we can also  create our user  defined error objects like:
 //throw keyword can also be used inside the catch block  as well
 
//Advanced  Topics -------------------------------------------------------------------------------------

//asynchronous execution  in javscript  Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result
//Javascript is single threaded language which means the code gets execute  line by line  execution happens step by step , no paralled execution



function first(){
    console.log("first");
}
function second(){
    console.log("Second");
}
first(); second();
// now lets say that in first function there is some peice of code
//that takes some time to run so in the above approach the process will 
//freeze as we are waiting for first to complete its execution while second is ready to run
// therefore here there will be bad user experieice
// so we need to write such codes asynchrones codses

function  first1(){
   settimeout(function(){console.log("first"),2000})
}
function second2(){
    console.log("SEcond");
}


//callbacks :any function  that is passed to  another function as an argument is ccalled as  callback
//or it is function that is executed after another function has completed its  execution
//higher  order  functions , callbacks, async
// in the above code the output of  second2  is executd before first1 so how to implement callback in that

function first2(callback){
    setTimeout(() => {
        console.log("first2");
        callback();
    }, 2000);
}//using callback we ensured that the second2 should only run after the execution of first2
function second2(){
    console.log("second2");
}
first2(second2);
// second2();
//third part libraries expects us to pass a  callback  and they will invoke the callback after they habe completed the task , eg API requests
//The settimeout method takes  a task callback and tie as argument and executes the task  after a specified time delay
//nested  callbacks leads  to condition called as callback hell

function check(value) {
    console.log(value);
  }
  
  function getTrip() {
    setTimeout(function() {
      return "Lets go to Trip";
    }, 1500);
  }
  value = getTrip();
check(value);
 

function a(){
    console.log("A");
    return b;
}
function  b(){
    console.log("B");
    return c;
}
function  c(){
    console.log("C");
}
a()()();

//another way to write async functions in javascript is promises  as an alternate of callbacks  and remove the condintion of callllback hell
//Topic : Promises in javascript 
//promises have two parts resolved/rejected/pending

/*
case to  understand promises concept :
    for  example  we have a son and mom and exams
    mom promised that if the son passed in the exam then she will gift an iphone to son
    if not then she will say she is not giving surprize gift

*/

let ismomhappy = true;// we have assiged a case that the son passed and the mom is happy to be true

function momsgift(){ //created a function 
    return new Promise(function(resolved,reject){ // returning a promise object  . takes annonymous function  takes 
        //two callebacks that are resolve or reject
       if(ismomhappy){ // so here wether it  will be resolve or reject so  here it is resolve case
        let phone ={
            name: "Iphone",
            cost:100000
        };
        resolved(phone);
       }else{ // else condition for reject 
        reject(new Error("will not give the surprize gift"));
       }
    })
}
let  surprize = momsgift(); //assigned the value to  variable
//unwaraping now  to get  the data from above we use ..then here the resolve data is pased 
surprize.then(function(successresponse){
    console.log(successresponse);
//if the promise is rejected we  get it in the catch method   , reject data  will be passed here
}).catch(function(errorresponse){
    console.log(errorresponse);
})
//another example : trip to paris
//example 1 :
let  paristrip =true;

function  checkparis(){
    return new Promise(function(resolve, reject){
        if(paristrip){
            let data ={
                cost:50123,
                days:2,
                nights:3
            };resolve(data);
        }else{
            reject(new Error("The Trip is cancelled"));
        }
    })
}
let result = checkparis();
result.then(function(success){
    console.log(success);
}).catch(function(failure){
    console.log(failure);
})

//example 2 :

function getTrip(location) {
    return new Promise(function (resolve, reject) {
        if (location == "Paris") {
            resolve("Let's take a trip to " + location);
        } else {
            reject(Error("Invalid Location"));
        }
    });
}
getTrip("Paris").then(
    function (data) {
        console.log(data);
    },
    function (error) {
        console.log(error.message);
    }
)

//Chaining of the promises 
function j1(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){resolve("j1output")},2000);
    })
}
function j2(j1o){
    return new Promise(function(resolve,reject){
        setTimeout(function(){resolve(j1o +" j2 output")},3000);
    })
}

// j2().then(function(j2response){  //this statement will print(undefined , j2output)                                      
//     console.log(j2response);     //because promise will work step by step and first promise is not having output        
// })                               //so  we have  to use below approach to chain these promises
j1().then(function(j1response){
    return j2(j1response);
}).then(function(j2response){
    console.log(j2response);
})


//async and await ES6



function first(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("first");
        },2000);
    })
}
function second(firsts){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(firsts + "second");
        },3000)
    })
}
// first().then(function(result){
//     return second(result);
// }).then(function(response){
//     console.log(response);
// })
//async and await keywords remove the usage of using then and catch  to print promise as 
//async and await in es6 can do it well
//await can only be used inside the async function 

async function totaloutput(){
    let first1 = await first();  //whenever we have the await keyword then code will wait to  complete the primise
    let second2 = await second(first1); //whichever function will output a promise we have to use await there
    console.log("final  output " + second2);
}
totaloutput();


//after this we have the concept of DOm in dom.html

//Jasmine Testing : Unit Testing
//Javascript has no compiler, no static type checking
// we should have autmomated ways of checkingand tesing the codes
//exanple for usage of jasmine testing:
function totalTravelFare(baseFare, taxPercentage){
	var finalFare;
	finalFare = baseFare*(1+taxPercentage/100);
	return finalFare;
}
//Writing the test suite
//test suite  :  is created using the built in function describe();
//describe(title, function(){}) //it is a global  jasmine function

describe('TotalTravelFare calculation Suite:',function(){
});
//specfile--->describe block--->it statement--->expectation
//test spec:  is the actual test case. now we will write the 
//spec inside th sute with the help of the jasmine function (it)
describe('TotalTravelFare calculation Suite:',function(){
    it('Test Case 1: Inputs are correct',function(){
       expect(totalTravelFare(1000,20)).toEqual(1200);
    });
})
//except :  used for writting the assertions 
//toEqual() : is one of the matcher is used to compare  the actual and expected output
//matchers: are the  javascript function which are used to  compare expected and actual output
//method                 description
//tobe(expected)         ===
//tobedefined()         expect the actual value to be expected
//tobefalsy()           expect the actual value to be falsy
//tobetruthly()         expect the actual value to be truthely
//tobegreaterthan(expected)
//tobelessthan(expected)
//toequal(expected)
//tomatch(expected)
//tothrow(expected)     expect a function to throw something
//npm install -g karma jasmine-core

//callbacks  are used in good  way and bad  way
//bad part : callback hell, inversion of control


//undefined vs  null:
//undefined is a variable that refers to something that
// doesn't exist, and the variable isn't defined to be anything.
// null is a variable that is defined but is missing a value.

//closure in javascript
// ---------------------------------------------------------------------------------