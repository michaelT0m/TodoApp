import { FaTimes } from "react-icons/fa";
export const Base = ({ children, p = "p-4", className, width="w-full" }) => {
  return (
    <div
      className={` ${width} rounded-md ${p} bg-neutral-700 border-neutral-600 border-2 ${className}`}
    >
      {children}
    </div>
  );
};
export const BaseEdit = ({ className, saveFunc, cancelFunc, onChange, value }) => {
  return (
    <div
      className={` w-full rounded-md p-4 bg-neutral-700 border-neutral-600 hover:border-blue-600 border-2 ${className} flex items-center`}
    >
      <input
        type="text"
        className="w-full bg-transparent outline-none"
        value={value}
        onChange={onChange}
        onKeyDown={(e) => e.key === "Enter" && saveFunc()}
      />
      <span onClick={cancelFunc} className="cursor-pointer">
        <FaTimes />
      </span>
    </div>
  );
};

