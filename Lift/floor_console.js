// Import the value of liftFloor from file1.js
// import { liftFloor } from './enter_lift_no';
// //  const liftFloor = require('./enter_lift_no.js');

// // Now you can use liftFloor in this file
// console.log("Lift Floor in floor_console.js:", liftFloor);

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

    //   [2, 4, 7, 1]
    // for(let i=0; i<accessFloors.length; i++)
    // {   
        // let i=0
        for(let j=1; j<8; j++)
        {
            if(accessFloors.includes(j))
            {
                console.log("Display", j);
            }
            else{
                console.log("Disable", j);
            }
            
        // }
        // console.log(accessFloors[i]);
        // console.log(i);

        // for(let i=1; i<8; i++)
    
        // if( i in accessFloors){
        //     console.log("button will be displayed", i)
        //     // code for displaying the button
        // }
        // else{
        //     console.log("button will be disabled", i)
        //     // code for disabling
        // }
    }
      


  
      // Display the floor value
      const current_floor = document.getElementById('current_floor');
      current_floor.textContent = floor.toString();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Call the fetchDataAndDisplay function to initiate the process
  fetchDataAndDisplay();
  