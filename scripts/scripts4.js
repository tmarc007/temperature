// diplays numbers by 2 up to 12 and then stops
let number=0;
while (number<=12){
    console.log(number);
    number=number+2;
}

// display numbers from 10 to 100; 10 by 10
// While Loop
// While the condion is (number 10 <= 100, then increase)
let number1=10;
// for while - first instance of console.log is not necessay to my the prg run. its just to explain the type of loop.
console.log("-- while loop --");
while (number1<=100){
    console.log(number1);
    number1=number1+10;
}
//------------------

//Do loop. Unlike the while-loops. Here we execute first and then compare/calculate. 
let number2=0;
// for do - first instance of console.log is not necessay to my the prg run. its just to explain the type of loop.
console.log("-- do loop --");
do{
    console.log(number2);
    number2=number2+10;
}while(number2<=100);
//------------

// for loop - first instance of console.log is not necessay to my the prg run. its just to explain the type of loop.
console.log("-- for loop --");

for(let i=10; i<=100; i+=10){
    console.log(i);
}
//------------

let myArray = ["Andrew","John","Tom","Zac"];

for(let i=0;i<myArray.length;i++){
    document.write(`
        <p>${myArray[i]} </p>
    `);
}

// fizz buzz exercise: Hints: use module, if, loop
// function fizzBuzz() {
function fizzBuzz() {
    for (let i = 0; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("Fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();
//--------------
// from 1 to 10; the result of multiply by 3
//1 x 3 = 3
//2 x 3 = 6
//3 x 3 = 9

//1. loop from 1 to 10
for(let i=1; i<=10; i++){
//2. display the i
//3. multiply i *3
    document.write(`<p>${i} x 3 = ${i*3}</p>`);
}
//4. improve the presentation of the result

function multiply(number,msg){
    document.write(`--- ${msg} --- ${number}`);
    for(let i=1; i<=10; i++){
        document.write(`<p>${i} x ${number} = ${i*number}</p>`);
    }
}

multiply(1,"Multi");
multiply(2,"Multiply");