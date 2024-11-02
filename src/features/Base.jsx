import Buttons from "./Buttons";
export const Base = ({ children, p = "p-4", className }) => {
  return (
    <div
      className={` w-full rounded-md ${p} bg-neutral-700 border-neutral-600 border-2 ${className}`}
    >
      {children}
    </div>
  );
};
export const BaseEdit = ({ className, saveFunc, cancelFunc, onChange, value }) => {
  return (
    <div
      className={` w-full rounded-md p-4 bg-neutral-700 border-neutral-600 border-2 ${className} `}
    >
      <input type="text" className="w-full bg-transparent outline-none" value={value} onChange={onChange} onKeyDown={(e) => e.key === "Enter" && saveFunc()}/>
      <div className="flex items-center gap-4 justify-center">
        <Buttons text="Save" onClick={saveFunc} />
        <Buttons text="Cancel" onClick={cancelFunc} />
      </div>
    </div>
  );
};

