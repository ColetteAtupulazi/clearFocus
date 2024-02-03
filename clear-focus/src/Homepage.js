// FamilyPage.js

import React, { useState } from 'react';

const Homepage = () => {
    const [familyMembers, setFamilyMembers] = useState([]);

    const addFamilyMember = () => {
        // Logic to add a family member
        // For simplicity, let's just add a random name
        const randomName = `Family Member ${familyMembers.length + 1}`;
        setFamilyMembers([...familyMembers, randomName]);
    };

    return (
        <div className="family-page">
            <h1>Family Members</h1>
            <ul>
                {familyMembers.map((member, index) => (
                    <li key={index}>{member}</li>
                ))}
            </ul>
            <button onClick={addFamilyMember} className="add-member-btn">
                Add Family Member
            </button>
        </div>
    );
};

export default Homepage;
