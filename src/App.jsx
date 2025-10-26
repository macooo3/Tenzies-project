import { useState } from "react";
import Die from "./components/Die";

function App() {
  const generateAllNewDice = function () {
    // const tenNumArr = [];
    // for (let i = 0; i < 11; i++) {
    //   const rand = Math.floor(Math.random() * 6 + 1);
    //   tenNumArr.push(rand);
    // }
    // return tenNumArr;
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  };

  const [tenDie, setTenDie] = useState(generateAllNewDice())


  return (
    <main>
      <div className="die-container">
     {tenDie.map((num, key) => <Die key={key}>{num}</Die>)}
      </div>
    </main>
  );
}

export default App;
