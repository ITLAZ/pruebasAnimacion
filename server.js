// server.js
const express = require('express');
const app = express();
const PORT = 8080;

// Servir archivos estáticos desde la carpeta public y node_modules
app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));

// Ruta para templates
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/templates/index.html');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});