const port = 3000
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('tlg', (item) => {
        io.emit('tlg', item);
    });
});

server.listen(port, () => { console.log(`Listenning to : ${port}`) })