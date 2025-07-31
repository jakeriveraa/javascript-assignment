console.log("assignments")

function convertTemperature() {
  let temp = prompt("Enter Celsius temperature:");
  
  if (temp) {
    let fahrenheit = (temp * 9/5) + 32;
    document.getElementById("result").innerHTML +=
      `<li class="item">The conversion is: ${temp}°C = ${fahrenheit}°F</li>`;
  }
}