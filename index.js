// Importa o express
import express from "express";
import cors from "cors";
const app = express();

// Define a porta que a API irá escutar
const PORT = 3000;

// Define uma rota GET para /datetime
app.get('/datetime', (req, res) => {
  const now = new Date();
  
  res.json({
    date: now.toLocaleDateString(), // formato de data
    time: now.toLocaleTimeString()   // formato de hora
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
