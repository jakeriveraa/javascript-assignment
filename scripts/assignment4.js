function convertToFahrenheit() {
    let c = prompt("Enter Celsius:");
    let f = (c * 9 / 5) + 32;
    document.getElementById("result").innerText = c + "°C = " + f + "°F";
}

function convertToCelsius() {
    let f = prompt("Enter Fahrenheit:");
    let c = (f - 32) * 5 / 9;
    document.getElementById("result").innerText = f + "°F = " + c + "°C";
}

function generateTable() {
    let table = document.getElementById("tempTable");
    for (let i = 0; i <= 100; i += 10) {
        let f = (i * 9 / 5) + 32;
        table.innerHTML += `
            <tr>
                <td>${i}</td>
                <td>${f}</td>
            </tr>
        `;
    }
}
