rli = require('readline').createInterface({ input: process.stdin }).on('line', get_line)
function get_line(line){
    line == 'END' ? rli.close() : solve(line)
}

function solve(age){
     if ( 0 > age || age > 120){
         console.log("Not Applicable.");
     }
           
    else if (age < 13){
      console.log("You can watch movies rated: G and PG (with a parent).");
     }
    
    else if (age <= 16) {
      console.log("You can watch movies rated: G, PG, and R-13.");
    }
    
    else if (age <= 18){ 
      console.log("You can watch movies rated: G, PG, R-13, and R-16.");
    }
    
    else{
      console.log("You can watch movies rated: G, PG, R-13, R-16, and R-18.");
    }
    
}