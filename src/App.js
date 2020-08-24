import React from 'react';
import Counter from './components/Counter'
import CounterDisplay from './components/CounterDisplay'
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr/>
      <CounterDisplay/>
    </div>
  );
}

export default App;
