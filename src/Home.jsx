import { Base } from './features/Base';
import { LuCalendar, LuCheckCircle, LuSearch} from 'react-icons/lu';
import { Todo } from './features/Todo.jsx';
import { useState } from 'react';
import Buttons from './features/Buttons.jsx';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [todoInput, setTodoInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');


  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('savedTodos')) || []);

  // Add Function
  const addTodo = () => {
    const todo = todoInput.trim();

    if (!todo) return;

    const todoObj = {
      id: Date.now(),
      todo: todo,
      priority,
      dueDate,
    };

    setTodos([todoObj, ...todos]);

    let savedTodo = JSON.parse(localStorage.getItem('savedTodos')) || [];
    savedTodo.push(todoObj);

    localStorage.setItem('savedTodos', JSON.stringify(savedTodo));
    setTodoInput('');
    setPriority;('medium')
    setDueDate('');
  };

  // Edit Function
  const editTodo = (id, todo) => {
    setEditId(id);
    setEditText(todo);
  };
  const saveEdit = () => {
    const updatedTodo = todos.map((todo) =>
      todo.id === editId ? { ...todo, todo: editText } : todo
    );
    setTodos(updatedTodo);
    localStorage.setItem('savedTodos', JSON.stringify(updatedTodo));

    setEditId(null);
    setEditText('');
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditText('');
  };

  // Delete Function
  const deleteTodo = (id) => {
    const updatedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodo);
    localStorage.setItem('savedTodos', JSON.stringify(updatedTodo));
  };

    const filteredTodos = todos.filter((todo) =>
      todo.todo.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="bg-background text-white">
      {/* <Review /> */}
      <div className="p-4 min-h-screen flex items-center justify-center w-4/5 mx-auto ">
        <div className="container flex mx-auto flex-col gap-4">
          {/*  */}

          <Base p="p-2 px-4b" className={`flex items-center gap-4`}>
            <div className="">
              <LuSearch fontSize={22}/>
            </div>
            <input
              type="text"
              placeholder="Search todos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent outline-none py-2"
            />
          </Base>
          {/*  */}

          <Base>
            <div className={`flex gap-4 items-center text-xl justify-center cursor-pointer`}>
              <LuCheckCircle />
              <span className="select-none" onClick={() => setIsVisible(!isVisible)}>
                {!isVisible ? 'Add task' : 'Tasks'}
              </span>
            </div>
            <div className={`${isVisible ? 'block' : 'hidden'}`}>
              <div
                className={` w-full rounded-md bg-neutral-700 border-neutral-600 hover:border-blue-600 border-2 flex items-center my-6 px-2`}
              >
                <input
                  type="text"
                  name=""
                  id=""
                  value={todoInput}
                  onChange={(e) => setTodoInput(e.target.value)}
                  placeholder="Add a new task..."
                  className="w-full bg-transparent outline-none py-2"
                  onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                />

                <span className="cursor-pointer bg-slate-00 md:flex items-center gap-2 hidden ">
                  <select
                    name=""
                    id=""
                    value={priority}
                    onClick={() => setShowDropDown(true)}
                    onChange={(e) => setPriority(e.target.value)}
                    className={`bg-transparent outline-none border-none `}
                  >
                    <option value="high" className="text-black">
                      High
                    </option>
                    <option value="medium" className="text-black">
                      Medium
                    </option>
                    <option value="low" className="text-black">
                      Low
                    </option>
                  </select>
                  <div className="relative">
                    <input
                      type="date"
                      name=""
                      id=""
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                      onClick={() => setShowDropDown(true)}
                      className={`bg-transparent  outline-none border-none w-6 bg-white opacity-0`}
                    />
                    <div className="absolute inset-0 w-full pointer-events-none">
                      <LuCalendar fontSize={24} className="cursor-pointer" />
                    </div>
                  </div>
                  {/* <div className=" justify-center m-1 hidden">
                    <Buttons text="Add Todo" onClick={addTodo} />
                  </div> */}
                </span>
              </div>
              {/* mobile */}
              <div className="flex justify-center text-blac gap-4 md:hidden">
                <select name="" id="" className="bg-transparent outline-none border-none">
                  <option value="high" className="text-black">
                    High
                  </option>
                  <option value="medium" className="text-black">
                    Medium
                  </option>
                  <option value="low" className="text-black">
                    Low
                  </option>
                </select>

                <div className="relative">
                  <input
                    type="date"
                    name=""
                    id=""
                    className="bg-transparent  outline-none border-none w-6 bg-white opacity-0"
                  />
                  <div className="absolute inset-0 w-full pointer-events-none">
                    <LuCalendar fontSize={22} className="cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </Base>

          <div className="space-y-4">
            {filteredTodos.map((todo) => (
              <Todo
                id={todo.id}
                key={todo.id}
                editId={editId}
                todo={todo.todo}
                editText={editText}
                editTodo={editTodo}
                saveEdit={saveEdit}
                cancelEdit={cancelEdit}
                deleteTodo={deleteTodo}
                priority={todo.priority}
                dueDate={todo.dueDate}
                setEditText={setEditText}
                filteredTodos={filteredTodos}
                searchTerm={searchTerm}
              />
            ))}
            {filteredTodos.length === 0 && searchTerm && (
              <div className="text-center py-8 text-gray-500">
                No todos found matching &#34;{searchTerm}&#34;
              </div>
            )}
            {filteredTodos.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No Todos add a todo by clicking the Add task button
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
