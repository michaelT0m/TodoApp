import { LuCheckCircle } from "react-icons/lu";
import { Todo } from "./features/Todo.jsx";
import TodoApp from "./components/TodoApp.jsx";
import { useState } from "react";
function Review() {
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleCreateTask = () => {
    setShowCreateTask(!showCreateTask);
  };

  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const todoValue = inputValue.trim();
    if (inputValue.trim() === "") return;
    setTodos([{ id: Date.now(), todo: todoValue }, ...todos]);
    setInputValue("");
  };

  return (
    <>
      <div className="bg-[#1e1f22]">
        <div className="flex flex-col gap-6 justify-center mx-auto w-4/5 h-screen items-center text-white">
          <div
            className={`${
              !showCreateTask ? "block" : "hidden"
            } container rounded-md p-4 bg-neutral-700 border-neutral-600 border-2`}
          >
            <div
              onClick={handleCreateTask}
              className="flex items-center gap-4 cursor-pointer"
            >
              {" "}
              <LuCheckCircle /> Create Task
            </div>
          </div>

          {/* Create Todo */}
          <div
            className={`${
              showCreateTask ? "block" : "hidden"
            } container rounded-lg p-4 bg-neutral-700 border-neutral-600 border-2`}
          >
            <div className="w-full space-y-4 ">
              <div
                className={`border-2 border-gray-500 hover:border-gray-500 rounded-md flex gap-2 overflow-hidden `}
              >
                <input
                  type="text"
                  className="text-white w-full bg-transparent p-2 outline-none "
                  placeholder="Add a new task..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>

              <div className={`text-center`}>
                <button
                  onClick={addTodo}
                  className="bg-blue-700 p-2 rounded-md text-white font-medium hover:bg-blue-800"
                >
                  Add task
                </button>
              </div>
            </div>
          </div>

          {/* Display Todo  */}
          <div className="container space-y-4">
            {todos.map((task) => (
              <Todo key={task.id} UserTask={task.todo} />
            ))}
          </div>
        </div>
      </div>
      <TodoApp />
    </>
  );
}

export default Review;
