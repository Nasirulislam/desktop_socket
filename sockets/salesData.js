module.exports = (io) => {
    io.on('connection', (socket) => {

        socket.on('enterSalesData', (data) => {
            console.log('Sales data entered:', data);
            socket.broadcast.emit('enterSalesData', data);
            // setInterval(() => { socket.emit("dataRes", { meesage: "Data recieved and response sent" }) }, 1000)
        });

    });
};
