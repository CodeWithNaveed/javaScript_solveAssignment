// const firstName = prompt("Enter your first name:");
// const lastName = prompt("Enter your last name:");
// const fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "*");





// // Program to find the length of user input
// const mobileModel = prompt("Enter your favorite mobile phone model:");
// let length = mobileModel.length;
// alert(`The length of your input is: ${length}`);



// let country = prompt("Enter your country name:");
// let firstLetter = country.slice (0, 1);
// let capital = firstLetter.toUpperCase();
// let remainingLetters = country.slice(1);
// let small = remainingLetters.toLowerCase();
// let newCountry = capital + small;
// let n = ("n");
// let indexOf_N = country.indexOf(n);
// document.write("The index number of 'n' in " + newCountry + " is: " + indexOf_N);






// let word = "Hello World";
// let letter = "";
// let lastIndex = word.lastIndexOf(letter);
// document.write("The last index of last letter in " + word + " is: " + lastIndex);





// let country = prompt("Enter your country name:");
// let firstLetter = country.slice (0, 1);
// let capital = firstLetter.toUpperCase();
// let remainingLetters = country.slice(1);
// let small = remainingLetters.toLowerCase();
// let newCountry = capital + small;
// let n = (country[2]);
// let indexOf_N = country.indexOf(n);
// document.write("The index number of " + country[2] + " in " + newCountry + " is: " + indexOf_N);





// --------------By Concat Method--------------------------------
// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName + " " + lastName;
// alert("Hello, " + fullName);
// ---------------"OR"-----without concat method-----------------
// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = `${firstName} ${lastName}`;
// alert(`Hello, ${fullName}`);






// let name = "Hyderabad";
// document.write(name + "</br>");
// let result = name.replace("Hyder", "Islam");
// document.write(result);






// Replace all occurrences of "and" with "&"
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var result = message.replace(/and/g, "&");
// document.write(result);





// var value1="472";
// var typeString=typeof value1;
// document.write(value1 + "<br>");
// document.write(typeString + "<br>");
// var value2="472";
// var integer = parseInt(value2);
// var typeInteger=typeof integer;
// document.write(integer+ "<br>");
// document.write(typeInteger + "<br>");





// var userName1 = prompt("Enter your name:");
// var capital = userName1.toUpperCase();
// document.write(capital);

 



// var userInput = prompt("Enter user input:");
// var firstLetter = userInput.slice(0, 1);
// var capital = firstLetter.toUpperCase();
// var smallLetter = userInput.slice(1)
// var remaining = smallLetter.toLowerCase();
// var newUserInput = capital + remaining
// document.write ("Title case: " + newUserInput)



// let number = 35.36
// let result = number.toString();
// result = result.replace(".", "");
// let type = typeof result;
// document.write(result + "<br>");
// document.write(type);








// let userName = prompt("Enter your username:");
// let specialSymbols = /[@.,!]/;
// while(specialSymbols.test(userName)) {
//     let invalidSymbol = userName.match(specialSymbols);
//     alert(`'${invalidSymbol}' is an invalid symbol. Please enter a valid username.`);
//     userName = prompt("Enter your username:");
// }
// console.log(`Valid username entered: ${userName}`);

//              --------"OR"-----------

// var userName = prompt ("Enter your user name", "don't use special symbol [@ . , !]");
// var specialSymbol = ["@", "." ,  "," , "!"];
// var match = false;
// for (var i=0; i<specialSymbol.length; i++){
//     if (userName == specialSymbol[i]) {
//         var match = true;
//         alert ("don't use special symbol " + specialSymbol[i]);
//         break;
//     }
// }
// if ( match === false) {
//     document.write ("your user name is " + userName)
// }









// const arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// const searchItem = () => {
//   const item = prompt("Enter an item to search: ").toLowerCase();
//   const found = arr.some(str => str.toLowerCase() === item);
//   if (found) {
//     alert(`${item} is available in the list.`);
//   } else {
//     alert(`${item} is not available in the list.`);
//   }
// };
// searchItem();

//              -------"OR"--------

// const listItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// listItems.push("tea");
// const demand = prompt("Welcome to ABBASI Bakery. What do you want to order sir/ma'am?").toLowerCase();
// let position = listItems.indexOf(demand);
// listItems.push("tea");
// if (listItems[position] === demand) {
//   alert(demand + " is available in our list."+" at index " + position);
// } 
// else {
//   alert(demand + " is not available in our list.");
// }










// const validatePassword = () => {
//   let password;
// do {
//   password = prompt("Enter a password (at least 6 characters, contains both letters and numbers, cannot start with a number):");
//   if (password.length < 6 || !/[a-zA-Z0-9]/.test(password) || /^\d/.test(password)) {
//     alert("Invalid password. Please enter a valid password.");
//   }
// } while (password.length < 6 || !/[a-zA-Z0-9]/.test(password) || /^\d/.test(password));
// alert(`Valid password entered: ${password}`);
// };
// validatePassword();

//               --------"OR"-------- 

// var specialSymbol = ["@","$","-","=","+","#","*"];
// var inputPassword = prompt("Enter Password, don't use " + specialSymbol)
// function validatePasswordInput(password, invalidSymbols) {
//   const invalidSymbol = invalidSymbols[0];
//   if (password.includes(invalidSymbol) || password.match(/^\d/)) {
//     alert("Invalid password. Please enter a valid password.");
//   } else {
//     alert(`Valid password entered: ${password}`);
//   }
// }
// validatePasswordInput(inputPassword, specialSymbol);






// var university = "University of Karachi";
// var universityArray = university.split("");
// console.log(universityArray);
// for (var i=0; i< universityArray.length; i++) {
//     document.write(universityArray[i] + "<br>");
// }




// var str = "The quick brown fox jumps over the lazy dog";
// var word = "the";
// var count = count.;
// var index = str.indexOf(word);
// while (index != -1) {
//     count++;
//     index = str.indexOf(word, index + 1);
// }
// console.log(word + " occurs " + count + " times in the given string.");

