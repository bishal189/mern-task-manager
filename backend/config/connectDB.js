const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected`)
    } catch (error) {
        process.exit(1);
    }
}

module.exports = connectDB


//  Use this function in server.js to connect to mongodb and start the server
// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(PORT, () => {
//       console.log("Server started on port " + PORT);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// startServer();