import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import Score from './score';
import Board from './board';


const App = () => {
    const numberOfElements = 10
    const [score, setScore] = useState(0)
    const [redIndex, setRedIndex] = useState(getRedIndex())

    function updateScore(delta)
    {
        // let newScore = score + delta;
        // setScore(newScore)
        setScore(score => score + delta)
    }

    function getRedIndex() {
        return Math.floor(Math.random()*numberOfElements)
    }

    function getNewRedIndex()
    {
        let newRedIndex = getRedIndex()
        if (newRedIndex === redIndex) {
            newRedIndex = (newRedIndex + 1) % numberOfElements
        }
        return newRedIndex
    }

    function resetRedIndex()
    {
        let newRedIndex = getNewRedIndex()
        setRedIndex(newRedIndex)
    }

    function resetNewGame()
    {
        setScore(0)
        resetRedIndex()
    }

  return (
    <div>
      <Score score={score} resetNewGame={resetNewGame}/>
      <hr />
      <Board
            numberOfElements={numberOfElements}
            redIndex={redIndex}
            resetRedIndex={resetRedIndex}
            updateScore={updateScore}
      />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);