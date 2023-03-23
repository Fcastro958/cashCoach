import React from 'react'

function Footer() {
    return (
        <footer className="App-footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} CashCoach. All rights reserved.</p>
            <nav className="footer-nav">
              <ul>
                <li>About</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
              </ul>
            </nav>
          </div>
        </footer>
      );
}

export default Footer