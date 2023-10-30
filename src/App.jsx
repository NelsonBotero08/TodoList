import { useRef, useState } from "react";
import "./App.css";
import TaskComponent from "./components/TaskComponent";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const inputTask = useRef();

  const handleDeleteTask = (item) => {
    setTask((prevTask) => prevTask.filter((taskItem) => taskItem !== item));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = inputTask.current.value;
    if (newTask.trim() !== "") {
      setTask((prevTask) => [newTask, ...prevTask]);
      setInputValue("");
    }
  };

  return (
    <div className="app">
      <h1 className="app__title"> TodoList</h1>
      <section className="app__createTask createTask">
        <h2 className="createTask__title">Crear tareas</h2>
        <form className="createTask__form">
          <input
            className="createTask__input"
            type="text"
            ref={inputTask}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="createTask__btn" onClick={handleAddTask}>
            Agregar Tarea
          </button>
        </form>
        <div className="createTask__task">
          {task.map((item, index) => (
            <TaskComponent
              key={index}
              item={item}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
