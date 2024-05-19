// const currentDate = new Date();
// document.write(currentDate);





// const currentDate = new Date();
// const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
// ];
// const currentMonth = monthNames[currentDate.getMonth()];
// alert("Current Month: " + currentMonth);



// const currentDate = new Date();
// const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// const currentDay = dayNames[currentDate.getDay()];
// const modifiedDay = currentDay.slice(0, 1).toUpperCase()+ currentDay.slice(1).toLowerCase()
// --->>// const modifiedDay = currentDay.charAt(0).toUpperCase() + currentDay.slice(1).toLowerCase();
// alert("Today is " + modifiedDay);


// const currentDate = new Date();
// const currentDay = currentDate.getDay();
// const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

// if (currentDay === 0 || currentDay === 6) {
//     alert("It's Fun day");
// }
// else {
//     alert(6-currentDay + " days are remaining")
// }


// const currentDate = new Date();
// const currentDayOfMonth = currentDate.getDate();

// if (currentDayOfMonth < 16) {
//     console.log("First fifteen days of the month");
// } else {
//     console.log("Last days of the month");
// }


// const currentDate = new Date();
// const minutesSinceEpoch = Math.floor((currentDate.getTime() - new Date(currentDate.getFullYear(), 0, 1).getTime()) / 60000);
// document.write(minutesSinceEpoch);


// const currentDate = new Date();
// const currentHour = currentDate.getHours();

// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }



// const laterDate = new Date(2020, 11, 31);
// document.write("Later date: " + laterDate);


// const ramadanStart = new Date(2015, 5, 18);
// const currentDate = new Date();
// const daysPastSinceRamadan = Math.floor((currentDate.getTime() - ramadanStart.getTime()) / (1000 * 60 * 60 * 24));
// alert(`Days past since 1st Ramadan: ${daysPastSinceRamadan}`);



// const referenceDate = new Date(2015, 0, 1);
// const currentDate = new Date();
// const secondsPastSinceReference = Math.floor((currentDate.getTime() - referenceDate.getTime()) / 1000);
// document.write(`Seconds past since reference date: ${secondsPastSinceReference}`);


// const currentTime = new Date();
// const currentHour = currentTime.getHours();
// currentTime.setHours(currentHour + 1);
// document.write(currentTime);



// const currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert(`Date 100 years back: ${currentDate}`);



// const userInputAge = Number(prompt("Please enter your age: "));
// const birthYear = new Date().getFullYear() - userInputAge;
// document.write(`Your birth year is ${birthYear}`);



// var age = +prompt("Please enter your age: ");
// var date = new Date();
// var currentYear = date.getFullYear();
// var birthYear = currentYear - age;
// alert (`Your birth year is ${birthYear}`)



// function generateBill() {
//     var customerName = prompt("Please enter your customer name: ");
//     var currentMonth = prompt("Please enter the current month: ");
//     var units = Number(prompt("Please enter the number of units: "));
//     var chargesPerUnit = Number(prompt("Please enter the charges per unit: "));
//     var netAmountPayable = (units * chargesPerUnit).toFixed(2);
//     var latePaymentSurcharge = (netAmountPayable * 0.05).toFixed(2);
//     var grossAmountPayable = (parseFloat(netAmountPayable) + parseFloat(latePaymentSurcharge)).toFixed(2);

//     document.write(`
//     Customer Name: ${customerName}<br>
//     Current Month: ${currentMonth}<br>
//     Number of units: ${units}<br>
//     Charges per unit: ${chargesPerUnit}<br>
//     Net Amount Payable (within Due Date): ${netAmountPayable}<br>
//     Late Payment Surcharge: ${latePaymentSurcharge}<br>
//     Gross Amount Payable (after Due Date): ${grossAmountPayable}<br>
//     `);
// }

// generateBill();
