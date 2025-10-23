import { useState } from "react";
import Die from "./components/Die";

function App() {
  return (
    <main>
      <container className="die-container">
        <Die value={3} />
        <Die value={3} />
        <Die value={3} />
        <Die value={3} />
        <Die value={3} />
        <Die value={3} />
        <Die value={3} />
        <Die value={3} />
        <Die value={3} />
        <Die value={3} />
      </container>
    </main>
  );
}

export default App;
