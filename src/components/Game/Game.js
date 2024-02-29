import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessRender from '../GuessRender/GuessRender';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WinBanner from '../WinBanner';
import LostBanner from '../LostBanner';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessWord,setGuessWord] = React.useState([])
  const [guessStatus,setGuessStatus] = React.useState('running')
 

  function handleSubmitOnRender(guess){
    const nextGuess = [...guessWord,guess] 
    setGuessWord(nextGuess)
    console.log(guessWord)

    if (guess.toUpperCase() === answer){
      setGuessStatus('won')
      console.log("WON")
    }
    else if (nextGuess.length>=NUM_OF_GUESSES_ALLOWED){
      console.log("lost")
      setGuessStatus('lost')
    }
  }

 
    
  
  return <>
    <GuessRender guessWord={guessWord} answer={answer} />
   <GuessInput guessStatus= {guessStatus} handleSubmitOnRender={handleSubmitOnRender} answer={answer}/>
   {guessStatus === 'won' && (
        <WinBanner numOfGuesses={guessWord.length} />
      )}
    {guessStatus === 'lost' && <LostBanner answer={answer} />}
   
  </>;

}



export default Game;
