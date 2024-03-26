


const { Console } = require("console");
const readline= require ("readline");
   const rl = readline.createInterface ({
     input: process.stdin,
     output: process.stdout
   });
// Creating a function that takes in the user input which is the student marks and returns the grade attained by the student depending on their marks
function studentGrade(userInput){
    
    // If student scored 39 marks and below return Grade E 
    let finalGrade = '';
    if(userInput <=39){
        finalGrade='E';
        //If student scored marks between 40 and 48 return Grade D 
    }else if(userInput >=40 && userInput< 48){
            finalGrade = 'D';
        }
        // If student scored marks between 49and 58 return Grade c
        else if (userInput>=49 && userInput<=58){
            finalGrade = 'c';
          }
          // If student scored marks between 59 and 78 return Grade B
          else if (userInput>=59 && userInput<=78){
            finalGrade = 'B';
           }
           //I student scored 79 marks and above return grade A
           if (userInput>=79 ){
            finalGrade = 'A';
           }
return finalGrade;
        }
rl.question("Enter student marks (Between 0 and 100):",(userInput)=>{
    const finalGrade = studentGrade(parseInt(userInput));
  console.log(`The student's grade is: ${finalGrade}`);
  rl.close();
});