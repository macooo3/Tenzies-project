export default function Die({ value, isHeld, hold, id}) {
    const styleBackground = {
        backgroundColor: isHeld && '#59E391'
    }

  return (
    <button style={styleBackground} className="die" onClick={()=> hold(id)}>
      {value}
    </button>
  );
}
