//--------------Q.1-------------------
document.write("<br/><br/><br/><br/><br/>");
document.write("<hr/> ");

var a = 10;

document.write(`The value of a is ${a} `);
document.write("<br/>------------------------<br/>");


document.write("The value of ++a is " + ++a);
document.write("<br/>Now the value of a is " + a);

document.write("<br/><br/>The value of ++a is " + a++);
document.write("<br/>Now the value of a is " + a);

document.write("<br/><br/>The value of --a is " + --a);
document.write("<br/>Now the value of a is " + a);

document.write("<br/><br/>The value of a-- is " + a--);
document.write("<br/>Now the value of a is " + a);

//--------------Q.2-------------------

document.write("<br/><br/><br/><br/><br/>");
document.write("<hr/> ");

var c = 2;
var d = 1;  
document.write(`a is ${c} <br/> b is ${d} <br/>`);
var result = --c - --d + ++d + d--;
document.write("result is " + result)

//--------------Q.3-------------------

document.write("<br/><br/><br/><br/><br/>");
document.write("<hr/> ");

var name = prompt("Enter your name (press Enter to naveed)", "naveed") || "";
if(name !== ""){
    document.write(`Hello ${name}! <br/>`)
}


//--------------Q.4-------------------

document.write("<br/><br/><br/><br/><br/>");
document.write("<hr/> ");


var number = prompt("Enter a number (press Enter for 5)") || 5;
document.write(`Multiplication table of ${number} <br/><br/>`)

for(var i=1; i <= 10; i++){
    document.write(`${number} x ${i} = ${number*i} <br/>`);
}


//--------------Q.5-------------------
document.write("<br/><br/><br/><br/><br/>");
document.write("<hr/> ");

document.write(`<table border="2" cellpadding="10" cellspacing="0">`)
document.write(`<tr><th>Subject</th><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th></tr>`)

var subjects = ["Maths", "Physics", "Chemistry", "English"]
var marksObtained = [, ,,]

for(var i=0; i < subjects.length; i++){
    var marks = parseInt(prompt(`Enter marks obtained in ${subjects[i]}`, marksObtained[i])) || 0;
    marksObtained[i] = marks;
}

var totalMarks = [100, 100, 100, 100]

for(var i=0; i < subjects.length; i++){
    document.write(`<tr><td>${subjects[i]}</td><td>${totalMarks[i]}</td><td>${marksObtained[i]}</td><td>${(marksObtained[i]/totalMarks[i]*100).toFixed(2)}%</td></tr>`);
}
document.write(`</table>`)

// document.write (`Subject   Total Marks   Marks Obtained   Percentage <br/>`);

// let totalMarks = 100;

// let a = +prompt ('Enter marks obtained in Maths');
// let b = +prompt ('Enter marks obtained in Chemistry');
// let c = +prompt ('Enter marks obtained in Physics');
// let d = +prompt ('Enter marks obtained in Biology');

// document.write (`Maths &emsp;&emsp;  ${totalMarks} &emsp;&emsp; ${a}  &emsp;&emsp; ${(a/totalMarks)*100}% <br/>`);
// document.write (`Chemistry&emsp;&emsp; ${totalMarks} &emsp;&emsp;  ${b} &emsp;&emsp;  ${(b/totalMarks)*100}% <br/>`);
// document.write (`Physics  &emsp;&emsp; ${totalMarks} &emsp;&emsp;  ${c} &emsp;&emsp;  ${(c/totalMarks)*100}% <br/>`);
// document.write (`Biology &emsp;&emsp;  ${totalMarks}  &emsp;&emsp; ${d} &emsp;&emsp;  ${(d/totalMarks)*100}% <br/>`);








