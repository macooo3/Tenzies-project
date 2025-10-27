import { useState } from "react";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    // const tenNumArr = [];
    // for (let i = 0; i < 11; i++) {
    //   const rand = Math.floor(Math.random() * 6 + 1);
    //   tenNumArr.push(rand);
    // }
    // return tenNumArr;
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }

  function rollDices() {
    setDice(generateAllNewDice());
  }

  const diceElements = dice.map((num, index) => (
    <Die key={index} value={num} />
  ));

  return (
    <main>
      <div className="die-container">
        {diceElements}
      </div>
        <button className="roll-button" onClick={rollDices}>Roll</button>
    </main>
  );
}

export default App;
