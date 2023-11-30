module.exports = (io) => {
    io.on('connection', (socket) => {
  
      socket.on('orgAdd', (data) => {
        console.log('A new organization added:', data);
        socket.broadcast.emit('orgAdd', data);
      });
  
    });
  };
  