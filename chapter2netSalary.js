function calSalary(){
    let regHurRate    = prompt("Please enter your hourly rate");
    let regHoursWork  = prompt("Please enter regHoursWorked");
    let overTimeHours = prompt("Please enter overTimeHours");
    let grossSalary= (regHoursWork*regHurRate)+(overTimeHours*regHurRate*1.5)
    let salaryTax = 0.15*grossSalary;
    let netSalary=grossSalary -salaryTax;
    return "Your net Salary:"+ netSalary;
}
console.log(calSalary());