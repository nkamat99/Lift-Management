// Outside the lift
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formid");
    // const p=document.getElementById("p")
    // p.textContent = "0";
    // let liftFloor = parseInt(p.textContent);  // where the lift is currently
    // console.log(liftFloor)
  
    form.addEventListener("submit", async function(event) {
      event.preventDefault(); 
  
      const noOfPeople = parseInt(document.getElementById("input").value);
      const currentFloor = parseInt(document.getElementById("floor").value);  // where the user is currently
      // to check if the lift1 is at initial position or not
      if(sessionStorage.getItem('lift_01')== null){
        let current_floor_lift_01 = 0;  
        sessionStorage.setItem('lift_01', current_floor_lift_01);
        // console.log("ab", current_floor_lift_01)
      }
      else{
        let current_floor_lift_01 = sessionStorage.getItem('lift_01');
        // console.log("lift1",current_floor_lift_01)
      }

      // to check if the lift1 is at initial position or not
      if(sessionStorage.getItem('lift_02')== null){
        let current_floor_lift_02 = 5;  
        sessionStorage.setItem('lift_02', current_floor_lift_02);
        // console.log("cd",current_floor_lift_02)
      }
      else{
        let current_floor_lift_02 = sessionStorage.getItem('lift_02');
        // console.log("lift2",current_floor_lift_02)
      }


      sessionStorage.setItem('floor',currentFloor);

      console.log("Number of People:", noOfPeople);
      console.log("Current Floor:", currentFloor);
      window.location.href= "lift_cluster.html";

    //   // Calculate the difference between liftFloor and currentFloor
    //   const floorDifference = currentFloor - liftFloor;

    //   // Define the direction of movement (up or down)
    //   const direction = Math.sign(floorDifference); // -1 for down, 1 for up

    //   if(direction == -1 ){
    //     document.getElementById("up_arrow").style.visibility='hidden';
    //   }
    //   else{
    //     document.getElementById("down_arrow").style.visibility='hidden';
    //   }

    //   const interval = setInterval(function() {
    //       if (liftFloor !== currentFloor) {
    //           liftFloor += direction;
    //           p.textContent = liftFloor.toString();
    //           console.log("Current Lift Floor:", liftFloor);
    //       } else {
    //         // console.log("abc");
            
    //     window.location.href= "Doors.html";
    //           clearInterval(interval);
    //       }
    //   }, 2000);
      
      // const lift= liftFloor;
      
    });
    // insideLift(liftFloor);
    // export default liftFloor;
    // module.exports=async(liftFloor);
});





// // Inside the lift
// function insideLift(liftFloor)
// {
//     console.log("abc")

//     document.addEventListener("DOMContentLoaded", function() {
//         const form = document.getElementById("inside_lift_console");
        
    
//         console.log(liftFloor)
//         // curr_floor.textContent = liftFloor.toString();
//         // let liftFloor = parseInt(p.textContent);  // where the lift is currently
//         // console.log(liftFloor)
      
//         // form.addEventListener("submit", async function(event) {
//         //   event.preventDefault(); 
      
//         //   const noOfPeople = parseInt(document.getElementById("input").value);
//         //   const currentFloor = parseInt(document.getElementById("floor").value);  // where the user is currently
      
//         //   console.log("Number of People:", noOfPeople);
//         //   console.log("Current Floor:", currentFloor);
    
    
//         //   // Calculate the difference between liftFloor and currentFloor
//         //   const floorDifference = currentFloor - liftFloor;
    
//         //   // Define the direction of movement (up or down)
//         //   const direction = Math.sign(floorDifference); // -1 for down, 1 for up
    
//         //   if(direction == -1 ){
//         //     document.getElementById("up_arrow").style.visibility='hidden';
//         //   }
//         //   else{
//         //     document.getElementById("down_arrow").style.visibility='hidden';
//         //   }
    
//         //   const interval = setInterval(function() {
//         //       if (liftFloor !== currentFloor) {
//         //           liftFloor += direction;
//         //           p.textContent = liftFloor.toString();
//         //           console.log("Current Lift Floor:", liftFloor);
//         //       } else {
//         //         console.log("abc");
//         //     window.location.href= "Doors.html";
//         //           clearInterval(interval);
//         //       }
//         //   }, 2000); 
          
//         // });
//     });
// }
