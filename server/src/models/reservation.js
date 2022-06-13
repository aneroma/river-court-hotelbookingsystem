const {DataTypes} = require("sequelize/types");
const {db} = require("../core");

/**
 * Booking model
 *
 * @Id Booking Id
 * @StartDate Booking start date
 * @EndDate Booking end date
 * @RoomId Booked room id (Foreign key)
 */
const Reservation = db.define({
  id: {
    type: DataTypes.INTEGER,
    autoComplete: true,
    primaryKey: true,
  },
  checkIn: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  checkOut: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  clientEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  clientName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

/** Relations */

module.exports = Reservation;