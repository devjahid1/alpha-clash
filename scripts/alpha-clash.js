function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase()

    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        console.log('You have pressed correctly', expectedAlphabet);
        //Count Score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log((currentScore));
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else{
        console.log('you lost a life');
        const currentLifeElement=document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText)
        const updatedLife = currentLife -1;
        currentLifeElement.innerText = updatedLife
        if(updatedLife === 0){
            gameOver();
        }
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent);



function continueGame(){
    const alphabet = getARendomAlphabet();
    console.log(alphabet);
    const currentAlphabetElement= document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;
    setBackgroundColor(alphabet);
}
function play(){
    hiddenElementById('home-screen');
    hiddenElementById('final-score')
    showElementById('play-ground');
    
    continueGame();
}

function gameOver(){
    hiddenElementById('play-ground');
    showElementById('final-score')
}