document.addEventListener("DOMContentLoaded", async function() {
// Get the stored session variable 'floor'
let desired_floor = sessionStorage.getItem('floor');

console.log("floor sent :",desired_floor);

// Initialize current floor variables for both lifts
const current_floor_lift_01 = 0;
const current_floor_lift_02 = 5;
sessionStorage.setItem(current_floor_lift_01,"lift_01");
sessionStorage.setItem(current_floor_lift_02,"lift_02");
// Calculate the absolute differences between 'floor' and the current floors of the lifts
const diff_lift_01 = desired_floor - current_floor_lift_01;
const diff_lift_02 = desired_floor - current_floor_lift_02;

// Choose the closest lift based on the differences
let closest_lift,difference;
if (Math.abs(diff_lift_01) < Math.abs(diff_lift_02)) {
  difference = diff_lift_01;
  closest_lift=1;
} else {
  closest_lift = 2;
  difference=diff_lift_02;
}

const direction = Math.sign(difference); 
console.log("direction:",direction); 
// Output the result
console.log(`The closest lift to floor ${desired_floor} is ${closest_lift}`);
let parentElement,targetElement,currentFloor,p;
if(closest_lift == 1){
 parentElement = document.getElementById('meter_01');
 currentFloor=current_floor_lift_01;
 sessionStorage.setItem(desired_floor,"lift_01");
    
}
else{
    parentElement = document.getElementById('meter_02');
    currentFloor=current_floor_lift_02;
    sessionStorage.setItem(desired_floor,"lift_02");
}
p=parentElement.querySelector(".text");
if(direction == -1 ){
    targetElement = parentElement.querySelector('.up_arrow');
   targetElement.style.visibility='hidden';
  }
  else{
    targetElement = parentElement.querySelector('.down_arrow');
   targetElement.style.visibility='hidden';
   
  }

  const interval = setInterval(function() {
    console.log("desired floor :",desired_floor);
      if (desired_floor != currentFloor) {
          currentFloor += direction;
          p.textContent = currentFloor.toString();
          console.log("Current Lift Floor:", currentFloor);
      } else {
        // console.log("abc");
        sessionStorage.setItem(currentFloor,'floor')
        
    window.location.href= "Doors.html";
          clearInterval(interval);
      }
  }, 2000);
  
});

