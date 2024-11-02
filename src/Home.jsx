import { Base } from "./features/Base";
import { LuCheckCircle } from "react-icons/lu";
import Buttons from "./features/Buttons.jsx";
import { Todo } from "./features/Todo.jsx";
import { useState } from "react";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("savedTodos")) || []
  );

  const addTodo = (e) => {
    e.preventDefault();

    const todo = todoInput.trim();

    if (!todo) return;

    const todoObj = {
      id: Date.now(),
      todo: todo,
    };

    setTodos([todoObj, ...todos]);

    let savedTodo = JSON.parse(localStorage.getItem("savedTodos")) || [];
    savedTodo.push(todoObj);

    localStorage.setItem("savedTodos", JSON.stringify(savedTodo));
    setTodoInput("");
  };

  const deleteTodo = (id) => {
    const updatedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodo);
    localStorage.setItem("savedTodos", JSON.stringify(updatedTodo));
  };

  return (
    <div className="bg-background text-white">
      {/* <Review /> */}
      <div className="h-screen flex items-center justify-center w-4/5 mx-auto">
        <div className="container flex mx-auto flex-col gap-4">
          <Base>
            <div
              className={`${
                isVisible ? "" : ""
              } flex gap-4 items-center text-xl justify-center cursor-pointer`}
            >
              <LuCheckCircle />
              <span
                className="select-none"
                onClick={() => setIsVisible(!isVisible)}
              >
                {!isVisible ? "Add task" : "Tasks"}
              </span>
            </div>
            <div className={`${isVisible ? "block" : "hidden"}`}>
              <input
                type="text"
                name=""
                id=""
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
                placeholder="Add a new task..."
                className="w-full bg-transparent outline-none border-neutral-500  border-2 rounded-md p-2 my-6"
              />
              <div className="flex justify-center">
                <Buttons text="Add Todo" onClick={addTodo} />
              </div>
            </div>
          </Base>
          <div className="space-y-4">
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                UserTask={todo.todo}
                deleteTodo={deleteTodo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
