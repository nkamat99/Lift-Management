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
      console.log(accessFloors);
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
                element.onclick = null;
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
        element.onclick = null;
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
      if(sessionStorage.getItem('lift_in_motion') == "lift1"){
        console.log("Lift 1 in motion");
        sessionStorage.setItem('lift_01',targetFloor);
      }
      else{
        console.log("Lift 2 in motion");
        sessionStorage.setItem('lift_02',targetFloor);
      }
    

      const interval = setInterval(function() {
          if (currentFloor !== targetFloor) {
            currentFloor += direction;
            current_floor.textContent = currentFloor.toString();
            // this will be used incase the alarm is called
            sessionStorage.setItem('current_lift_position', currentFloor)
              console.log("Current Lift Floor:", currentFloor);
              document.getElementById("alert_btn").addEventListener("click", () => {
                console.log("button clicked and stopping floor is ", currentFloor)
                playAlarm(currentFloor);
               
                clearInterval(interval);
              });
          } else {
            console.log("abc");
              window.location.href= "exit_doors.html";
              clearInterval(interval);
          }
      }, 2000);
     
  }


  function abc(){
    console.log("Do nothing");
   }

//
function playAlarm(currentFloor){
  var music = new Audio('./assets/alert.mp3');

  let isPlaying = false;
  if (isPlaying) {
      music.pause();
    } else {
      music.play();
      setTimeout(function() {
        // Code to be executed after the delay
        console.log("Delayed code executed after 5 seconds");
      }, 5000);
      
      
    }
    isPlaying = !isPlaying;
    music.addEventListener('ended', function () {
      setTimeout(function() {
        // Code to be executed after the delay
        console.log("Delayed code executed after 5 seconds");
        alarm(currentFloor);
      }, 3000);
      
      isPlaying = false;

    });
    
    music.addEventListener('play', function () {
      setTimeout(function() {
        // Code to be executed after the delay
        console.log("Delayed code executed after 5 seconds");
        alarm(currentFloor);
      }, 3000);
      isPlaying = true;
    });
    
    music.addEventListener('pause', function () {
      setTimeout(function() {
        // Code to be executed after the delay
        console.log("Delayed code executed after 5 seconds");
        alarm(currentFloor);
      }, 3000);
      isPlaying = false;
    });
  }
  

//
  function alarm(currentFloor) {
    // // This wait of 3 secs is not working
    // setTimeout(function() {
    //   console.log("3 seconds have passed");}, 3000); 
    // console.log("currentFloor lift stopping", currentFloor);
    const current_floor = document.getElementById('current_floor');
    
    if(sessionStorage.getItem('lift_in_motion') == "lift1"){
      console.log("Lift 1 in motion");
      sessionStorage.setItem('lift_01',currentFloor);
    }
    else{
      console.log("Lift 2 in motion");
      sessionStorage.setItem('lift_02',currentFloor);
    }
    console.log("the lift stops at",currentFloor);
    current_floor.textContent = currentFloor.toString();
    
  // setInterval(3000);
    window.location.href= "exit_doors.html";
  }


  // Call the fetchDataAndDisplay function to initiate the process
  fetchDataAndDisplay();
  