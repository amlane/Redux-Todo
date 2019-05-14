import React from 'react';
import './App.css';

import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
    <header className="header">
      <h1>TO DO</h1>
      <p> The Remindery App</p>
    </header>
      <ToDoList />
    </div>
  );
}

export default App;
