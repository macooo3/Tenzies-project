import { useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    // const tenNumArr = [];
    // for (let i = 0; i < 11; i++) {
    //   const rand = Math.floor(Math.random() * 6 + 1);
    //   tenNumArr.push(rand);
    // }
    // return tenNumArr;

    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: true,
        id: nanoid(),
      }));
  }

  function rollDices() {
    setDice(generateAllNewDice());
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      style={{ backgroundColor: dieObj.isHeld && "#59E391" }}
      key={dieObj.id}
      value={dieObj.value}
    />
  ));

  return (
    <main>
      <div className="die-container">{diceElements}</div>
      <button className="roll-button" onClick={rollDices}>
        Roll
      </button>
    </main>
  );
}

export default App;
