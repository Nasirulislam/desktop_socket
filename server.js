const http = require('http');
const { Server } = require('socket.io');
const initializeModules = require('./sockets');

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});


initializeModules(io);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Socket server listening on port ${PORT}`);
});


io.on('connection', (socket) => {
  console.log('User connected');


  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
  
});