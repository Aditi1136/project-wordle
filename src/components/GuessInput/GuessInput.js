import React from 'react'

const GuessInput = () => {
    const [guessInput, setGuessInput] = React.useState(" ")

    function handleEnter(event){
        event.preventDefault()
        console.log({guessInput})
        setGuessInput(' ')
        
    }
  return (
    <form onSubmit={handleEnter}>
        <label htmlFor='guess'>GuessInput</label>
        <input
        type='text'
        required
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guessInput}
        onChange={(event) => {
          const nextGuess = event.target.value
          setGuessInput(nextGuess);
        }}
        id="guess"
        />
        
    </form>
  )
}

export default GuessInput