import { useState } from "react";

//When the user makes a guess, add that guess to the App component's guessedPokemon state.

export const setPokemon = ({}) => {
  const [text, setText] = useState("");

  const handleClick = (event) => {
    event.preventDefault();

    setText("");
    setCurrGuess(text);
  };
  return (
    //input field for player to input guesses
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        I Choose You!
      </button>
    </>
  );
};
