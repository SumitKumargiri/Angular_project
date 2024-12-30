const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;

// +++++++++++++++ Middleware to enable CORS and parse JSON++++++++++++
app.use(cors());
app.use(express.json());

//+++++++++ MySQL database connection++++++++++
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sumit@123', 
  database: 'crudoperation'  
});

//++++++++++++ Connect to the database++++++++++++++
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    process.exit(1); 
  }
  console.log('Connected to MySQL database');
});


app.get('/data', (req, res) => {
  const query = 'SELECT * FROM crud'; 
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json(results); 
  });
});

// +++++++++++ insert data ++++++++++++++++++

app.post('/insert', (req, res) => {
    const { name, email, country } = req.body;  
  
    if (!name || !email || !country) {
      return res.status(400).json({ error: 'Please fill in all fields' });
    }
  
    const query = 'INSERT INTO crud (name, email, country) VALUES (?, ?, ?)';  
    db.query(query, [name, email, country], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(200).json({ message: 'Data inserted successfully' });
    });
  });


//   +++++++++++++ getdata by id +++++++++++
app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM crud WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Error fetching data by ID:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(200).json(results[0]); 
    });
  });

//   ++++++++++++++ update data by id ++++++++++++++++++
app.put('/data/:id', (req, res) => {
    const id = req.params.id;
    const { name, email, country } = req.body;
    const query = 'UPDATE crud SET name = ?, email = ?, country = ? WHERE id = ?';
    db.query(query, [name, email, country, id], (err) => {
      if (err) {
        console.error('Error updating data:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(200).json({ message: 'Data updated successfully' });
    });
  });

//   +++++++++++++ delete data by id ++++++++++++++++
app.delete('/data/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM crud WHERE id = ?';
    db.query(query, [id], (err) => {
      if (err) {
        console.error('Error deleting data:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(200).json({ message: 'Data deleted successfully' });
    });
  });
  
  
  

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
