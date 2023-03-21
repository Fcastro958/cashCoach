/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const port = 3000;
const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'cashcoach',
    password: 'docker',
    port: 5432,

});
app.use(cors());
app.use(express.json());
// to get all the users 
app.get('/user', (req, res)=>{
    async function getUser(){
        try{
            const result = await pool.query('SELECT * FROM users');
            res.status(200).send(result.rows);
        }catch(e){
            console.log(e.stack);
        }
    }
    getUser();
});
// to get a user by id
app.get('/user/:id', async (req, res) => {
    async function getUserById(){
        try{
            const result = await pool.query(`SELECT * FROM users WHERE id = ${req.params.id}`);
            if(result.rows.length === 0){
                res.sendStatus(404);
            }else{
                res.status(200).send(result.rows[0]);
            }
        }catch(e){
            console.log(e.stack);
        }
    }
    getUserById();
});
// to create a user
app.post('/user', async (req, res) => {
    async function createUser(){
        try{
            let user = req.body;
            let name = user.name;
            let email = user.email;
            const result = await pool.query(`INSERT INTO users (name, email) VALUES ('${name}', '${email}') RETURNING *`);
            res.status(201).send(result.rows[0]);
        }catch(e){
            console.e(e.stack);
        }
    }
    createUser();
});

app.delete('/user/:id', (req, res)=>{
    async function deleteUser(){
        try{
            const result = await pool.query(`Delete From users WHERE id = ${req.params.id} RETURNING *`);
            if(result.rows.length === 0){
                res.sendStatus(404);
            }else{
                res.status(200).send(result.rows[0]);
            }
        }catch(e){
            console.error(e.stack);
        }
    }
    deleteUser();
});

app.patch('/user/:id', (req, res)=>{
    async function updateUser(){
        try{
            let user = req.body;
            let name = user.name;
            let email = user.email;
            const result = await pool.query(`UPDATE users SET name = '${name}', email = '${email}' WHERE id = ${req.params.id} RETURNING *`);
            if(result.rows.length === 0){
                res.sendStatus(404);
            }else{
                res.status(200).send(result.rows[0]);
            }
        }catch(e){
            console.error(e.stack);
        }
    }
    updateUser();
});

// Get all transactions
app.get('/transactions', async (req, res) => {
    async function getTransactions() {
        try {
            const result = await pool.query('SELECT * FROM transactions');
            res.status(200).send(result.rows);
        } catch (e) {
            console.log(e.stack);
        }
    }
    getTransactions();
});

// Get a transaction by ID
app.get('/transactions/:id', async (req, res) => {
    async function getTransactionById() {
        try {
            const result = await pool.query(`SELECT * FROM transactions WHERE id = ${req.params.id}`);
            if (result.rows.length === 0) {
                res.sendStatus(404);
            } else {
                res.status(200).send(result.rows[0]);
            }
        } catch (e) {
            console.log(e.stack);
        }
    }
    getTransactionById();
});

// Create a transaction
app.post('/transactions', async (req, res) => {
    async function createTransaction() {
        try {
            let transaction = req.body;
            let user_id = transaction.user_id;
            let amount = transaction.amount;
            let description = transaction.description;
            let category = transaction.category;
            let date = transaction.date;
            const result = await pool.query(`INSERT INTO transactions (user_id, amount, description, category, date) VALUES (${user_id}, ${amount}, '${description}', '${category}', '${date}') RETURNING *`);
            res.status(201).send(result.rows[0]);
        } catch (e) {
            console.error(e.stack);
        }
    }
    createTransaction();
});

// Delete a transaction by ID
app.delete('/transactions/:id', async (req, res) => {
    async function deleteTransaction() {
        try {
            const result = await pool.query(`DELETE FROM transactions WHERE id = ${req.params.id} RETURNING *`);
            if (result.rows.length === 0) {
                res.sendStatus(404);
            } else {
                res.status(200).send(result.rows[0]);
            }
        } catch (e) {
            console.error(e.stack);
        }
    }
    deleteTransaction();
});

// Update a transaction by ID
app.patch('/transactions/:id', async (req, res) => {
    async function updateTransaction() {
        try {
            let transaction = req.body;
            let user_id = transaction.user_id;
            let amount = transaction.amount;
            let description = transaction.description;
            let category = transaction.category;
            let date = transaction.date;
            const result = await pool.query(`UPDATE transactions SET user_id = ${user_id}, amount = ${amount}, description = '${description}', category = '${category}', date = '${date}' WHERE id = ${req.params.id} RETURNING *`);
            if (result.rows.length === 0) {
                res.sendStatus(404);
            } else {
                res.status(200).send(result.rows[0]);
            }
        } catch (e) {
            console.error(e.stack);
        }
    }
    updateTransaction();
});
// Get all goals
app.get('/goals', async (req, res) => {
    async function getGoals() {
        try {
            const result = await pool.query('SELECT * FROM goals');
            res.status(200).send(result.rows);
        } catch (e) {
            console.log(e.stack);
        }
    }
    getGoals();
});

// Get a goal by ID
app.get('/goals/:id', async (req, res) => {
    async function getGoalById() {
        try {
            const result = await pool.query(`SELECT * FROM goals WHERE id = ${req.params.id}`);
            if (result.rows.length === 0) {
                res.sendStatus(404);
            } else {
                res.status(200).send(result.rows[0]);
            }
        } catch (e) {
            console.log(e.stack);
        }
    }
    getGoalById();
});

// Create a goal
app.post('/goals', async (req, res) => {
    async function createGoal() {
        try{
            let goal = req.body;
            let user_id = goal.user_id;
            let name = goal.name;
            let target_amount = goal.target_amount;
            let current_amount = goal.current_amount;
            let target_date = goal.target_date;
            const result = await pool.query(`INSERT INTO goals (user_id, name, target_amount, current_amount, target_date) VALUES (${user_id}, '${name}', ${target_amount}, ${current_amount}, '${target_date}') RETURNING *`);
            res.status(201).send(result.rows[0]);
        } catch (e) {
            console.error(e.stack);
        }
    }
    createGoal();

});

// Delete a goal by ID
app.delete('/goals/:id', async (req, res) => {
    async function deleteGoal() {
        try {
            const result = await pool.query(`DELETE FROM goals WHERE id = ${req.params.id} RETURNING *`);
            if (result.rows.length === 0) {
                res.sendStatus(404);
            } else {
                res.status(200).send(result.rows[0]);
            }
        } catch (e) {
            console.error(e.stack);
        }
    }
    deleteGoal();
});

// Update a goal by ID
app.patch('/goals/:id', async (req, res) => {
    async function updateGoal() {
        try {
            let goal = req.body;
            let user_id = goal.user_id;
            let name = goal.name;
            let target_amount = goal.target_amount;
            let current_amount = goal.current_amount;
            let target_date = goal.target_date;
            const result = await pool.query(`UPDATE goals SET user_id = ${user_id}, name = '${name}', target_amount = ${target_amount}, current_amount = ${current_amount}, target_date = '${target_date}' WHERE id = ${req.params.id} RETURNING *`);
            if (result.rows.length === 0) {
                res.sendStatus(404);
            } else {
                res.status(200).send(result.rows[0]);
            }
        } catch (e) {
            console.error(e.stack);
        }
    }
    updateGoal();
});

app.get('/budgets', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM budgets');
        res.status(200).send(result.rows);
    } catch (e) {
        console.error(e.stack);
    }
});

app.get('/budgets/:id', async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM budgets WHERE id = ${req.params.id}`);
        if (result.rows.length === 0) {
            res.sendStatus(404);
        } else {
            res.status(200).send(result.rows[0]);
        }
    } catch (e) {
        console.error(e.stack);
    }
});

app.post('/budgets', async (req, res) => {
    try {
        let budget = req.body;
        let user_id = budget.user_id;
        let category = budget.category;
        let amount = budget.amount;
        const result = await pool.query(`INSERT INTO budgets (user_id, category, amount) VALUES (${user_id}, '${category}', ${amount}) RETURNING *`);
        res.status(201).send(result.rows[0]);
    } catch (e) {
        console.error(e.stack);
    }
});

app.delete('/budgets/:id', async (req, res) => {
    try {
        const result = await pool.query(`DELETE FROM budgets WHERE id = ${req.params.id} RETURNING *`);
        if (result.rows.length === 0) {
            res.sendStatus(404);
        } else {
            res.status(200).send(result.rows[0]);
        }
    } catch (e) {
        console.error(e.stack);
    }
});

app.patch('/budgets/:id', async (req, res) => {
    try {
        let budget = req.body;
        let user_id = budget.user_id;
        let category = budget.category;
        let amount = budget.amount;
        const result = await pool.query(`UPDATE budgets SET user_id = ${user_id}, category = '${category}', amount = ${amount} WHERE id = ${req.params.id} RETURNING *`);
        if (result.rows.length === 0) {
            res.sendStatus(404);
        } else {
            res.status(200).send(result.rows[0]);
        }
    } catch (e) {
        console.error(e.stack);
    }
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});