// function currentTime() {
//     const newDate = new Date ()
//     console.log(newDate)
// }
// currentTime();



// const name1 = prompt("Enter first name")
// const name2 = prompt("Enter last name")
// function userName (firstName,lastName) {
//  return firstName +" "+ lastName 
// }
// const fullName = userName(name1,name2).toUpperCase()
// console.log (fullName)



// const Number1 = +prompt("Enter first Number")
// const Number2 = +prompt("Enter last Number")
// function userNumber (firstNumber,lastNumber) {
//  return firstNumber + lastNumber 
// }
// const fullNumber = userNumber(Number1,Number2)
// console.log (fullNumber)



// let number1 = +prompt("Enter first number")
// let number2 = +prompt("Enter second number")
// function calculator (num1,num2,operator) {
//     let equal = num1 + num2;
//     return alert(equal)
// }
// calculator(number1,number2)



// function calculate() {
//     let num1 = parseFloat(prompt("Enter the first number:"));
//     let num2 = parseFloat(prompt("Enter the second number:"));
    // let operator = prompt("Enter the operator (+, -, *, /):");
//     let result;
//     switch(operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             if (num2 !== 0) {
//                 result = num1 / num2;
//             } else {
//                 result = "Cannot divide by zero";
//             }
//             break;
//         default:
//             result = "Invalid operator";
//     }
//     document.write("Result: " + result);
// }
// calculate();




// const number = +prompt("Enter number")
// function square(value){
//     return value * value
// }
// alert(square(number))



// const number = +prompt("Enter number")
// function factorial(value) {
//     let result = 1;
//     for (let i = value; i > 0; i--) {
//         result *= i;
//     }
//     return alert(result);
// }
// factorial(number)



// function range(start, end) {
//     let result = [];
//     for (let i = start; i <= end; i++) {
//         result.push(i);
//     }
//     return result;
// }
// console.log(range(1, 5))



// const num1= +prompt("Enter number","Base")
// const num2= +prompt("Enter number","Perpendicular")
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(value) {
//         return value * value
//     }
//     return alert(`The value of Hypotenuse ${Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular))}`);
// }
// calculateHypotenuse(num1, num2)



// const num1= +prompt("Enter number","Width")
// const num2= +prompt("Enter number","Height")
// function areaOFRectangular (value1,value2){
//     function formula(width,height){
//         return width * height
//     }
//     return formula(value1,value2)
// }
// alert(`The calculated Area of Rectangular is ${areaOFRectangular(num1,num2)}`)
// alert(`The standard area of rectanguler is ${areaOFRectangular(1,1)}`)



// const userInput = prompt("Enter word to check it that. It is palinfrome or not")
// function palindrome (check){
//     let revStr = check.split('').reverse().join(''); 
//     if (check == revStr){
//         alert ("yes! This is palindrome word")
//     }
//     else {
//         alert("sorry to say. This word is not palindorme.")
//     }
// }
// palindrome(userInput)



// const userInput = prompt("Enter word");
// const displayWord = userInput.slice(0,1).toUpperCase() + userInput.slice(1).toLowerCase()
// function inputWord(word) {
//     return alert(word)
// }
// inputWord(displayWord)



// function longestWord(str) {
//     let words = str.split(' ');
//     let longestWord = '';
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     alert(`The longest word in the string is ${longestWord}`);
// }



// function countLetterOccurrences(str, letter) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countLetterOccurrences('JSResourceS.com', 'o')); 



// const value = +prompt("Enter radius")
// function circumferenceOfCircle(circumference){
//     return alert (`The circumference of circle is ${2*3.142*circumference}`)
// }
// function AreaOfCircle(area){
//     return alert (`The Area of circle is ${3.142*area*area}`)
// }

// circumferenceOfCircle(value)
// AreaOfCircle(value)