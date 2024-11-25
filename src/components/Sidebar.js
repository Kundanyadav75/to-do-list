import React from "react";

const Sidebar = ({ tasksCount, isSidebarOpen }) => {
  return (
    <aside className={`sidebar ${isSidebarOpen ? "visible" : "hidden"}`}>
      <div className="profile">
        <img src="https://via.placeholder.com/100" alt="Profile" />
        <h3>Hey, KUNDAN KUMAR</h3>
      </div>
      <nav className="nav">
        <ul>
          <li className="nav-item">All Tasks</li>
          <li className="nav-item active">Today</li>
          <li className="nav-item">Important</li>
          <li className="nav-item">Planned</li>
          <li className="nav-item">Assigned to me</li>
          <li className="nav-item">+ Add List</li>
        </ul>
      </nav>
      <div className="today-tasks">
        <h4>Today Tasks</h4>
        <div className="progress-circle">
          <span>{tasksCount}</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
