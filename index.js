const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Rota principal que retorna data e hora
app.get('/', (req, res) => {
    const now = new Date();
    res.json({
        data: now.toLocaleDateString(),
        hora: now.toLocaleTimeString(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });
});

// Rota de saúde para verificar se a API está online
app.get('/health', (req, res) => {
    res.status(200).send('API está online e saudável');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});