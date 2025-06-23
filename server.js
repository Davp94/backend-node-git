const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/saludo', (req, res)=> {
    res.json({message: 'HOLA DESDE NODEJS'})
});

app.get('/estado', (req, res)=> {
    res.json({status: 'SERVICE RUNNING'})
});

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})