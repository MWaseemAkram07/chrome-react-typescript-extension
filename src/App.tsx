import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Chrome Extension</h1>
        <p>This is a simple extension popup built with React and TypeScript.</p>
        <button onClick={() => alert('Hello from your extension!')}>
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
