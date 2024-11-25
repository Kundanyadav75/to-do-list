import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./index.css";
const App = () => {
  const [tasks, setTasks] = useState({
    pending:   [
      "Buy groceries",
      "Finish project report",
      "Call the bank",
      "Schedule dentist appointment",
      "Plan weekend trip",
    ],
    completed: [
      "Read a book",
      "Clean the house",
      "Prepare presentation",
      "Update blog",
    ],
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);  
  const [isRightbarOpen, setIsRightbarOpen] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Add a new task
  const addTask = (task) => {
    if (task.trim()) {
      setTasks((prev) => ({
        ...prev,
        pending: [...prev.pending, task],
      }));
    }
  };

  // Mark a task as completed
  const markAsCompleted = (index) => {
    const completedTask = tasks.pending.splice(index, 1);
    setTasks((prev) => ({
      pending: [...prev.pending],
      completed: [...prev.completed, ...completedTask],
    }));
  };

  // Delete a completed task
  const deleteTask = (index) => {
    const newCompleted = [...tasks.completed];
    newCompleted.splice(index, 1);
    setTasks((prev) => ({
      ...prev,
      completed: newCompleted,
    }));
  };

  return (
    <div className={`app-container ${isDarkTheme ? "dark" : "light"}`}>
      <Header
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        toggleTheme={() => setIsDarkTheme(!isDarkTheme)}
        isDarkTheme={isDarkTheme}
        toggleRightbar={() => setIsRightbarOpen(!isRightbarOpen)}
      />
      <div className="content">
        {isSidebarOpen && <Sidebar tasksCount={tasks.pending.length + tasks.completed.length} />}
        {isRightbarOpen && <Rightbar />}
        <main className="main">
          <TaskInput addTask={addTask} />
          <TaskList
            tasks={tasks}
            markAsCompleted={markAsCompleted}
            deleteTask={deleteTask}
          />
        </main>
      </div>
    </div>
  );
};

export default App;
