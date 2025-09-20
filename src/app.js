const express = require('express');
const { connect, ws } = require('./websocketClient');

const app = express();
const PORT = 3000;

// Start WebSocket client
connect();

// Simple API endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Backend running and listening to external WebSocket' });
});

// Example endpoint to get last message from WebSocket
let lastMessage = null;

ws.on('message', (message) => {
    lastMessage = message.toString();
});

app.get('/latest-data', (req, res) => {
    res.json({ latest: lastMessage });
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
