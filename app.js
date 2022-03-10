//Game values
let min = 1,
    max = 20,
    insult = 'Idiot!!'
    winningNum = getRandomNum(min, max),
    guessesleft =3;
    //UI Elements
    const game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        // name = document.querySelector('.nameE'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');

        //ASSIGN UI MIN AND MAX
        minNum.textContent = min;
        maxNum.textContent = max;
        // insult.style.color = 'red';

//play again event listener
game.addEventListener('click', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});
// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    //validate
    if(isNaN(guess) || guess < min || guess > max){
        errMessage = `Please enter a number btween ${min} and ${max} you 
        <span class='text-danger'>${insult}</span>`;
  setMessage(errMessage,'blue');

    }
    // check if won
    if(guess=== winningNum){
        //Game over - won

        //disable input
        guessInput.disabled = true;
        //change border color
        guessInput.style.borderColor = 'green';
        //set success message
        setMessage(`${winningNum} is Correct! YOU WIN!!`, 'green');
    }else{
//wrong number
guessesleft -=1;
if(guessesleft === 0){
    //Game over - lost

    //disable input
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor = 'red';
    //set   message
    setMessage(`Game Over, you Loser! The correct number was 
    ${winningNum}`, 'red');
    guessBtn.value = 'play Again';
    guessBtn.className += 'play-again';
    
}else{
    //game continues - wrong answer

    //change border color
    guessInput.style.borderColor = 'red';
    
    // clear input
    guessInput.value = '';
    setMessage(`${guess} is not correct, ${guessesleft} guesses left`)
}
    }
});
// Ger winning Number
function getRandomNum(min, max){
 
return Math.floor(Math.random()*(max-min+1)+min);
}


//Set message
function setMessage(msg, color ){
//    console.log(msg); 
message.style.color = color;
message.innerHTML = msg;
}