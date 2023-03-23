import React from 'react'

function NavBar() {
  return (
    <header className="App-header">
        <h1 className="style">CashCoach</h1>
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
  )
}

export default NavBar