const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta GET para probar el servidor
app.get('/test', (req, res) => {
  res.json({ message: 'Test successful!' });
});

// Ruta POST para recibir datos de prueba
app.post('/test', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received!', data });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
