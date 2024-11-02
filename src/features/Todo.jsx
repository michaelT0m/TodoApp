import { LuCircle, LuCheck, LuTrash2, LuPenLine } from "react-icons/lu";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
// import { FiEdit3 } from "react-icons/fi";

import { Base } from "./Base";
export const Todo = ({ UserTask, id, deleteTodo }) => {
  const [isChecked, setIsisChecked] = useState(false);

  const [menu, setMenu] = useState(false);
  return (
    <Base>
      <div className="flex relative gap-4">
        <button onClick={() => setIsisChecked(!isChecked)}>
          {isChecked ? <LuCheck /> : <LuCircle />}
        </button>

        <span className={`${isChecked ? "line-through" : ""}`}>{UserTask}</span>
        <div
          className="absolute right-0 h-full flex text-xl items-center cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          <SlOptionsVertical />
        </div>
        <span
          className={`absolute right-0 cursor-pointer ${
            menu ? "block" : "hidden"
          }`}
          onClick={() => setMenu(!menu)}
        >
          <Base>
            <span className="flex items-center text-sm gap-1">
              <LuPenLine />
              Edit
            </span>
            <span
              className="flex items-center text-sm gap-1 text-red-600"
              onClick={() => deleteTodo(id)}
            >
              <LuTrash2 />
              Delete
            </span>
          </Base>
        </span>
      </div>
    </Base>
  );
};
