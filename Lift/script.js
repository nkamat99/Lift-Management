
    var music = new Audio('./assets/fan.mp3');
    let isPlaying = false;
    const rotatingImage = document.getElementById('fan_img');
    function playMusic(){
    if (isPlaying) {
        music.pause();
        clearInterval(rotationInterval);
      } else {
        music.play();
        let rotation = 0;
  rotationInterval = setInterval(function() {
    rotation += 2; // Adjust the rotation speed
    rotatingImage.style.transform = `rotate(${rotation}deg)`;
  }, 80);
      }
      isPlaying = !isPlaying;
    }
    
music.addEventListener('ended', function () {
    isPlaying = false;
  });
  
  music.addEventListener('play', function () {
    isPlaying = true;
  });
  
  music.addEventListener('pause', function () {
    isPlaying = false;
  });

  
  