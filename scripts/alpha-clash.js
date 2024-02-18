function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase()

    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        console.log('You have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else{
        console.log('you lost a life');
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
    showElementById('play-ground');
    continueGame();
}