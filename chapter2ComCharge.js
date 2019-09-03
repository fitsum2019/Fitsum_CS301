
function serviceCharge(totalArea){
    let totalCharge=( totalArea*15*0.01);
    return "Your Total: $"+totalCharge ;
}
console.log(serviceCharge(prompt("Please enter your totalArea in sq feet")));