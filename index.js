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

