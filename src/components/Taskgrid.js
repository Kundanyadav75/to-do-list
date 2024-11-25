import React, { useState } from "react";
import "./TaskGrid.css";

const TaskGrid = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries", important: false },
    { id: 2, text: "Finish project report", important: true },
    { id: 3, text: "Call the bank", important: false },
    { id: 4, text: "Schedule dentist appointment", important: false },
    { id: 5, text: "Plan weekend trip", important: false },
  ]);

  const toggleImportant = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  return (
    <div className="task-grid-container">
      {/* Add Task Section */}
      <div className="add-task-section">
        <div className="add-task-input">
          <input type="text" placeholder="Add A Task" />
          <button className="add-task-btn">ADD TASK</button>
        </div>
        <div className="task-icons">
          <i className="icon bell-icon">🔔</i>
          <i className="icon refresh-icon">🔄</i>
          <i className="icon calendar-icon">📅</i>
        </div>
      </div>

      {/* Tasks Grid */}
      <div className="tasks-grid">
        {tasks.map((task) => (
          <div key={task.id} className="task-card">
            <input type="checkbox" />
            <span>{task.text}</span>
            <button
              className={`important-btn ${
                task.important ? "important-active" : ""
              }`}
              onClick={() => toggleImportant(task.id)}
            >
              {task.important ? "★" : "☆"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskGrid;
