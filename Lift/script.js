
    var music = new Audio('./assets/fan.mp3');
    let isPlaying = false;
    function playMusic(){
    if (isPlaying) {
        music.pause();
      } else {
        music.play();
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

  