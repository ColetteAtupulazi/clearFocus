import React from 'react';
import { Link } from 'react-router-dom';

const FamilyPage = () => {
    return (
        <div className="family-page">
            <h2>Family Page</h2>
             <Link to="/family-member">Add Family Member</Link> 
             {/* <a href='./FamilyMember'>test</a> */}
        </div>
    );
};

export default FamilyPage;
