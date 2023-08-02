let currentFloor = 1;
const directionElement = document.getElementById('direction');
const floorElement = document.getElementById('floor');

function goUp() {
  currentFloor++;
  updateDisplay();
}

function goDown() {
  currentFloor--;
  updateDisplay();
}

function updateDisplay() {
  floorElement.innerText = currentFloor;
  directionElement.innerText = currentFloor > 1 ? '▲' : '';
}
