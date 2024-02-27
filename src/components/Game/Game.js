import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessRender from '../GuessRender/GuessRender';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessWord,setGuessWord] = React.useState([])

  function handleSubmitOnRender(guess){
    setGuessWord([...guessWord,guess])
    console.log(guessWord)

  }
  return <>
    <GuessRender guessWord={guessWord} answer={answer} />
   <GuessInput handleSubmitOnRender={handleSubmitOnRender} />
   
  </>;

}



export default Game;
