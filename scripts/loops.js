console.log("loops")

// new version of act 1
/*document.write("<h2>Table of 8</h2>");
const num = 8;
let result = 0;

for(let i=0;i<=10;i++){
    result = num*i;
    document.write(`<p> ${num} x ${i} = ${result}</p>`);
}

// FOR LOOP
// for(start_point; condition ; interval)
for(let i=0; i<4;i++){
    document.write("My for is working?" + i);
}

for(let i=1; i<=10; i++){
    document.write(`<P>${i}</p>`)
}
document.write("<h2>Activity 4 </h2>");
for(let i=2;i<=21;i+=2){
    document.write(`<p>${i}</P>`);
}

// WHILE LOOP
let i = 0; // start point

while(i<=10){ //stop condition
    console.log(i);
    i++; // increment
}

// DO-WHILE LOOP 
let j =10; // start point
do{
    console.log(j);
    j++ // incriment
}while(j<5) // stop condition*/

function fillThermo(){
    let thermometer = document.getElementById("thermometer");

    for(let i=0;i<10; i++){
        let level = document.createElement("div");
        level.classList.add("level");
        if(i < 3){
            level.style.backgroundColor = "blue"; // cold
        }else if(i<7){
            level.style.backgroundColor = "orange"; // warm
        }else{
             level.style.backgroundColor = "red"; // hot
        }
        thermometer.appendChild(level);
    }
}

function generateTable(){
    let tbody = document.getElementById("tempTable");
    for(let i=0;i<10; i++){

        tbody.innerHTML += `<tr>
            <td> ${i} </td>
            <td> results </td>
        </tr>`

    }
}