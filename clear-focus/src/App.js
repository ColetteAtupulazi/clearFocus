import React from 'react';
import './App.css';
import FamilyPage from "./FamilyPage";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTaskForm from './AddTaskForm'; 

const App = () => {
    return (
        <Router>
            <div className="App-header">
                <h1>Clear Focus Family</h1>
                <div className="App-content">
                    <div className="App-category">
                        <label htmlFor="familyMember">Family Member</label>
                        <input type="text" id="familyMember" />
                    </div>
                    <div className="App-category">
                        <label htmlFor="task">Tasks</label>
                        <input type="text" id="task" />
                    </div>
                    <button>Save</button>

                    <Routes>
                    <Route exact path="/" component={<FamilyPage />} />
                    <Route exact path="/add-task" component={<AddTaskForm/>} /> 
                    </Routes>
                        
                  
                </div>
            </div>
        </Router>
    );
};

export default App;
