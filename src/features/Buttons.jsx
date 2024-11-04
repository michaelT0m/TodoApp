function Buttons({ text, onClick, width }) {
  return (
    <button
      className={`bg-blue-600 hover:bg-blue-700 p-2 rounded-md px-4 text-nowrap ${width}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Buttons;
