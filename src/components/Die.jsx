export default function Die({ value, isHeld, hold }) {
  const styleBackground = {
    backgroundColor: isHeld && "#59E391",
  };

  return (
    <button style={styleBackground} className="die" onClick={hold}>
      {value}
    </button>
  );
}
