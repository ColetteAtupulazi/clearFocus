// App.js

import React from 'react';
import './App.css';
import Homepage from "./Homepage";

const App = () => {
  return (
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
            <Homepage />
        </div>
      </div>
  );
};

export default App;
