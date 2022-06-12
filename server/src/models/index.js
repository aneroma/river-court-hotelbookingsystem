const {db} = require("../core");

async function syncModels() {
  try {
    // Use only if the application have to clear its previous state
    // await db.sync({force: true}); // recreates all the tables

    // General sync method
    await db.sync();

    console.debug("Synchronized all the tables");
  } catch (err) {
    console.error("Error occurred while synchronizing the tables: ", err);
  }
}

module.exports = {
  syncModels,
  Rooms: require("./room"),
  Booking: require("./booking"),
};
