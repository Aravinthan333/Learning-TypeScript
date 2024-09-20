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

// Class

// class User {
//     name:string;
//     role:string;
//     salary:number
    
//     constructor(name:string, role:string, salary:number) {
//         this.name=name
//         this.role=role
//         this.salary=salary
//     }

//     greet(){
//         return `Hello ${this.name}`
//     }

//     details(){
//         return `Name: ${this.name}, Role: ${this.role}, Salary: ${this.salary}`
//     }

// }

// let user1 = new User("John","Developer",5)
// let user2 = new User("Doe","Manager",8)

// console.log(user1.name)
// console.log(user1.greet())
// console.log(user2.details())

// --------------------------------------------------------------------------------------------

// Inheritance

// class Person{
//     firstName: string;
//     lastName: string;
//     age: number;

//     constructor (firstName: string, lastName: string, age: number){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//     }

//     greet(){
//         return `Hello ${this.firstName} ${this.lastName}`
//     }

//     getAge(){
//         return `Age :  ${this.age}`
//     }
// }

// class Employee extends Person{
//     employeeId: number;

//     constructor (firstName: string, lastName:string, age: number, employeeId:number){
//         super(firstName, lastName, age)
//         this.employeeId = employeeId
//     }

//     getEmployeeId(){
//         return `id of ${this.firstName} is ${this.employeeId}`
//     }
// }

// class Admin extends Person{
//     role: string

//     constructor(firstName: string, lastName:string, age: number, role: string){
//         super(firstName, lastName, age)
//         this.role = role
//     }

//     greet(){
//         return `Hello from ${this.firstName} ${this.lastName} as ${this.role}`
//     }

//     manageUsers(){
//         return `Managing users with role ${this.role}`
//     }
// }

// let employee1 = new Employee("John","doe", 25, 458458)
// let admin1 = new Admin("Emma", "Stone", 24,"Administrator")

// console.log(employee1.greet())
// console.log(admin1.manageUsers())
// console.log(admin1.greet().toUpperCase())

// --------------------------------------------------------------------------------------------

// closures

// function createCounter(){
//     let counter = 0;

//     return {
//         increment: function(){
//             counter++;
//         },
//         getCounter: function(){
//             return counter
//         }
//     }
// }

// const counter1= createCounter()
// const counter2= createCounter()

// console.log(counter1.getCounter(), "COUNTER 1")
// console.log(counter2.getCounter(), "COUNTER 2")

// counter1.increment()
// counter1.increment()
// counter1.increment()

// counter2.increment()

// console.log(counter1.getCounter(), "COUNTER 1")
// console.log(counter2.getCounter(), "COUNTER 2")

// --------------------------------------------------------------------------------------------

// Access Modifiers  OR  Class Modifiers

// class User{
//     private name: string;
//     private age: number;
//     private email: string;

//     constructor(name:string, age:number, email: string){
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }

//     public getName(){
//         return this.name
//     }

//     getAge(){
//         return this.age
//     }

//     setName(name:string){
//         this.name = name
//     }

//     public setAge(age:number){
//         this.age= age
//     }
// }

// const user1 = new User("Alice", 24, "alice@mail.com")

// console.log(user1.getName())
// console.log(user1.getAge())

// user1.setName("Bob")
// user1.setAge(28)

// console.log(user1.getName())
// console.log(user1.getAge())

// --------------------------------------------------------------------------------------------

// Static Functions

// class User{
//     private name: string;
//     private age: number;
//     private email: string;

//     constructor(name:string, age:number, email: string){
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }

//     static getAge(age: number){
//         return age >18
//     }
// }

// console.log(User.getAge(25))

// --------------------------------------------------------------------------------------------

// Static Properties

// class User{
//     name: string;
//     static totalUsers: number = 0

//     constructor(name: string){
//         this.name = name;
//         User.totalUsers++
//     }

//     getName(){
//         return this.name
//     }

//     static getTotalUsers(){
//         return User.totalUsers
//     }
// }

// console.log(User.totalUsers)

// const user1 = new User("Alice")
// console.log(user1.getName())
// console.log(User.getTotalUsers())

// const user2 = new User("Bob")
// console.log(user2.getName())
// console.log(User.getTotalUsers())

// --------------------------------------------------------------------------------------------


