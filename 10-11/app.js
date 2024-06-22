// let a = prompt("Enter your current city")
//     if (a == "karachi") {
//         document.write ("Welcome to light of city")
//     }
//     else {
//        alert("Thank you for visting and show your current city of loction") 
//     }







// let a = prompt("Enter your gender");
//     if (a == "male" || a == "Male") {
//         document.write("Good Morning Sir");
//     } 
//     else if (a == "female" || a == "Female") {
//         document.write("Good Morning Ma'am");
//     }
//     else {
//         alert("Thank you for visiting and show your gender");
//     }











// var signalLight = prompt("Must stop", "Enter the signal light color according to required statement")
// if (signalLight == "Red" || signalLight == "red") {
//     document.write("correct" + "<br/>");
// }
// else {
//     document.write ("False" + "<br/>")
// }

// var signalLight = prompt("Ready to move", "Enter the signal light color according to required statement")
// if (signalLight == "Yellow" || signalLight == "yellow") {
//     document.write("correct" + "<br/>")
// }
// else {
//     document.write ("False" + "<br/>")
// }

// var signalLight = prompt("Move now", "Enter the signal light color according to required statement")
// if (signalLight == "Green" ||signalLight == "green") {
//     document.write("correct" + "<br/>")
// }
// else {
//     document.write ("False" + "<br/>")
// }










// let fuel = +prompt("Enter remaining fuel in car", "in litres");
// if (fuel < 0.25) {
//     document.write("Please refill the fuel in the car");
// }
// else {
//     document.write("okey it has enough fuel in the car");
// }










// document.write("<h1>Marks Sheet</h1>");

// let a = 300;
// let b = +prompt("Obtained marks");
// let c = b/a*100;
// var d = "Total marks : " + a + "<br/>" + "Obtained marks : " + b + "<br/>" + "Percentage : " + c + "%" + "<br/>";

// if (c >= 80 && c <= 100) {
//     document.write(`${d}Grade :  A-one <br/> Remarks : Excellent <br/>`);
//     alert ("Congratulation you got top marks");
// }

// else if (c >= 70 && c < 80) {
//     document.write(`${d}Grade : A<br/> Remarks :  Good <br/>`);
//     alert ("Congratulation you got good marks");
// }

// else if (c >= 60 && c < 70) {
//     document.write(`${d}Grade : B<br/> Remarks :  You need to improve<br/>`);
//     alert ("Congratulation you passed");
// }

// else if (c >= 0 && c < 60) {
//     document.write(`${d}Grade : Fail<br/> Remarks :  Sorry<br/>`);
//     alert ("Sorry you failed");
// }

// else {
//     alert("Please enter valid marks");
//     document.write("ERROR!!!" + "<br/>");
// }







// document.write("<h1>Guess Game</h1>");
// let a = +prompt("Enter a number", "between 1 to 10");
// if (a === 6) {
//     document.write("Bingo! \n  Correct answer");
// }
// else if (a === 3 || a === 9) {
//     document.write("The number is divisible by 3");    
// }
// else if (a > 0 && a < 6) {
//     document.write("Close enough to the correct answer");
// }
// else if (a > 6 && a <= 10) {
//     document.write("Close enough to the correct answer");
// }
// else {
//     document.write("Try again");
// }








var a = +prompt("Enter a number", "To check whether a number is Even or odd");
if (a === a * 2) {
    document.write("The number " + a + " is Even");
}
else {
    document.write("The number " + a + " is Odd");
}


