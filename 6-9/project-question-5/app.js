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
