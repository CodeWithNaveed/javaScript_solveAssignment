// const myArray = []; // Declare and initialize an empty multidimensional array (Array of arrays)
// const myArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(myArray);




// for (var i=1; i<=10; i++) {
//     document.write(i + "<br>");
// }



// var tablenumber = +prompt("Enter table number");
// var tableLength = +prompt("Enter table length");
// for (var i=1; i <= tableLength; i++) {
// document.write (`${tablenumber} x ${i} = ${tablenumber * i} <br>`)
// //     //                              --OR--
// // document.write (tablenumber + " x " + i + " = " + tablenumber * i + "</br>")
// }





// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var i=0; i<fruits.length; i++){
//     document.write(fruits[i] + "<br>");
// }







// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// document.write("<h2>Counting:</h2>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + "<br>");
// }
// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// document.write("<h2>Reverse counting:</h2>");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + "<br>");
// }
// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// document.write("<h2>Even:</h2>");
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i + "<br>");
// }
// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// document.write("<h2>Odd:</h2>");
// for (var i = 1; i <= 19; i += 2) {
//     document.write(i + "<br>");
// }
// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write("<h2>Series:</h2>");
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k" + "<br>");
// }







// var manu = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// var order = prompt("Welcome to Abbasi Bakery. What do you want to order sir/ma'am?");
// var indexNumber = manu.indexOf(order);
// var match = false

// for (i=0; i < manu.length; i++) {
//     if (order === manu[i]) {
//         var match = true;
//         alert(`${order} is available at index number ${indexNumber} in our bakery;`)
//         break;
//     }
// }
// if (match === false) {
//         alert(" We are sorry. " + order + " is not available in our bakery");
//     }





// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number");
// var c = +prompt("Enter third number");
// var d = +prompt("Enter fourth number");
// var e = +prompt("Enter fifth number");
// var arrayItems = [a , b, c, d, e];
// document.write("Array items: " + arrayItems + "<br>");
// var max = Math.max(a, b, c, d, e);
// document.write("Maximum number: " + max);

//              -------"OR"------

// const A = [24, 53, 78, 91, 12];
// let max = A[0];
// for(let i=1; i<A.length; i++){
//     if(A[i] > max){
//         max = A[i];
//     }
// }
// console.log(`The largest number in the array is: ${max}`);










// const A = [24, 53, 78, 91, 12];
// let min = A[0];
// for(let i=1; i<A.length; i++){
//     if(A[i] < min){
//         min = A[i];
//     }
// }
// console.log(`The smallest number in the array is: ${min}`);








// // Program to print multiples of 5 ranging 1 to 100
// for(let i=5; i<=100; i+=5){
//     console.log(i);
// }
