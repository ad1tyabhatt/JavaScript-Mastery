// let a = 10;
// console.log(a)
// a = a*2
// console.log(a)


// string to number

// let a= "10"
// a = Number(a);
// console.log(typeof(a))

// 
// const arr = [1,2]
// const [a,b] = [[1,2],3];
// console.log(a,b)

// const person ={
//   name:"Adi",
// }
// const key  = "email"
// person['key'] = 'aditya';

// console.log(person)

//! Functions Begins


// function sing(){

// }

//! Array Methods 


// map method

// const users = [
//   {fname:"Aditya", age:23},
//   {fname: "Adi" , age:25}
// ]


// const res = users.map((user)=>{
//   return user.fname
// }) 

// console.log(res)

// const a = (1,2,1)
// console.log(a)

// console.log(typeof(toString(NaN)))


// let user = {
//   firstName:"Aditya",
//   lastName:"Bhatt"
// }


// let a = new Array(9).fill(0)
// console.log(a)

// function outside(){

//   const one =()=>{
//     console.log(this)
//   }
  
//   one()
// }

// outside()


// ! filter and Map

// let a = [1,2,3]
// let res = a.filter((val)=> val/2>=1)
// // let res=a.map((val)=> val*2)
// console.log(a)
// console.log(res)

// let func = ()=>{
//   console.log(1)
// }

// setTimeout(()=>{
//   func = ()=>{
//     console.log(2)
//   }
//   func()
// },0)

// setTimeout(func,100)


// let func =() => { console.log(1) }
// setTimeout (()=>{
//  func = () => {
//  console.log(2)
//  }
//  func();
// },0)
// setTimeout (func,100)


// const a = 'adi'
// console.log(!typeof(a))
// if(!typeof a==='string'){
//   console.log('string')
// }else{
//   console.log('not a string')
// }


// let a= 1;
// (function(){
//   let foo = ()=> a;
//   let a = 2;
//   console.log(foo())
// }())


// let c = 20;
// if(c==20){
//   let c = 31;
//   console.log(c)
// }
// console.log(c)


// function mul(a){
//   return function (b){
//     return function(c){
//       return a*b*c;
//     }
//   }
// }
// console.log(mul(2)(3)(4)); // output : 24



//! empty an array 

// var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
// let res = (arrayList.splice(0,arrayList.length))
// console.log(arrayList)
// console.log(res)

// console.log(undefined*1)


// var bar = true;
// console.log(bar + 0);   
// console.log(bar + "xyz");  
// console.log(bar + true);  
// console.log(bar + false);



// var z = 1, y = z = typeof y;
// console.log(y);



// var z;
// z = 1;
// var y;
// y = z;
// z = typeof y;
// console.log(y)

// bar()
// var bar= function() { console.log(11); };


// var salary = "1000$";

// (function () {
//   var salary = undefined;
//   console.log("Original salary was " + salary);

//   salary = "5000$";

//   console.log("My New Salary " + salary);
// })();



// function get(){
//   console.log(a)
//   const a = 10
// }

// get()



/**
 * & HOOKS
 * 
  useState
  useEffect
  Use Context
  Use Reducer
  Use Memo
  Use Callbacks
  Use Ref
 * 
 * 
 * & HIGHER ORDER COMPONENTS
 * 
 * what?
 * why?
 * when to use?
 * how?
 * 
 * 
 * 
 * & LIFE CYCLE METHODS OF COMPONENTS
 * 
 * 3 phases
 * mounting 
 * updating
 * deleting
 * 
 * 
 * & State Management
 * 
 * States/props 
 * Props drilling
 * Context
 * 
 * 
 * & REDUX/REDUX TOOLKIT
 * 
 * how
 * why
 * when
 * 
 * 
 * & CUSTOMS HOOKS (GOOD COMPANY)
 * 
 * when 
 * how 
 * code
 * 
 * 
 * & LAZY LOADING/CHUNKING (advance)
 * 
 * & VIRTUAL DOM
 * 
 * reconciliation
 * react fiber
 * 
 * 
 * &SERVER SIDE RENDERING vs CLIENT SIDE RENDERING 🔥
 * 
 * seo and Performance
 * 
 * 
 * & ROUTING
 * -react router 
 * - protected router
 * - role based access control
 * - qwery params
 * - Dynamic Routing
 * 
 * & Testing
 * 
 * 
 * & Async Task
 * - UseEffect in depth(fetch,Axios)
 * - Promises
 * - api calls
 * - Events
 * 
 * 
 * & REUSABILITY
 * & MODULARITY
 * & TESTABILITY
 * & PERFORMANCE
 * 
 * & TAILWIND
 * 
 * 
 * 
 * 
 * 
 * 
 */

// const Github_Api = "https://www.abibliadigital.com.br/api/verses/nvi/sl/23"

// const user = fetch(Github_Api);
// console.log(user)

// console.log("Adi")

let arrOne = [32, 45, 63, 36, 24, 11]
const multFive = (num) => {
return num * 5; //'num' here, is the value of the array.
}
let arrTwo = arrOne.map(multFive)
console.log(arrTwo)
console.log(arrOne)

// let arrNum = [15, 39, 20, 32, 30, 45, 22]
// function divByFive(num) {
//   return num % 3 == 0
// }
// let arrNewNum = arrNum.filter(divByFive)
// console.log(arrNum)
// console.log(arrNewNum)