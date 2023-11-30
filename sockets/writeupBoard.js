module.exports = (io) => {
    io.on('connection', (socket) => {
  
      socket.on('enterWriteupData', (data) => {
        console.log('Writeup data entered:', data);
        socket.broadcast.emit('enterWriteupData', data);
      });
  
    });
  };
  