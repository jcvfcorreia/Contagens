const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('Contadores.db');

// Route to retrieve data from the 'agua' table
router.get('/', (req, res) => {
    db.all('SELECT id,DATA,valor,consumo FROM Agua order by data desc LIMIT 10', (err, rows) => {
      if (err) {
        res.status(500).send(err.message);
      } else {        
        res.json(rows);
      }
    });
  });

  // Route to insert data into the 'agua' table
router.post('/', (req, res) => {
    //console.log(req.body);
    const { DATA, VALOR } = req.body;
    const query = 'INSERT INTO Agua (DATA, VALOR) VALUES (?, ?)';
  
    db.run(query, [DATA, VALOR], function (err) {
      if (err) {
        res.status(500).send(err.message);
      } else {        
        res.send(`Record inserted with ID: ${this.lastID}`);
      }
    });
  });

  // Route to update data into the 'gas' table
router.put('/:id', (req, res) => {
  //console.log(req.body);
  const { ID } = req.body;
  const query = 'UPDATE Agua set inactivar = "X" where id = ?';

  db.run(query, function (err) {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send(`Record inserted with ID: ${this.lastID}`);
    }
  });
});
  module.exports=router;