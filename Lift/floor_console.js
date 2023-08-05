async function fetchDataAndDisplay() {
    const floor = sessionStorage.getItem('floor');
    console.log(floor);
    const roomId = sessionStorage.getItem('roomno');
    console.log(roomId);
  
    try {
      const response = await fetch('http://localhost:8080/accessLevel/findAccessLevel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ roomId }),
      });
  
      const responseData = await response.json();
      console.log('Response from backend:', responseData);

      accessFloors = responseData.AccessDetails;

      // document.addEventListener("DOMContentLoaded", function() {
      // accessFloors = [2, 4, 7, 1];
        for(let j=1; j<8; j++)
        {
            if(accessFloors.includes(j))
            {
                console.log("Enable", j);
            }
            else{
              console.log("Disable", j);

              const elements = document.querySelectorAll(`[id="${j}"]`);

              elements.forEach(element => {
                element.classList.add('disable');
              });
              
            }
        }

        
      // });

      // Display the floor value (meter)
      const current_floor = document.getElementById('current_floor');
      current_floor.textContent = floor.toString();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  

  function targetfloor(targetfloor) {

    // disable all buttons so that user cant click on any other button while lift in movement
    for(let i=0; i<8; i++)
    {
      const elements = document.querySelectorAll(`[id="${i}"]`);
      elements.forEach(element => {
        element.classList.add('disable');
      });
    }

    let targetFloor = targetfloor.id;
    console.log("Target Floor:", targetFloor);

    let currentFloor = sessionStorage.getItem('floor');
    // console.log(currentFloor);

    // code to take lift to desired floor

    // Calculate the difference between liftFloor and currentFloor
      const floorDifference = targetFloor - currentFloor;
      console.log(floorDifference)

      // Define the direction of movement (up or down)
      const direction = Math.sign(floorDifference); // -1 for down, 1 for up
      console.log(direction)

      if(direction == -1 ){
        document.getElementById("up_arrow").style.visibility='hidden';
      }
      else if(direction == 1 ){
        document.getElementById("down_arrow").style.visibility='hidden';
      }

      currentFloor = parseInt(currentFloor);
      targetFloor = parseInt(targetFloor);

      const interval = setInterval(function() {
          if (currentFloor !== targetFloor) {
            currentFloor += direction;
            current_floor.textContent = currentFloor.toString();
              console.log("Current Lift Floor:", currentFloor);
          } else {
            console.log("abc");
              window.location.href= "exit_doors.html";
              clearInterval(interval);
          }
      }, 2000);
     
  }

  // Call the fetchDataAndDisplay function to initiate the process
  fetchDataAndDisplay();
  