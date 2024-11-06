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
  priority,
  dueDate,
  filteredTodos,
  searchTerm,
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

  const priorityChecker = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-500';
      case 'medium':
        return 'text-orange-500';
      case 'low':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };
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
                {isChecked ? (
                  <LuCheck className="text-green-500" />
                ) : (
                  <LuCircle className={`${priorityChecker(priority)} md:text-gray-400`} />
                )}
              </button>

              <span className={` ${isChecked ? 'line-through text-grayText' : ''} `}>{todo}</span>

              {/* Desktop */}
              <div className="absolute right-0 h-full flex text-xl items-center cursor-default">
                <div className="md:hidden" onClick={() => setMenu(!menu)}>
                  <SlOptionsVertical />
                </div>
                <div className="md:flex items-center gap-4 hidden ">
                  <span title="priority" className={`text-sm ${priorityChecker(priority)}`}>
                    {priority}
                  </span>
                  <span title="Due Date" className={`text-sm text-gray-500 `}>
                    {dueDate}
                  </span>
                  <span
                    title="Edit"
                    className="text-grayText hover:text-[#cccccc] cursor-pointer"
                    onClick={() => editTodo(id, todo)}
                  >
                    <LuPenLine />
                    {/* Edit */}
                  </span>
                  <span
                    title="Delete"
                    className="text-red-600 cursor-pointer"
                    onClick={() => deleteTodo(id)}
                  >
                    <LuTrash2 />
                  </span>
                </div>
              </div>

              {/* Mobile */}
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
