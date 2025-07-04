const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;

// ++++++++++++ Middleware to enable CORS+++++++++++++
app.use(cors());

app.use(express.json());

// +++++++++++++++++++ MySQL database connection +++++++++++++++++++++
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sumit@123', 
  database: 'jobseeker' 
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});
// +++++++++++ Regiater data ++++++++++++

app.post('/register',(req,res)=>{
  const{registerby,username,email,password} = req.body;

  if(!registerby || !username || !email || !password){
    return res.status(400).json({error:'please fill in all fields'})
  }

  const query = 'insert into mp_login (registerby, username,email,password) values(?,?,?,?)';
  db.query(query,[registerby,username,email,password],(err,result)=>{
    if(err){
      console.error('Error inserting data',err);
      return res.status(500).json({error:'database error'});
    }
    res.status(200).json({message:'user register successfully'});
  });
});

// ++++++++++++ Login Data +++++++++++++++++

app.post('/login',(req,res)=>{
  const{registerby,username,password} = req.body;

  if(!registerby || !username || !password){
    return res.status(400).json({error:'plase fill in all fiels'});
  }

  const query = 'select * from mp_login where registerby=? and username = ? and password = ?';
  db.query(query,[registerby,username,password],(err,results)=>{
    if(err){
      console.error('Error querying database',err);
      return res.status(500).json({error:'Database error'});
    }
    if(results.length>0){
      res.status(200).json({message:'Login Successful'});
    }else{
      res.status(200).json({message:'Login Successful'});
    }
  });
});

//+++++++++++++ Start the server ++++++++++++++
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
