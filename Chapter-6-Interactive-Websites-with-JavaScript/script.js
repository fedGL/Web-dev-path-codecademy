/*
Simple game of opening doors without running into ChoreBot
GOAL: open 2 doors without finding ChoreBot
PLAN:
  1. HTML with logo, game instructions, doors
  2. CSS style
  3. JS logic
    3.1 Generate random location for ChoreBot out of 3 doors
    3.2 Logic for winning condition
    3.3 Logic for losing condition
    3.4 Logic to reset the game

*/

let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
leconstt spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let startButton = document.getElementById('start');
let currentlyPlaying = true;

const isClicked = (door) => {
  if (door.src === closedDoorPath){
    return false;
  }else {
    return true;
  }
};

const isBot = (door) => {
  if (door.src === botDoorPath){
    return true;
  }else {
    return false;
  }
};

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0){
    gameOver('win');
  }else if (isBot(door)){
    gameOver();
  }
};

// Position ChoreBot at random
const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else if (choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  }else {
    openDoor3 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor1 = beachDoorPath;
  }
};

// click handlers

doorImage1.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage1)){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}
doorImage2.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage2)){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}
doorImage3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}
startButton.onclick = () => {
  if (!currentlyPlaying){
    startRound();
  }
}

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};

const gameOver = (status) => {
  if (status === 'win'){
    startButton.innerHTML = 'You win! Again?';
    currentlyPlaying = false;
  }else{
    startButton.innerHTML = 'Game over! Again?';
    currentlyPlaying = false;
  }
};

startRound();