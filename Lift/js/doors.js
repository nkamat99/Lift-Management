const animatedDiv = document.getElementById('left');
document.addEventListener('DOMContentLoaded', () => {
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
    location.replace("floor_console.html")
    
});
const animatedDivright = document.getElementById('right');

animatedDivright.addEventListener('animationend', () => {
    animatedDivright.style.display = 'none';
});
