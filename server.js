const express = require("express");
const app = express();
const { Pool } = require('pg');
const PORT = process.env.PORT || 3000;

//CREATE POSTGRES CONNECTION
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '123456',
  database: 'supermercado_db',
  port: 5432
})

app.get('/test-db', async (req, res)=> {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT NOW()");
    client.release(); 
    res.json({status: 'Database connected succesfull', result: result})
  } catch (error) {
    console.log('ERROR', error)
    res.json({status: 'Database connect error'})
  }
});

app.get('/hello', (req, res)=> {
    res.json({message: 'HOLA MUNDO'})
});

app.get('/status', (req, res)=> {
    res.json({message: 'SERVICE IS RUNNING'})
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
