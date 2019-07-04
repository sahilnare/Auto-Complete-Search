import React from 'react';
import './App.css';
import AutoComplete from "./components/auto-complete"
import items from './components/names'

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <AutoComplete items={items} />
      </div>
    </div>
  );
}

export default App;
