import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, markAsCompleted, deleteTask }) => {
  return (
    <div className="task-list">
      <h3>Pending Tasks</h3>
      <ul>
        {tasks.pending.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            isCompleted={false}
            onAction={() => markAsCompleted(index)}
          />
        ))}
      </ul>
      <h3>Completed</h3>
      <ul>
        {tasks.completed.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            isCompleted={true}
            onAction={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
