module.exports = (io) => {
    io.on('connection', (socket) => {
  
      socket.on('newMessage', (data) => {
        console.log('Received message:', data);
        socket.broadcast.emit('newMessageRecieved', data);
      });
  
    });
  };
  