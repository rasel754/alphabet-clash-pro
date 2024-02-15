// one way to add and remove hidden elements
// function play() {
//    const homeSection= document.getElementById('home-screen');
//    homeSection.classList.add('hidden');

//    const playGroundSection= document.getElementById('play-ground');
//    playGroundSection.classList.remove('hidden');
// }

// another way to add and remove hidden elements

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
function continueGame(){
    // generate a random alphabet 
    const alphabet=getARandomAlphabet();
    console.log(alphabet);

    // set the alphabet in the game display(shown it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet); 
  }


