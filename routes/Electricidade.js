const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('Contadores.db');

// Route to retrieve data from the 'electricidade' table
router.get('/', (req, res) => {
    db.all('SELECT id,DATA, PONTA, CHEIAS, VAZIO,CONSUMOPONTA, CONSUMOCHEIAS, CONSUMOVAZIO FROM electricidade order by data desc LIMIT 10', (err, rows) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.json(rows);
      }
    });
  });

  // Route to insert data into the 'electricidade' table
  router.post('/', (req, res) => {
    //console.log(req.body);
    const { DATA, PONTA, CHEIAS, VAZIO } = req.body;
    const query = 'INSERT INTO electricidade (DATA, PONTA, CHEIAS, VAZIO) VALUES (?, ?, ?, ?)';
  
    db.run(query, [DATA, PONTA, CHEIAS, VAZIO], function (err) {
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
  const query = 'UPDATE electricidade set inactivar = "X" where id = ?';

  db.run(query, [DATA, VALOR], function (err) {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send(`Record Updated`);
    }
  });
});
  module.exports=router;