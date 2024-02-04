// AddTaskForm.js

import React, { useState } from 'react';
import axios from 'axios'; // install axios library "npm install axios"

const AddTaskForm = ({ AddTask }) => {
  const [familyMember, setFamilyMember] = useState('');
  const [task, setTask] = useState('');

  const handleSave = async () => {
    // Check if both family member and task are filled before saving
    if (familyMember.trim() === '' || task.trim() === '') {
      alert('Please enter family member name and task.');
      return;
    }

    try {
      // Send a POST request to the server to save the task
      await axios.post('http://localhost:3001/saveTask', { familyMember, task });

      // Call the parent component's function to handle saving
      AddTask({ familyMember, task });

      // Clear the input fields after saving
      setFamilyMember('');
      setTask('');
    } catch (error) {
      console.error('Error, cannot save task:', error);
      alert('Error, cannot save task. Please try again.');
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="familyMember">Family Member:</label>
        <input
          type="text"
          id="familyMember"
          value={familyMember}
          onChange={(e) => setFamilyMember(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="task">Task:</label>
        <input
          type="text"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default AddTaskForm;

