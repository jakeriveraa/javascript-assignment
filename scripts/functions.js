console.log("functions.html")

//1. function declaration (creating functrion)
function sayhello(){
    // body of the fn
    console.log("hello world")
}

//2. Call/run/execute/trigger the function (code, console, user)


//Example 1 with 2 parameters
function greet(name,name2="Someone"){
    console.log("Hello " + name + " and " + name2);
}

greet("Raggie");
greet("Elliot","Mike");

function doubleNumber(number){
    let total = number*2;
    console.log(total);
}
doubleNumber(2);//4
doubleNumber(4);//8
doubleNumber(6);//12

//Example 2, with promt

function welcome(){
    let name = prompt("enter your name");
    let age = prompt("enter your age");

    console.log("welcome" + name + " the age is " + age);
}

// Example 3, with default parameters

function add(num1=0,num2=0){
    let total = num1 + num2;
    console.log("the total is " + total
    )
}
add(5,5);
add(6,2);
add(2,7);
add();

function combineNames(firstname="unknown ",lastname="unknown "){
    let = firstname + lastname;
    console.log(`${firstname}  ${lastname}`)
}
combineNames("alice","johnson");//alice johnson
combineNames("alice")

function convertToSeconds(){
    let minutes = prompt("Enter the minutes");
    document.getElementById("result").innerHTML += `<li class="item">The conversion is: ${60*minutes}s</li>`;
}


function convertToCelcius(){
   let fahrenheit = prompt("Enter the temperature in Fahrenheit");
   let celsius = (fahrenheit - 32)
   document.getElementById("temp").innerHTML+=
    `<li class="item">The conversion is: ${celsius}c</li>`;
    

}
