function continueGame(){
   const alphabet= getARendomAlphabet();
   console.log('your random alphabet', alphabet);
   const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;
    setBackgroundColor(alphabet);
}
function play(){
    hiddenElementById('home-screen');
    showElementById('play-ground')
    continueGame();
}