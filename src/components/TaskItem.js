import React from "react";

const TaskItem = ({ task, isCompleted, onAction }) => {
  return (
    <li className="task-item">
      <span style={isCompleted ? { textDecoration: "line-through" } : {}}>
        {task}
      </span>
      {isCompleted ? (
        <button onClick={onAction}>Delete</button>
      ) : (
        <input type="checkbox" onClick={onAction} />
      )}
    </li>
  );
};

export default TaskItem;
