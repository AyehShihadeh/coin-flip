//retreive string and turn back into an object
let score = JSON.parse(localStorage.getItem('scoreString'));

let result = ''; //random head or tail
let message = ''; //correct or incorrect
let guess = ''; //user choice

//give score default scores if null
if(score === null){ //!score is equvilent
  score ={
    wins:0,
    losses:0,
  };
}


//print message
function popup(){

  document.querySelector('.js-result').innerHTML = `
  <div class="result-img">
  <img src="IMAGES/${result}.png" alt="result coin">
  </div>
  `;
  console.log(result);

  document.querySelector('.js-message2').innerHTML = `${message}`;

  document.querySelector('.js-message1').innerHTML = `Guessed: ${guess} &nbsp;&nbsp;&nbsp;&nbsp; Truth: ${result}`;

}

//print score only
function updateScore(){
  document.querySelector('.js-wins').innerHTML = `Wins: ${score.wins}`;

  document.querySelector('.js-losses').innerHTML = `Losses: ${score.losses}`;
}

//flips coin and saves it in result
function flipCoin(){
  const randNum = Math.random();

  if(randNum < 0.5){
  result='heads';
  }else{
  result='tails';
  }

  clearWords();
  document.querySelector('.js-result').innerHTML = `
  <div class="result-img">
  <img src="IMAGES/question.png" alt="question mark"></img>
  </div>
  `;


}

//compares guess with result
function compare(g, result){
  guess=g;

  if(result===''|| result===null){
    alert('pls flip coin');
    return;
  }else if(g === result){
    message='CORRECT';
    score.wins++;
  }else{
    message='INCORRECT';
    score.losses++;
  }
  popup();

  //turn score object into string and set in storage
  localStorage.setItem('scoreString', JSON.stringify(score));

  updateScore();
}

function clearWords(){
  document.querySelector('.js-message2').innerHTML = ``;

  document.querySelector('.js-message1').innerHTML = ``;
  document.querySelector('.js-result').innerHTML = ``;
}

//for score to stay on page refresh
 updateScore();