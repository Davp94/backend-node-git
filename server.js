const express = require('express');https://evergreen-pearl-463.notion.site/DESARROLLO-WEB-FULL-STACK-V2-214441a8a1db80ec83f2f0cb3291549d?pvs=74
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/hello', (req, res)=> {
    res.json({message: 'HELLO WORLD'})
});

app.get('/app-status', (req, res)=> {
    res.json({message: 'SERVICIO ESTA CORRIENDO'})
});

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})