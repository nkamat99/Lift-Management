const animatedDiv = document.getElementById('left');
document.addEventListener('DOMContentLoaded', async function() {
  var floor;
  if(sessionStorage.getItem('lift_in_motion') == "lift1"){
    console.log("Lift 1 in motion");
   floor= sessionStorage.getItem('lift_01');
  }
  else{
    console.log("Lift 2 in motion");
    floor= sessionStorage.getItem('lift_02');
  }
 
  console.log("floor:",floor);
  if(floor >=1 && floor<=5 ){
    console.log("floor:",floor);
    // Change the background color of the body after 3 seconds:done

  document.body.style.backgroundImage = "url('../Lift/assets/Room_background.jpeg')"; // Change to your desired color


  }
  if(floor ==6 ){
    console.log("floor 6:",floor);
    // Change the background color of the body after 3 seconds

  document.body.style.backgroundImage = "url('../Lift/assets/gym_background.jpg')"; // Change to your desired color


  }
  if(floor ==7 ){
    console.log("floor 7:",floor);
    // Change the background color of the body after 3 seconds

  document.body.style.backgroundImage = "url('../Lift/assets/Rooftop_background.jpg')"; // Change to your desired color


  }
    var music = new Audio('../Lift/assets/elevator_door.mp3');
    let isPlaying = false;
   
    if (isPlaying) {
        music.pause();
      } else {
        music.play();
      }
    isPlaying = !isPlaying;
    
    
music.addEventListener('ended', function () {
    isPlaying = false;
  });
  
  music.addEventListener('play', function () {
    isPlaying = true;
  });
  
  music.addEventListener('pause', function () {
    isPlaying = false;
  });

  
});
animatedDiv.addEventListener('animationend', () => {

    animatedDiv.style.display = 'none';
    // location.replace("login.html")
    setTimeout(()=>{location.replace("login.html")},3000);
    
});
const animatedDivright = document.getElementById('right');

animatedDivright.addEventListener('animationend', () => {
    animatedDivright.style.display = 'none';
});
