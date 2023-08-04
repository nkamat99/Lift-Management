// // Import the value of liftFloor from file1.js
// import { liftFloor } from './enter_lift_no';
// //  const liftFloor = require('./enter_lift_no.js');

// // Now you can use liftFloor in this file
// console.log("Lift Floor in floor_console.js:", liftFloor);
floor=sessionStorage.getItem('floor');
console.log(floor)
roomno=sessionStorage.getItem('roomno');
console.log(roomno)


document.addEventListener("DOMContentLoaded", function() {
current_floor.textContent = floor.toString();

});

