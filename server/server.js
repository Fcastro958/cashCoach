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


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});