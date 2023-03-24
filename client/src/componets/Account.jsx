import React, { useState } from "react";


function Account() {
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [yearlyIncome, setYearlyIncome] = useState(0);
  const [budget, setBudget] = useState({ needs: 0, wants: 0, savings: 0 });

  function calculateBudget(income) {
    return {
      needs: income * 0.5,
      wants: income * 0.3,
      savings: income * 0.2,
    };
  }

  function handleMonthlyIncomeChange(e) {
    const newMonthlyIncome = parseFloat(e.target.value) || 0;
    setMonthlyIncome(newMonthlyIncome);
    setYearlyIncome(newMonthlyIncome * 12);
    setBudget(calculateBudget(newMonthlyIncome));
  }

  function handleYearlyIncomeChange(e) {
    const newYearlyIncome = parseFloat(e.target.value) || 0;
    setYearlyIncome(newYearlyIncome);
    setMonthlyIncome(newYearlyIncome / 12);
    setBudget(calculateBudget(newYearlyIncome / 12));
  }

  return (
    <div className="account-overview">
      <h3>Account Overview</h3>
      <label htmlFor="monthly-income">Monthly Income: </label>
      <input
        type="number"
        id="monthly-income"
        value={monthlyIncome}
        onChange={handleMonthlyIncomeChange}
      />
      <br />
      <label htmlFor="yearly-income">Yearly Income: </label>
      <input
        type="number"
        id="yearly-income"
        value={yearlyIncome}
        onChange={handleYearlyIncomeChange}
      />
      <br />
      <p>50% (Needs): ${budget.needs.toFixed(2)}</p>
      <p>30% (Wants): ${budget.wants.toFixed(2)}</p>
      <p>20% (Savings): ${budget.savings.toFixed(2)}</p>
    </div>
  );
}

export default Account;