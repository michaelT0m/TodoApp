import "./styles/style.css";
import TodoApp from "./components/TodoApp.jsx";
import { useState } from "react";
function Home() {
    const [showCreateTask, setShowCreateTask] = useState(false)
    const handleCreateTask = () => {
        setShowCreateTask(!showCreateTask)
    }
  return (
    <>
      <div className="bg-[#1e1f22]">
        <div className="flex flex-col gap-6 justify-center mx-auto w-4/5 h-screen items-center">
          <div
            className={`${showCreateTask ? 'block' : 'hidden'} container rounded-lg p-4 bg-neutral-700 border-neutral-600 border-2`}
          >
            <div className="w-full text-center space-y-4">
              <input
                type="text"
                className="text-white w-full bg-transparent border-2 p-2 hover:border-gray-500 rounded-md outline-none border-gray-500 "
                placeholder="Add a new task..."
              />

              <button
                className="bg-blue-700 p-2 rounded-md text-white font-medium hover:bg-blue-800"
              >
                Add task
              </button>
            </div>
          </div>

          <div className=" container rounded-md p-4 bg-neutral-700 border-neutral-600 border-2">
            <div onClick={handleCreateTask}>Create Task</div>
          </div>
        </div>
      </div>
      <TodoApp />
    </>
  );
}

export default Home;
