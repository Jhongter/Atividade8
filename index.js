const express = require('express');
const app = express();

// Define a porta (Render usa process.env.PORT)
const PORT = process.env.PORT || 3000;

// Rota principal para retornar a data e hora atuais
app.get('/datetime', (req, res) => {
  const now = new Date();
  res.json({
    date: now.toLocaleDateString(),
    time: now.toLocaleTimeString(),
    iso: now.toISOString()
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
