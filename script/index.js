// one way to add and remove hidden elements
// function play() {
//    const homeSection= document.getElementById('home-screen');
//    homeSection.classList.add('hidden');

//    const playGroundSection= document.getElementById('play-ground');
//    playGroundSection.classList.remove('hidden');
// }

// another way to add and remove hidden elements



function play(){
    // hide everything show only play-ground
    hideElementById('home-screen');
    hideElementById('score-bord')
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life',5)
    setTextElementValueById('current-score',0)

    continueGame();
}
function gameOver(){
    hideElementById('play-ground');
    showElementById('score-bord');

    // update the final score
    const finalScore =getElementTextById('current-score ')
    setTextElementValueById('game-score', finalScore)

    // clear the last selected alphabet
    const currentAlphabet=getElementTextById('current-alphabet')
    removeBackgroundColorById(currentAlphabet);
}
function continueGame(){
    // generate a random alphabet   
    const alphabet=getARandomAlphabet();
    // console.log(alphabet);

    // set the alphabet in the game display(shown it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet); 
  }

  function handelKeyboardPressed(event){
   const playerPressed=event.key;
//    console.log(playerPressed);
    if(playerPressed==='Escape'){
        gameOver();
    }
//    get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const acceptableAlphabet = currentAlphabet.toLowerCase();
    // console.log(  playerPressed, acceptableAlphabet);

    // check matched or not matched
    if(playerPressed===acceptableAlphabet){
        // update the score
        // 1:get teh current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText=currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        //2: increment the current score 1
        const newScore=currentScore+1;
        // set the new current score
        currentScoreElement.innerText=newScore;
        console.log(currentScoreElement.innerText);
        // start a new round
        removeBackgroundColorById(acceptableAlphabet);
        continueGame();
    }else{
         //1:get the current life
        const currentLifeElement =document.getElementById('current-life');
        const currentLifeText=currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        //  2: reduce the life count 
        const newLife=currentLife-1;
        console.log(newLife);
        // 3: set the new life count
        const setLife= currentLifeElement.innerText=newLife;
        // setLife=newLife;
        console.log(setLife);

        if(newLife===0){
            gameOver();
        }
    }
  
  }
  
  document.addEventListener('keyup', handelKeyboardPressed)

