import React from 'react';
import './App.css';

import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App glowing">
      <h1>To Do App</h1>
      <ToDoList />
    </div>
  );
}

export default App;
