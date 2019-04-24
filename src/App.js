import React from 'react';
import './App.css';
import Greet from './Greet'
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet whom="ANTHONY"/>
        <Counter />
      </header>
    </div>
  );
}

export default App;
