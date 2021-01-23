// Your name goes here
const userName = 'Cory'

// The question you have for the 8 ball
const userQuestion = 'Will I become a developer?'

const message = userName ? console.log(`Hello ${userName}`) : console.log('You');
console.log(`${userName} asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = ''

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain'
    break;
  case 1:
     eightBall = 'It is most likely going to happen'
    break;
  case 2:
     eightBall = 'Reply hazy try again'
    break;
  case 3:
     eightBall = 'Cannot predict now'
    break;
  case 4:
     eightBall = 'Do not count on it'
    break;
  case 5:
     eightBall = 'My source code says no'
    break; 
  case 6:
     eightBall = 'Outlook not so good'
    break; 
  case 7:
     eightBall = 'Error 404 Ask Again'
    break; 
}
console.log(`Magic 8 ball says: ${eightBall}`); 




