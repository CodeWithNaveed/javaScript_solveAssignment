function checkEvenOrOdd(num) {
    if (num % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

var number = +prompt("Enter a number", "To check whether a number is Even or odd");
document.write("The number " + number + " is " + checkEvenOrOdd(number));
