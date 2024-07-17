document.write("<h1>Marks Sheet</h1>");

let a = 300;
let b = +prompt("Obtained marks");
let c = b/a*100;
var d = "Total marks : " + a + "<br/>" + "Obtained marks : " + b + "<br/>" + "Percentage : " + c + "%" + "<br/>";

if (c >= 80 && c <= 100) {
    document.write(`${d}Grade :  A-one <br/> Remarks : Excellent <br/>`);
    alert ("Congratulation you got top marks");
}

else if (c >= 70 && c < 80) {
    document.write(`${d}Grade : A<br/> Remarks :  Good <br/>`);
    alert ("Congratulation you got good marks");
}

else if (c >= 60 && c < 70) {
    document.write(`${d}Grade : B<br/> Remarks :  You need to improve<br/>`);
    alert ("Congratulation you passed");
}

else if (c >= 0 && c < 60) {
    document.write(`${d}Grade : Fail<br/> Remarks :  Sorry<br/>`);
    alert ("Sorry you failed");
}

else {
    alert("Please enter valid marks");
    document.write("ERROR!!!" + "<br/>");
}
