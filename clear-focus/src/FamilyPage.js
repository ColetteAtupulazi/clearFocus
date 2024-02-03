// FamilyPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const FamilyPage = () => {
    return (
        <div className="family-page">
            <h2>Family Page</h2>
            <Link to="/add-member">Add Family Member</Link>
        </div>
    );
};

export default FamilyPage;
