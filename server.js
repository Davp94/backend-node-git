const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=> {
    res.json({message: 'WELCOME TO MY API'})
});

app.get('/status', (req, res)=> {
    res.json({status: 'STATUS CHECK SUCCESFULY'})
});

app.get('/products', (req, res)=> {
    res.json({message: 'PRODUCT LIST', products: ['Product1', 'Product2', 'Product3']});
});

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})
