import React from 'react'
import Guess from '../Guess/Guess'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'


const GuessRender = ({guessWord, answer}) => {
   
  return (
    <><div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((num)=>(
        <Guess key={num} value={guessWord[num]} answer={answer}/>
    ))} 
     </div>
    </>
    
  )
}

export default GuessRender