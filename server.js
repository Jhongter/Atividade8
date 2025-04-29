const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Habilita CORS para permitir requisições do frontend
app.use(cors());

// Rota para consulta de data e hora
app.get('/datetime', (req, res) => {
    const now = new Date();
    
    const response = {
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
        iso: now.toISOString(),
        timestamp: now.getTime()
    };
    
    res.json(response);
});

// Rota raiz para verificar se a API está online
app.get('/', (req, res) => {
    res.send('API de Data e Hora está online');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});