const express = require("express");
const mysql = require('mysql2');
const { v4: uuidv4 } = require('uuid');

const app = express();
require('dotenv').config({ path: __dirname + '/config.env' });

const port = 3001;

/* mySql */
const connection = mysql.createConnection({
    host: process.env.Host,
    user: process.env.User,
    password: process.env.Password,
    database: process.env.DBname
});

app.get("/", (req, res) => {
    res.send("hello? root");
})

// settings for post/put method
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api', (req, res) => {
    const {orderId, existOrder, timeStamp} = req.body;
    existOrder.forEach(({name, price, quantity}) => {
        
        const uuid = uuidv4();
        connection.query(
            'INSERT INTO transaction (id, orderId, orderName, orderPrice, orderQuantity, TimeStamp) VALUES (?, ?, ?, ?, ?, ?)',
            [uuid, orderId, name, price, quantity, timeStamp],
            (err, result) => {
                if (err) {
                  console.error('Error inserting data:', err);
                }
              }
        )
    });
})
app.get('/api', (req, res) => {
    
    // connent to mysql
    connection.query(
        
        'SELECT * FROM transaction',
        function(error, results, fielads){
            if(error){
                console.log('connection error');
                throw error;
            }
            res.json(results);

        }
    )
});

app.get('/menu', (req, res) => {
    connection.query(
        'SELECT * FROM menu_data',
        function(error, results, fielads){
            if(error){
                console.log('failed to fetch menu_data');
                throw error;
            }
            res.json(results);
        }
    )
})

app.listen(port, (req, res) => {
    console.log(`run on ${port}!`);
});