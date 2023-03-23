import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CashCoach</h1>
        <nav className="App-nav">
          <ul>
            <li>Dashboard</li>
            <li>Budget</li>
            <li>Goals</li>
            <li>Transactions</li>
          </ul>
        </nav>
        <div className="App-user">
          <span>User</span>
        </div>
      </header>
      <div className="App-container">
        <div className="App-main">
          <div className="App-main-left">
            {/* This is where the content of each page will be displayed */}
          </div>
          <div className="App-main-right">
            {/* This is where the background image and website information will be displayed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

