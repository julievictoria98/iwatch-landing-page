function ColorDot({ color }) {
  return (
    <div
      className={`rounded-full border-2 border-white w-7 h-7 ${color}`}
    ></div>
  );
}

export default ColorDot;
