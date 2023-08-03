const animatedDiv = document.getElementById('left');

animatedDiv.addEventListener('animationend', () => {
    animatedDiv.style.display = 'none';
    location.replace("floor_console.html")
});
const animatedDivright = document.getElementById('right');

animatedDivright.addEventListener('animationend', () => {
    animatedDivright.style.display = 'none';
});
