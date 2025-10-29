export default function Die({ value, isHeld, hold, ref }) {
  const styleBackground = {
    backgroundColor: isHeld && "#59E391",
  };

  return (
    <button
      aria-pressed={isHeld}
      aria-label={`Die ${value} is ${isHeld ? "held" : "not held"}`}
      style={styleBackground}
      className="die"
      onClick={hold}
      ref={ref}
    >
      {value}
    </button>
  );
}
