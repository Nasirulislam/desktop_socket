const messagesSocket = require('./message');
const usersSocket = require('./user');
const salesDataSocket = require('./salesData');
const writeupBoardSocket = require('./writeupBoard');
const organizationSocket = require('./organization');

module.exports = (io) => {
  messagesSocket(io);
  usersSocket(io);
  salesDataSocket(io);
  writeupBoardSocket(io);
  organizationSocket(io);
};
