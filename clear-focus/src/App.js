// App.js

import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App-header">
      <h1>Clear Form Family</h1>
      <div className="App-content">
        <div className="App-category">
          <label htmlFor="familyMember">Family Member</label>
          <input type="text" id="familyMember" />
        </div>
        <div className="App-category">
          <label htmlFor="task">Task</label>
          <input type="text" id="task" />
        </div>
        <button>Save</button>
      </div>
    </div>
  );
};

export default App;
