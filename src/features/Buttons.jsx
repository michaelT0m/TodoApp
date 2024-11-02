function Buttons({ text, onClick }) {
  return (
    <button
      className={`bg-blue-600 hover:bg-blue-700 p-2 rounded-md px-4 text-nowrap`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Buttons;
