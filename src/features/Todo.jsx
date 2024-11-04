import { LuCircle, LuCheck, LuTrash2, LuPenLine } from 'react-icons/lu';
import { useState, useEffect, useRef } from 'react';
import { SlOptionsVertical } from 'react-icons/sl';
import { Base, BaseEdit } from './Base';

export const Todo = ({
  todo,
  id,
  deleteTodo,
  editTodo,
  editId,
  editText,
  setEditText,
  cancelEdit,
  saveEdit,
}) => {
  const [isChecked, setIsisChecked] = useState(false);
  const [menu, setMenu] = useState(false);

  const dropdownRef = useRef();
  useEffect(() => {
    function outsideClicks(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenu(false);
      }
    }
    document.addEventListener('mousedown', outsideClicks);
    return () => {
      document.removeEventListener('mousedown', outsideClicks);
    };
  });
  return (
    <>
      {editId === id ? (
        <BaseEdit
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          saveFunc={saveEdit}
          cancelFunc={cancelEdit}
        />
      ) : (
        <Base>
          <div className="flex relative gap-4">
            <button onClick={() => setIsisChecked(!isChecked)}>
              {isChecked ? <LuCheck /> : <LuCircle />}
            </button>

            <span className={`${isChecked ? 'line-through text-grayText' : ''}`}>{todo}</span>
            <div className="absolute right-0 h-full flex text-xl items-center cursor-pointer">
              <div className="md:hidden" onClick={() => setMenu(!menu)}>
                <SlOptionsVertical />
              </div>
              <div className="md:flex gap-2 hidden ">
                <span
                  title="Edit"
                  className="flex items-center text-sm gap-1 text-grayText hover:text-[#cccccc]"
                  onClick={() => editTodo(id, todo)}
                >
                  <LuPenLine />
                  Edit
                </span>
                <span
                  title="Delete"
                  className="flex items-center text-sm gap-1 text-red-600"
                  onClick={() => deleteTodo(id)}
                >
                  <LuTrash2 />
                  Delete
                </span>
              </div>
            </div>
            <span
              className={`absolute right-0 cursor-pointer md:hidden ${menu ? 'block' : 'hidden'}`}
              onClick={() => setMenu(!menu)}
              ref={dropdownRef}
            >
              <Base p="px-4 py-2" className={`shadow-xl space-y-2`}>
                <span
                  className="flex items-center text-sm gap-1 "
                  onClick={() => editTodo(id, todo)}
                >
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
      )}
    </>
  );
};
