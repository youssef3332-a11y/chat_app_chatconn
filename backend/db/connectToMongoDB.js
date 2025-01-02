import mongoose from 'mongoose';

const connectToMongoDB = async () => {
    try {
        const response = await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB connected");
    } catch (error) {
        console.log("Error connecting to mongodb: ",error.message);
    }
}
export default connectToMongoDB;