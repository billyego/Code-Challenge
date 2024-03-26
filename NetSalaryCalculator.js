const { Console } = require("console");
const readline= require ("readline");
   const rl = readline.createInterface ({
     input: process.stdin,
     output: process.stdout
    });

//calculating PAYEE
function calculatePAYEE(taxableIncome){
let tax = 1000
  if(taxableIncome <= 24000 )  {
    return tax * 0.1
  }
  if(taxableIncome <= 32333 && taxableIncome > 24000){
    return tax * 0.25
  }
  if(taxableIncome <= 50000 && taxableIncome >32333){
   return tax * 0.3
    }

  if(taxableIncome <=800000 && taxableIncome>500000)
        return tax * 0.325

 if(taxableIncome >800000){
    return tax* 0.35
}
return tax;
}
//calculating NHIF deduction

function calculateNHIFdeduction(grossPay) { 
    let NHIFdeduction = 0;
if( grossPay <= 5999 && grossPay >= 0){
    return NHIFdeduction =150 
}

if( grossPay <= 7999 && grossPay >= 6000){
    return NHIFdeduction =300
}

if( grossPay <= 11999 && grossPay >= 8000){
    return NHIFdeduction =400
}

if( grossPay <= 14999 && grossPay >= 12000){
    return NHIFdeduction =500
}

if( grossPay <= 19999 && grossPay >= 15000){
    return NHIFdeduction =600
}

if( grossPay <= 24999 && grossPay >= 20000){
    return NHIFdeduction =750
}

if( grossPay <= 29999 && grossPay >= 25000){
    return NHIFdeduction =850
}

if( grossPay <= 34999 && grossPay >= 30000){
    return NHIFdeduction =900
}

if( grossPay <= 39999 && grossPay >= 35000){
    return NHIFdeduction =950
}

if( grossPay <= 44999 && grossPay >= 40000){
    return NHIFdeduction =1000
}

if( grossPay <= 49999 && grossPay >= 45000){
    return NHIFdeduction =1100
}

if( grossPay <= 59999 && grossPay >= 50000){
    return NHIFdeduction =1200
}

if( grossPay <= 69999 && grossPay >= 60000){
    return NHIFdeduction =1300
}

if( grossPay <= 79999 && grossPay >= 70000){
    return NHIFdeduction =1400
}

if( grossPay <= 89999 && grossPay >= 80000){
    return NHIFdeduction =1500
}

if( grossPay <= 99999 && grossPay >= 90000){
    return NHIFdeduction=1600
}

if (grossPay >= 100000){
    return NHIFdeduction =1700
}
return NHIFdeduction;
}


//calculateNSSF deductions
const NSSFRATE = 0.06
function calculateNSSFdeductions(grossPay){

    return grossPay * NSSFRATE
}

//Calculating net salary

let basicSalary = 100000;
let benefits =1000;

function calculateNetSalary(grossPay){
    const NHIFdeduction = calculateNHIFdeduction(grossPay)
    const NSSFdeduction = calculateNSSFdeductions(grossPay)
    const netSalary = grossPay - NHIFdeduction - NSSFdeduction
return{ calculateNetSalary
};
}
rl.question("Enter basic salary:",(basicSalaryInput)=>{
 basicSalary = parseFloat(basicSalaryInput);
    const taxableIncome = basicSalary + benefits;
    const tax =calculatePAYEE(taxableIncome);
  const grossPay = basicSalary - tax;
  
  console.log(`Net Salary:${ grossPay}`); 
  rl.close();
});