import React from 'react'


const GuessInput = ({handleSubmitOnRender}) => {
    const [guessInput, setGuessInput] = React.useState("")
    
    function handleEnter(event){
        event.preventDefault()
        console.log({guessInput})
        handleSubmitOnRender(guessInput)
        setGuessInput('') 
    }
  return (
    <>
    
   
    <form className="guess-input-wrapper"
    onSubmit={handleEnter}>
        <label htmlFor='guess'>GUESS THE WORD</label>
        <input
        type='text'
        required
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guessInput}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase()
          setGuessInput(nextGuess);
        }}
        id="guess"
        />
        
    </form>
    </>
  )
}

export default GuessInput