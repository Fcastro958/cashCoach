/* eslint-disable no-unused-vars */
// const express = require('express');
// const cors = require('cors');
// const { client } = require('pg');

// const config = require('./config')[process.env.NODE_ENV || 'production'];
// const PORT = config.port;

// const app = express();


// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.listen(PORT, () => {
//     console.log(`Example app listening on port ${PORT}`);
// });
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const port = 3000;
const pool = new Pool({
    user: 'postgres',
    host: 'postgres',
    database: 'cashCoach',
    password: 'docker',
    port: 5432,

});
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});