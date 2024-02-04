// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3001;

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'your_mysql_host',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_database_name',
});

connection.connect();

app.post('/saveTask', (req, res) => {
  const { familyMember, task } = req.body;

  const query = `INSERT INTO tasks (familyMember, task) VALUES ('${familyMember}', '${task}')`;

  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Sorry There is a Server Error');
    } else {
      res.status(200).send('Task saved');
    }
  });
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
