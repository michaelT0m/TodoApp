function Buttons({ text, onClick, width, bg = 'bg-blue-600 hover:bg-blue-700' }) {
  return (
    <button className={`${bg} p-2 rounded-md px-4 text-nowrap ${width}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Buttons;
