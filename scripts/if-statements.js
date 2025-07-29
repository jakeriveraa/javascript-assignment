console.log("conditionals");

// if-statement (condition= y/n?)
// if(condition){
// code to be executed if condition is true
//}

if(3>5){
    console.log("this is true")
}

let student1 = 45;
let student2 = 45;

if(student1 == student2){
    console.log("the values are the same")
}

// Case 1: 5 == 5 -> true
// Case 2: 5 == "5" -> true because == compares the values
// Case 3: 5 === "5" -> false becasue === compares the value and datatype

// if-else statement
// if(condition){
// code to be executed if condition is true
//}else{
// code to be executed if condition is false
//}


let waterTemp = 105;

if(waterTemp>= 100){
    console.log("the water is boiling");
}else{
    console.log("the water is not boiling");
}



//challenge 1:
// check if the age is greater than 21
// T: display "you are an adult"
// F: display "you are underage"

let age = 18;

if(age>= 21){
    console.log("you are adult");
}else{
    console.log("you are underage");
}

// else-if statement
// if(condition){
// code to be executed if condition is true
//}else{
// code to be executed if condition is false
//}

function ageCalculator(){
    let age = prompt("enter the age:");

    if(age<13){
        console.log("you are a child");
    }else if(age<21){
        console.log("you are a teenager");
    }else if(age<64){
        console.log("you are an adult");
    }else{
    console.log("you are a senior");        
    }
}

// challenge 2: 

// Scenario:
// You're designing a tiny system for self-driving bikes.
// Instructions:
// Ask for the traffic light color 
// ("green", "yellow", or "red") and tell the 
// bike what to do (Go!, Slow down, stop)

function traffic(){
    let light = prompt("enter a color");

    if(light == "green"){
        console.log("go!");
    }else if(light == "yellow"){
        console.log("slow down");
    }else if(light == "red"){
        console.log("stop");
    }else{
        console.log("Unknown light color. Please proceed with caution.");
    }

}

function ticketPriceCalculator(){
    let age = prompt("enter your age");
    let price = 0;

    if(age<12){
        price=5
    }else if(age>18){
        price=8;
    }else if(age>18){
        price=10;
    }
    
    return "your ticket price is" + price;

    document.getElementById("results").innerHTML="your ticket price is " + price;
    }

    function weatherOutfit(){
        let tmp = prompt("enter the temperature")
        let outfit="";
        let p = document.getElementById("results");

        if(tmp<15){
            outfit="jacket";
        }else if(tmp<25){
            outfit="sweater";
        }else{
            outfit="t-shirt";
        }
        p.innerHTML="you should wear: " + outfit;
    }

    // Switch-case
    // use it for checking one single variablle or expression

    let action = prompt("choose an action: jump, run, attack, or defense");

    switch(action){
        case "jump":jump
            console.log("you are jumped over a obj");
            break;
        case "run":
            console.log("you are running");
            break;
        case "attack":
            console.log("you are attacking");
            break;
        case "defense":
            console.log("you blocked an attack");
            break;
        default:
            console.log("unknown action, try again");

    }