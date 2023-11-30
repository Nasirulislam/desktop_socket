module.exports = (io) => {
    io.on('connection', (socket) => {
  
      socket.on('enterUserData', (userId) => {
        console.log('Requested data for user:', userId);
        socket.broadcast.emit('enterUserData', data);
      });
  
    });
  };
  