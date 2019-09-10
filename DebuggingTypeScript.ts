//1
var myString: string;

myString = "Bee stinger";
//9 is passed as a num which is not accepted. put quotation marks to pass as a string
myString = "9";

//2
function sayHello(name: string){
    return `Hello, ${name}!`;
 }

 console.log(sayHello("Kermit"));
//same solution as the first problem
 console.log(sayHello("9"));


 //3
 function fullName(firstName: string, lastName: string, middleName?: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 console.log(fullName("Jimbo", "Jones",));
//add a ? to the middle name so it is an optional parameter

//4
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));
 //was not working because jay had belts defined as belt

 //5
 class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 const shane = new Ninja("Alan", "Turing");
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
 }
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(shane));

 //6
 var increment = (x: any) => x + 1;
// This works great:
console.log(increment(3));
var square = (x: any) => x * x;
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x :any,y : any) => x * y;
// Nor is this working:
var math = (x:any, y:any) => {  
   let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference];
}
//Answer: Several sets of parenthesis needed to be added as well as declaing variable type, along with a set of curly braces...while also removing a set of curly braces.


//7

class Elephant {
    constructor(public age: number){}
    birthday = () => function(){
       this.age++;
    }
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday(), 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
