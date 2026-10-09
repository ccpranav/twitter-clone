import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error connecting to MongoDB ${err.message}`);
  }
};

export default connectMongo;
