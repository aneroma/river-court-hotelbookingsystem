const {Room} = require("../models");

/**
 * Get a room with the room id
 *
 * @param {string} id
 */
module.exports.getARoomById = async function (id) {
  const room = await Room.findByPk(id);

  return room;
};

/**
 * Get all the rooms
 */
module.exports.getAllRooms = async function () {
  const rooms = await Room.findAll();

  return rooms;
};

/**
 * Create a room
 */
module.exports.createRoom = async function (data) {
  const room = await Room.create(data);

  return room;
};
