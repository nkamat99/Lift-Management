// let liftFloor="2";
// module.exports = liftFloor;

// Outside the lift
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formid");
    // const p=document.getElementById("p")
    p.textContent = "0";
    let liftFloor = parseInt(p.textContent);  // where the lift is currently
    // console.log(liftFloor)
  
    form.addEventListener("submit", async function(event) {
      event.preventDefault(); 
  
      const noOfPeople = parseInt(document.getElementById("input").value);
      const currentFloor = parseInt(document.getElementById("floor").value);  // where the user is currently
  
      console.log("Number of People:", noOfPeople);
      console.log("Current Floor:", currentFloor);


      // Calculate the difference between liftFloor and currentFloor
      const floorDifference = currentFloor - liftFloor;

      // Define the direction of movement (up or down)
      const direction = Math.sign(floorDifference); // -1 for down, 1 for up

      if(direction == -1 ){
        document.getElementById("up_arrow").style.visibility='hidden';
      }
      else{
        document.getElementById("down_arrow").style.visibility='hidden';
      }

      const interval = setInterval(function() {
          if (liftFloor !== currentFloor) {
              liftFloor += direction;
              p.textContent = liftFloor.toString();
              console.log("Current Lift Floor:", liftFloor);
          } else {
            // console.log("abc");
            
        window.location.href= "Doors.html";
              clearInterval(interval);
          }
      }, 2000);
      
    // module.exports = liftFloor;
    
      
    });
    // insideLift(liftFloor);
    // export default liftFloor;
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
