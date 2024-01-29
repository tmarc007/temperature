//functions
let counter = 0;

//1. creating the function
function increase(){
    counter++;
    console.log(counter);
}

function decrease(){
    counter--;
    console.log(counter);
}
//2)call/run/execute the function

function sayHi(){
    let userName=prompt("Enter your name:");

    console.log("Welcome ... " + userName);
}

// //old console version
// function multiByThree(){ 
//     //1. get the number from a prompt
//     let number= number(prompt("Enter the number: "));
//     console.log(number);
//     //2. multi the number by 3
//     let result=number*3;
//     //3. display the result on the console
//     console.log(result);
// }
function multiByThree(){
    //1. get the number from a prompt
    let number= Number(prompt("Enter the number: "));
    //2. multi the number by 3
    let result =number*3;
    //3. display the result on the console
    document.getElementById("total").innerHTML=result;
}

//create a function that adds up two numbers (get them from the prompt)
function addTwoNumbers(){
    let number1=prompt("Enter your first number");
    console.log(number1);
    let number2=prompt("Enter your second number");
    console.log(number2);
    let result=parseInt(number1) + parseInt(number2);
    console.log(result);
    document.getElementById("total").innerHTML=result;
}

// From a prompt convert Celsius to Fahrenheit
    //1. create function name and section
function convertC2F(){
    //2. create button in html (will reuse results section in html)
    //3. create prompt
    let number3= Number(prompt("Enter temperature in Celsius:"));
    //4. create a variable "temperature" that stores temp in °C and converts it to °F
    let result=number3 * 9/5 + 32;
    // If statements that show diff emojis depending on result
    
    //5. display the converted temperature under Results in HTML
    document.getElementById("total").innerHTML=result;
}
