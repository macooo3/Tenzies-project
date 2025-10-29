import { useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());
  const { width, height } = useWindowSize();

  const gameWon = dice.every(
    (die) => die.isHeld && dice[0].value === die.value
  );

  function generateAllNewDice() {
    // const tenNumArr = [];
    // for (let i = 0; i < 11; i++) {
    //   const rand = Math.floor(Math.random() * 6 + 1);
    //   tenNumArr.push(rand);
    // }
    // return tenNumArr;

    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDices() {
    setDice((prevDice) =>
      prevDice.map((dice) =>
        dice.isHeld ? dice : { ...dice, value: Math.ceil(Math.random() * 6) }
      )
    );
  }

  function hold(id) {
    setDice((prevDice) =>
      prevDice.map((dice) =>
        dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice
      )
    );
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={() => hold(dieObj.id)}
    />
  ));

  return (
    <main>
      <h1 className="title">Tenzies Game</h1>
      <p className="instructions">
        Roll until all dice are the same number. Click on die to freeze at its
        current value
      </p>
      <div className="die-container">{diceElements}</div>
      <button className="roll-button" onClick={rollDices}>
        {gameWon ? "New Game" : "Roll"}
      </button>
      {gameWon && <Confetti width={width} height={height} />}
    </main>
  );
}

export default App;
