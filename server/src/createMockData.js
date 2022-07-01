const {Room} = require("./models");
const {requestsService} = require("./services");

/**
 * Add mock rooms for testing
 */
async function addMockRooms() {
  // Check for previous rooms
  const prevData = await Room.findAll();
  if (prevData.length > 0) return;

  const rooms = [];

  const roomImages = [
    "https://www.rivercourthotel.com/cmsGallery/photo/5317/resized/800x800/classic_double_room_classic_single_room.jpg",
    "https://www.rivercourthotel.com/cmsGallery/photo/5317/resized/800x800/classic_twin_with_lights.jpg",
    "https://www.rivercourthotel.com/cmsGallery/photo/5317/resized/800x800/deluxe_double.jpg",
    "https://www.rivercourthotel.com/cmsGallery/photo/5317/resized/800x800/krc_bedroom.jpg",
  ];

  for (let i = 0; i < 4; i++) {
    const newRoom = await Room.create({
      name: `Room ${i + 1}`,
      description:
        "All of our bedrooms have recently been renovated with luxury and ultimate comfort in mind. Every guest bedroom has the comfort of Spring Air Legend Ultra mattresses manufactured by Briody in Ireland. The ultimate mattress for comfort and back support, each spring is individually encased in its own pouch and the only springs that move are those to which weight is applied.",
      type: i % 2 === 0 ? "single" : "double",
      cost: 400 + Math.round(100 * Math.random() * i),
      img: roomImages[i],
    });

    rooms.push(newRoom);
  }

  return rooms;
}

/**
 * Add mock requests for testing
 */
async function addMockRequestsData(rooms) {
  // Check for previous requests
  const prevRequests = await requestsService.getAllRequests();
  if (prevRequests.length > 0) return;

  const today = new Date();
  const requests = [];

  const req1 = await requestsService.addRequest({
    roomId: rooms[0].id,
    clientEmail: "diana.tifrea@test.com",
    clientName: "Diana Tifrea",
    checkIn: new Date(2022, 5, today.getDate() - 11),
    checkOut: new Date(2022, 5, today.getDate() + 9),
  });

  await requestsService.acceptRequest(req1.id);

  await requestsService.addRequest({
    roomId: rooms[2].id,
    clientEmail: "Bart.simpson@test.com",
    clientName: "Bart Simpson",
    checkIn: new Date(2022, 5, today.getDate() + 10),
    checkOut: new Date(2022, 5, today.getDate() + 13),
  });

  return requests;
}

/**
 * Creates mock data
 */
module.exports.createMocks = async function () {
  const rooms = await addMockRooms();
  await addMockRequestsData(rooms);
};
