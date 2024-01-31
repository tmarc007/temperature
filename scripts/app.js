function celToFa(){
    let temperature=prompt("Enter your temperature:");
    let fahrenheit=(temperature * 9/5) + 32;
    document.getElementById("temp").innerHTML=fahrenheit;
}


// function convertTemp(){
//     let tempType=prompt("Enter C for Celsius or F for Farhenheit conversion: ");
    

//     if(temperature1=="C") prompt("Enter your Celsius temperature:");
//     if(temperature1=="F") prompt("Enter your Fahrenheit temperature:");
//     let fahrenheit=(temperature1 * 9/5) + 32;
//     document.getElementById("temp").innerHTML=fahrenheit;
//     let celsius=(temperature1 - 32) * 5/9;
//     document.getElementById("temp1").innerHTML=celsius;
// }


function convertTemp() {
    let tempType = prompt("Enter C for Celsius or F for Fahrenheit conversion: ");

    let tempValue = Number(prompt("Enter the numeric temperature value:"));

    if (tempType === "C") {
        let fahrenheit = (tempValue * 9/5) + 32;
        document.getElementById("temp").innerHTML = fahrenheit.toFixed(2) + "°F";
    } else if (tempType === "F") {
        let celsius = (tempValue - 32) * 5/9;
        document.getElementById("temp1").innerHTML = celsius.toFixed(2) + "°C";
    } else {
        alert("Invalid input. Please enter CAPITAL LETTER 'C' or 'F'.");
    }
}




