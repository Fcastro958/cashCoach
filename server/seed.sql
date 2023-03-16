INSERT INTO users (name, email) VALUES
  ('John Doe', 'john.doe@example.com'),
  ('Jane Doe', 'jane.doe@example.com');

INSERT INTO transactions (user_id, amount, description, category, date) VALUES
  (1, 50.00, 'Groceries', 'Food', '2023-03-10'),
  (1, 100.00, 'Gas', 'Transportation', '2023-03-11'),
  (2, 75.00, 'Dinner', 'Food', '2023-03-11');

INSERT INTO goals (user_id, name, target_amount, target_date) VALUES
  (1, 'Emergency Fund', 1000.00, '2023-12-31'),
  (2, 'Pay off Credit Card', 5000.00, '2024-06-30');

INSERT INTO budgets (user_id, category, amount) VALUES
  (1, 'Food', 200.00),
  (1, 'Transportation', 100.00),
  (2, 'Food', 300.00);
