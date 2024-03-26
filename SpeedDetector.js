
const { Console } = require("console");
const readline= require ("readline");
   const rl = readline.createInterface ({
     input: process.stdin,
     output: process.stdout
   });
//creating a function that takes the input of a cars speed
function speedDetector(speedInput){
//creating an unassigned variable named demerits
    let demerits;
//defining the speed limit
let speedLimit = 70;
    //creating an unassigned variable named response
    let response = "";

//checks for invalid input i.e figures below zero
    if(speedInput < 0 ){

//if input is invalid it returns Invalid input
        response = "Invalid input";

//If input is valid and is below 70 then response is 'OK'
        
 if(speedInput >= 0 && speedInput <= 70){

       response = "OK";

        }else{
//
            const aboveLimit=5;
//calculating the difference between speedInput and speedLimit

            const diff = speedInput - speedLimit;

            demerits = Math.floor(diff / aboveLimit);

            response = `points: + ${demerits}`
                }

                if(response > 12){

                    response ="Liscense suspended"
}
}

return response;
}

rl.question("Enter speedin km/hr:",(speedInput)=>{
    const demerits= speedDetector(parseInt(speedInput));
  console.log(demerits);
  rl.close();
});