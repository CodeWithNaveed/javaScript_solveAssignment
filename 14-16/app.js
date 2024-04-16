// var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

// for (var j = 0; j < qualification.length; j++) {
//     document.write((j+1) + ") " + qualification[j] + "<br>");
// }



// document.write("<h1>Qualifications:</h1>");
// var totalMarks = 500;
// var nameOfStudents = ["Ahmed", "Ali", "Kamran", "Noman", "Hassan"];
// var obtainedMarks = [320, 230, 480, 120, 170];
// var percentage = [320/500*100, 230/500*100, 480/500*100, 120/500*100, 170/500*100]; 
// document.write (`Score of ${nameOfStudents[0]} is ${obtainedMarks[0]} and percentage is ${percentage[0]}%<br>`);
// document.write (`Score of ${nameOfStudents[1]} is ${obtainedMarks[1]} and percentage is ${percentage[1]}%<br>`);
// document.write (`Score of ${nameOfStudents[2]} is ${obtainedMarks[2]} and percentage is ${percentage[2]}%<br>`);
// document.write (`Score of ${nameOfStudents[3]} is ${obtainedMarks[3]} and percentage is ${percentage[3]}%<br>`);
// document.write (`Score of ${nameOfStudents[4]} is ${obtainedMarks[4]} and percentage is ${percentage[4]}%<br>`);




// var colorsName = ["Red", "Green", "Blue"];
// document.write(colorsName +" ==> first list " + "<br>");
// var a = prompt("Enter your favourite color in beginning of the list");
// colorsName.unshift(a);
// document.write(colorsName +" ==> unshift " + "<br>");
// var b = prompt("Enter your favourite color in end of the list");
// colorsName.push(b);
// document.write(colorsName +" ==> push " + "<br>");
// var c = prompt("Enter your one more favourite color in beginning of the list");
// colorsName.unshift(c);
// document.write(colorsName +" ==> unshift one more time " + "<br>");
// colorsName.shift();
// document.write(colorsName +" ==> shift " + "<br>");
// colorsName.pop();
// document.write(colorsName +" ==> pop " + "<br>");
// var indexNumber = +prompt("Enter index number");
// var lengthNumber = +prompt("Enter length number");
// var favouriteColor = prompt("Enter your favourite color in desired position");
// colorsName.splice(indexNumber, lengthNumber, favouriteColor);
// document.write(colorsName +" ==> splice " + "<br>");




// var citiesList = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
// var selectedCitiesList = citiesList.slice(3,5);
// document.write (selectedCitiesList + "<br>");
// citiesList.push("multan");
// document.write(citiesList + "<br>");
// citiesList.shift();
// document.write(citiesList + "<br>");
// citiesList.pop();
// document.write(citiesList + "<br>");
// citiesList.unshift();
// document.write(citiesList + "<br>");
// citiesList.splice (0,2 , "faisalabad");
// document.write(citiesList);







// // storing student scores in an array
// var studentScores = [89, 68, 75, 92, 78, 86, 95, 80];
// document.write("Scores of Students: " + studentScores + "<br>");

// // sorting the array in ascending order using Array's sort method
// studentScores.sort(function(a, b){
//     return a-b;
// });

// // displaying the sorted array
// document.write("Scores in ascending order: ");
// for(var i=0; i<studentScores.length; i++){
//     document.write(studentScores[i] + " ");
// }
// document.write("<br>");

// // // /// /////// //// --------------------------------OR------------------\\\\\ \\\\\ \\\\ \\\  \\\ \\

// // storing student scores in an array
// var studentScores = [89, 68, 75, 92, 78, 86, 95, 80];
// document.write("Scores of Students: " + studentScores + "<br>");

// // sorting the array in ascending order using Array's sort method
// studentScores.sort((a, b) => a - b);

// // displaying the sorted array
// document.write("Scores in ascending order: ");
// for(var i=0; i<studentScores.length; i++){
//     document.write(studentScores[i] + " ");
// }
// document.write("<br>");








// var arr = ["This  ", " is  ", " my  ", " cat"];
// var result = arr.join("");
// document.write(result);








// // FIFO Array
// var fifoArray = [];
// fifoArray.push("Value 1");
// fifoArray.push("Value 2");
// fifoArray.push("Value 3");
// fifoArray.push("Value 4");
// console.log(fifoArray[0]); // Output: Value 1
// fifoArray.shift(); // Remove first value
// console.log(fifoArray); // Output: ["Value 2", "Value 3", "Value 4"]



// // LIFO Array (Last In First Out)
// var lifoArray = [];
// lifoArray.unshift("Value 1");
// lifoArray.unshift("Value 2");
// lifoArray.unshift("Value 3");
// lifoArray.unshift("Value 4");
// console.log(lifoArray); // Output: ["Value 4", "Value 3", "Value 2", "Value 1"]
// console.log(lifoArray.pop()); // Output: Value 1
// console.log(lifoArray); // Output: ["Value 4", "Value 3", "Value 2"]







// // Dropdown menu using document.write()
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// document.write("<option selected disabled>Select Manufacturer</option>");
// for(var i = 0; i < manufacturers.length; i++) {
//     document.write("<option>" + manufacturers[i] + "</option>");
// }
// document.write("</select>");







// var arr = ['This ', ' is ', ' my ', ' cat'];
// document.write(arr.join(''));
// document.write(arr)







// // storing student scores in an array
// var studentScores = [89, 68, 75, 92, 78, 86, 95, 80];
// // sorting the array in ascending order using Array's sort method
// studentScores.sort((a, b) => a - b);
// // displaying the sorted array
// document.write("Scores in ascending order:");
// for(var i=0; i<studentScores.length; i++){
//     document.write("</br> " + studentScores[i]);
// }








// // Creating a new array to store values in FIFO manner
// var fifoArray = [];
// fifoArray.push("Value 1"); // Storing value one by one
// fifoArray.push("Value 2");
// fifoArray.push("Value 3");
// fifoArray.push("Value 4"); // Accessing the values in the order in which they were stored
// console.log(fifoArray[0]); // Output: Value 1
// fifoArray.shift(); // Removing the first value
// console.log(fifoArray[0]); // Output: Value 2








// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
//  for(var i=0; i < manufacturers.length; i++) {
//     document.write("<option>" + manufacturers[i] + "</option>");
//  }
// document.write("</select>");