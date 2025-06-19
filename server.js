const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/hello', (req, res)=> {
    res.json({message: 'HOLA MUNDO'})
});

app.get('/status', (req, res)=> {
    res.json({message: 'SERVICE IS RUNNING'})
});

app.get('/productos', (req, res)=> {
    res.json({message: 'LISTA DE PRODUCTOS'})
});

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})