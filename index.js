const bodyParser = require('body-parser');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000; // Choose the desired port number
const aguaRoutes = require('./routes/Agua');
const gasRoutes = require('./routes/Gas');
const electricidadeRoutes = require('./routes/Electricidade');
// Create a new SQLite database connection
//const db = new sqlite3.Database('Contadores.db');

// Parse JSON bodies for incoming requests
app.use(
  bodyParser.json()
);

app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* // Route to retrieve data from the 'agua' table
app.get('/agua', (req, res) => {
  db.all('SELECT DATA,valor,consumo FROM agua order by data desc LIMIT 10', (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {     
      res.json(rows);
    }
  });
});

// Route to insert data into the 'agua' table
app.post('/agua', (req, res) => {
  //console.log(req.body);
  const { DATA, VALOR } = req.body;
  const query = 'INSERT INTO agua (DATA, VALOR) VALUES (?, ?)';

  db.run(query, [DATA, VALOR], function (err) {
    if (err) {
      res.status(500).send(err.message);
    } else {      
      res.send(`Record inserted with ID: ${this.lastID}`);
    }
  });
});

  // Route to retrieve data from the 'gas' table
  app.get('/gas', (req, res) => {
    db.all('SELECT DATA,valor,consumo FROM gas order by data desc LIMIT 10', (err, rows) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.json(rows);
      }
    });
  });

    // Route to insert data into the 'gas' table
app.post('/gas', (req, res) => {
    //console.log(req.body);
    const { DATA, VALOR } = req.body;
    const query = 'INSERT INTO gas (DATA, VALOR) VALUES (?, ?)';
  
    db.run(query, [DATA, VALOR], function (err) {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.send(`Record inserted with ID: ${this.lastID}`);
      }
    });
  });

  // Route to retrieve data from the 'electricidade' table
  app.get('/electricidade', (req, res) => {
    db.all('SELECT DATA, PONTA, CHEIAS, VAZIO,CONSUMOPONTA, CONSUMOCHEIAS, CONSUMOVAZIO FROM electricidade order by data desc LIMIT 10', (err, rows) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.json(rows);
      }
    });
  });

  // Route to insert data into the 'electricidade' table
app.post('/electricidade', (req, res) => {
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
  */

  app.use('/agua', aguaRoutes);
  app.use('/gas', gasRoutes);
  app.use('/electricidade', electricidadeRoutes);
// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);  
});
