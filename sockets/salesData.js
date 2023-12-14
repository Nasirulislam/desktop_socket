module.exports = (io) => {
    io.on('connection', (socket) => {

        socket.on('enterSalesData', (data) => {
            console.log('Sales data entered for orgId:', data.orgId);
            socket.broadcast.emit('salesDataChanged', data);
            // socket.emit('salesDataChanged', data);
        });

    });
};
