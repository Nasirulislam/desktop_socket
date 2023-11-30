module.exports = (io) => {
    io.on('connection', (socket) => {

        socket.on('entersalesData', (data) => {
            console.log('Sales data entered:', data);
            socket.broadcast.emit('salesDataChanged', data);
            // socket.emit('salesDataChanged', data);
        });

    });
};
