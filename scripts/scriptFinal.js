function convertTemp() {
    let startCelsius = Number(document.getElementById("startTemp").value);
    let endCelsius = Number(document.getElementById("endTemp").value);
    let resultTable = document.getElementById("resultTable");
    resultTable.innerHTML = "";

    for (let c = startCelsius; c <= endCelsius; c++) {
        let fahrenheit = (c * 9 / 5) + 32;
        let row = `<tr><td>${c}°C</td><td>${fahrenheit.toFixed(2)}°F</td></tr>`;
        resultTable.innerHTML += row;
    }
}