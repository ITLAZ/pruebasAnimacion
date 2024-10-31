const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Sirve archivos estáticos desde la carpeta 'public' y 'node_modules'
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
