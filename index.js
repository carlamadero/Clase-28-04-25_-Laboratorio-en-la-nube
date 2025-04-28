const express = require('express');
const app = express();
const part = 3000;

app.get('/', (req, res) => {
    res.send('¡Hola desde la nube con Express!');
});

app.listen(part, () => {
    console.log('Servidor escuchando en http://localhost:${port}');
});
