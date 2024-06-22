var number = prompt("Enter a number (press Enter for 5)") || 5;
document.write(`Multiplication table of ${number} <br/><br/>`)

for(var i=1; i <= 10; i++){
    document.write(`${number} x ${i} = ${number*i} <br/>`);
}