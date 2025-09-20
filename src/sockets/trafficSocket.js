const WebSocket = require('ws');

const WEBSOCKET_SERVER_URL = "ws://REMOTE_MACHINE_IP:PORT";

let ws;

function connect() {
    ws = new WebSocket(WEBSOCKET_SERVER_URL);

    ws.on('open', () => {
        console.log('Connected to external WebSocket server');
    });

    ws.on('message', (message) => {
        console.log('Received:', message.toString());
        // You can process it here or store it in Redis/MongoDB to send to frontend
    });

    ws.on('close', () => {
        console.log('Connection closed. Reconnecting in 5s...');
        setTimeout(connect, 5000);
    });

    ws.on('error', (err) => {
        console.error('WebSocket error:', err.message);
    });
}

module.exports = { connect, ws };
