import React from "react";
import "../Styles/TaskComponents.css";

const TaskComponent = ({ item, handleDeleteTask }) => {
  return (
    <div>
      <article className="taskContainer">
        <p className="taskContainer__item">{item}</p>
        <button
          className="taskContainer__btn"
          onClick={() => handleDeleteTask(item)}
        >
          Eliminar
        </button>
      </article>
    </div>
  );
};

export default TaskComponent;
