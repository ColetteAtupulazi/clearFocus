// App.js

import React from 'react';
import './App.css';
import FamilyPage from "./FamilyPage";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddTaskForm from './AddTaskForm'; // Assuming this is intended for adding family members

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
                    <Switch>
                        <Route exact path="/" component={FamilyPage} />
                        <Route exact path="/add-member" component={AddTaskForm} /> {/* Use AddTaskForm here */}
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
