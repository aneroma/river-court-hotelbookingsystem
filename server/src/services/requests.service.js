const {Request, Room} = require("../models");
const reservationsService = require("./reservations.service");
const {calcTimeDifference} = require("../utils");

/**
 * Add a reservation request
 *
 * @param {{roomId: string; clientEmail: string; clientName: string; checkIn: Date; checkOut: Date}} data
 */
module.exports.addRequest = async function ({
  roomId,
  clientEmail,
  clientName,
  checkIn,
  checkOut,
}) {
  const requestedRoom = await Room.findByPk(roomId);
  if (!requestedRoom) return null;

  // Calculate the duration of the
  const timeDifference = calcTimeDifference(
    new Date(checkIn),
    new Date(checkOut),
  );

  const request = await Request.create({
    roomId,
    clientEmail,
    clientName,
    checkIn,
    checkOut,
    cost: requestedRoom.cost,
    total: requestedRoom.cost * timeDifference.days,
  });

  return request;
};

/**
 * Remove a reservation request
 *
 * @param {number} id
 */
module.exports.removeRequest = async function (id) {
  const request = await Request.findByPk(id);

  return request;
};

/**
 * Get a reservation request with the id
 *
 * @param {number} id
 */
module.exports.getRequestById = async function (id) {
  const request = await Request.findByPk(id);

  return request;
};

/**
 * Get all the reservations requests
 */
module.exports.getAllRequests = async function () {
  const requests = await Request.findAll();

  return requests;
};

/**
 * Get all the requests of a specific room
 *
 * @param {number} roomId
 */
module.exports.getRequestsByRoom = async function (roomId) {
  const requests = await Request.findAll({
    where: {roomId},
  });

  if (requests.length < 1) return null;
  return requests;
};

/**
 * Accept a reservation request
 *
 * @param {number} requestId
 * @param {number[]} duplicates
 */
module.exports.acceptRequest = async function (requestId, duplicates = []) {
  const request = await Request.findByPk(requestId);

  if (!request) return null;

  // Create a reservation
  const newReservation = await reservationsService.addReservation({
    roomId: request.roomId,
    checkIn: request.checkIn,
    checkOut: request.checkOut,
    clientEmail: request.clientEmail,
    clientName: request.clientName,
    cost: request.cost,
    total: request.total,
  });

  // Set accepted to true for the request
  request.update({
    accepted: true,
    canceled: false,
  });

  // Set canceled to true fot the duplicates
  duplicates.forEach(async (id) => {
    const request = await Request.findByPk(id);

    if (request) {
      request.update({canceled: true, accepted: false});
    }
  });

  return {
    reservation: newReservation,
    request: request,
  };
};
