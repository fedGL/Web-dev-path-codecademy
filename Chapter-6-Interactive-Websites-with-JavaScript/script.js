/*
GOAL: Make a game where the user chooses between 3 closed doors.
   User wins if he doesn't find ChoreBot behind chosen door.
PLAN:
  1. HTML features
  2. CSS style
  3. Make JS logic
    3.1 Define path to ChoreBot image
    3.2 Randomize location of ChoreBot
    3.3 Reset game button
  4. Make more CSS to make everything nice
*/

//Global variables
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';


// Grab doors by ID
const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');

doorImage1.onclick = () => {
  doorImage1.src = botDoorPath;
}
doorImage2.onclick = () => {
  doorImage2.src = beachDoorPath;
}
doorImage3.onclick = () => {
  doorImage3.src = spaceDoorPath;
}