// Function

// function sum(a:number, b:number){
//     return a>b;
// }

// const x = sum(2,3)

// ------------------------------------------------------------------------

// Callback Function

// function runAfter1S(fn: ()=> String){
//     return setTimeout(fn, 1000);
// }

// function fn(){
//     return ('Hello, world!');
// }

// ------------------------------------------------------------------------

// Object

// interface User {
//     firstName: String,
//     lastName: String,
//     email?:String,     // email is optional     // Make things optional by using  ?
//     age: number
// }

// function isLegal (user: User){
//     if (user.age >= 18) {
//         return true;
//     }else{
//         return false;
//     }
// }

// const x=isLegal({
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25
// })

// console.log(x)

// --------------------------------------------------------------------------------------------

// Enums

// enum Direction {
//     Up,Right, Down, Left
// }

// enum Direction {
//     Up="up",
//     Right="right",
//     Down="down",
//     Left="left"
// }

// function doSomething(keyPressed: Direction){

// }

// doSomething(Direction.Right)
// doSomething(Direction.Left)

// --------------------------------------------------------------------------------------------

// Generics   <T>

// function parameterType<T> (arg: T){
//     return typeof(arg);
// }

// const para = parameterType<string>("Hello")
// const para1 = parameterType("String")
// const para2 = parameterType(123)
// const para3 = parameterType<number>(123)
// console.log("para:",para)
// console.log("para1:",para1)
// console.log("para2:",para2)
// console.log("para3:",para3)

// console.log("=====================================")

// function firstElementInArray <T>(arr:T[]){
//     return arr[0]
// }

// const val = firstElementInArray(["Hello","Aravinth"])
// const val2 = firstElementInArray([1,2])
// const val3 = firstElementInArray(["Hello",1,false])
// console.log("val:",val)
// console.log("val2:",val2)
// console.log("val3:",val3)

// --------------------------------------------------------------------------------------------

