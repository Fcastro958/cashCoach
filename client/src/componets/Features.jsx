import React from "react";

export default function Features() {
  return (
    <div className="App-features">
      <h1 className="style">what do we have to offer?</h1>
      <div className="feature">
        <h3 className="style">Customizable Budgets</h3>
        <p>
          Easily create and manage budgets that fit your financial needs. Set
          limits on specific categories to stay on track with your spending.
        </p>
      </div>
      <div className="feature">
        <h3 className="style">Financial Goals</h3>
        <p>
          Set short-term and long-term financial goals, and track your progress
          towards achieving them. Break down your goals into smaller, achievable
          milestones.
        </p>
      </div>
      <div className="feature">
        <h3 className="style">Transaction Tracking</h3>
        <p>
          Automatically import and categorize your transactions from various
          sources. Stay organized by reviewing your spending habits and
          identifying areas for improvement.
        </p>
      </div>
      {/* Add more features here */}
    </div>
  );
}
