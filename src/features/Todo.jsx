import { LuCircle, LuCheck } from "react-icons/lu";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";

import { Base } from './Base'
export const Todo = ({ UserTask }) => {
  const [isChecked, setIsisChecked] = useState(false);
  return (
    <Base>
      <div className="flex relative gap-4">
        <button onClick={() => setIsisChecked(!isChecked)}>
          {isChecked ? <LuCheck /> : <LuCircle />}
        </button>

        <span className={`${isChecked ? "line-through" : ""}`}>{UserTask}</span>
        <div className="bg-black absolute right-0 h-full flex text-xl items-center cursor-pointer">
          <SlOptionsVertical />
        </div>
      </div>
    </Base>
  );
};

