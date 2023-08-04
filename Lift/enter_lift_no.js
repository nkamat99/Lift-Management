
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formid");

    p.textContent = "0";
    let liftFloor = parseInt(p.textContent);  // where the lift is currently
    console.log(liftFloor)
  
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
            console.log("abc");
        window.location.href= "Doors.html";
              clearInterval(interval);
          }
      }, 2000); 

    //   if(liftFloor == currentFloor)
    //   {
    //     console.log("abc");
    //     window.location.replace = "Doors.html";
    //   }
      // This part should display a door open animation as it moves to the inside lift console
      
    });
});



// delete this part Druvi

    //   const targetValue = currentFloor;
// for(let i=0; i<=7; i++)
// {
//             setInterval(function() {
//                 if(liftFloor<currentFloor){
//                     p.textContent = (liftFloor+1).toString();
//                     console.log("a",liftFloor)
//                     liftFloor = liftFloor + 1;
//                 }
//                 if(liftFloor>currentFloor){
//                     p.textContent = (liftFloor-1).toString();
//                     console.log("b",liftFloor)
//                     liftFloor = liftFloor - 1;
//                 }
//                 if(liftFloor == currentFloor)
//                 {
//                     console.log("c",liftFloor)
//                     // window.location.href = "floor_console.html";
//                 }
                
//             }, 7000); 
//             // p.textContent = liftFloor.toString();
//             i=i+1;
//         }
   
  


//   const targetValue = 10; // Replace with your desired integer value
// let currentValue = 0;

// const interval = setInterval(function() {
//     if (currentValue <= targetValue) {
//         console.log(currentValue);
//         currentValue++;
//     } else {
//         clearInterval(interval);
//     }
// }, 2000); // 2000 milliseconds = 2 seconds
