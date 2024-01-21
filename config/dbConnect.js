// external imports
const mongoose = require("mongoose");
require('dotenv').config()

async function dbConnect() {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  mongoose
    .connect(
        process.env.DB_URL
        // ,
        // {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        //   }
    )
    .then(() => {
      console.log("Successfully Database Connected!");
    })
    .catch((err) => {
      console.log("Database Not Connected!");
      console.error(err);
    });

    const connection = mongoose.connection;

    connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
  });
}

module.exports = dbConnect;


