import React, { useState } from 'react';
import AddTaskForm from './AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    // Add the new task to the tasks array
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>To-Do List App</h1>
      {/* Render the list of tasks here if needed */}
      <AddTaskForm onAddTask={handleAddTask} />
    </div>
  );
};

export default App;
