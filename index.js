import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Define uma rota GET para /datetime
app.get('/', (req, res) => {
   res.json({
    date: new Date().toLocaleString('pt-br'), // formato de data
    status: 'API no Render funcionando!' 
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
