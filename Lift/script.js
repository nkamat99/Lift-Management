
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

  
  var alertMusic = new Audio('./assets/alert.mp3');
  let isAlert = false;
  function playAlert(){
  if (isAlert) {
      alertMusic.pause();
    } else {
      alertMusic.play();
    }
    isAlert = !isAlert;
  }
  
alertMusic.addEventListener('ended', function () {
  isAlert = false;
});

alertMusic.addEventListener('play', function () {
  isAlert = true;
});

alertMusic.addEventListener('pause', function () {
  isAlert = false;
});

  