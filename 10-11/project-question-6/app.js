document.write("<h1>Guess Game</h1>");
let a = +prompt("Enter a number", "between 1 to 10");
if (a === 6) {
    document.write("Bingo! \n  Correct answer");
}
else if (a === 3 || a === 9) {
    document.write("The number is divisible by 3");    
}
else if (a > 0 && a < 6) {
    document.write("Close enough to the correct answer");
}
else if (a > 6 && a <= 10) {
    document.write("Close enough to the correct answer");
}
else {
    document.write("Try again");
}
