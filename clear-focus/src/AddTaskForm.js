import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [familyMember, setFamilyMember] = useState('');
  const [task, setTask] = useState('');

  const handleSave = () => {
    // Check if both family member and task are filled before saving
    if (familyMember.trim() === '' || task.trim() === '') {
      alert('Please enter both family member and task.');
      return;
    }

    // Call the parent component's function to handle saving
    onAddTask({ familyMember, task });

    // Clear the input fields after saving
    setFamilyMember('');
    setTask('');
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
