import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FamilyProfiles = () => {
  const navigate = useNavigate();
  const [familyMembers, setFamilyMembers] = useState([]);

  const goToAddTaskForm = () =>{
    navigate ("/AddTaskForm")
  }
  
  const addFamilyMember = () => {
    // Logic to add a family member
    // For simplicity, let's just add a random name
    const randomName = `Family Member ${familyMembers.length + 1}`;
    setFamilyMembers([...familyMembers, randomName]);
  };

  return (
    <div className="family-page">
      <h1>Family Profiles</h1>
      <ul>
        {familyMembers.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
      <button onClick={goToAddTaskForm} className="add-family-btn">
        Add Family Member
      </button>
    </div>
  );
};

export default FamilyProfiles;
