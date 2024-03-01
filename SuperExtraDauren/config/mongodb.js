import mongoose from "mongoose";

export default async function connectToMongo() {
    try {
        await mongoose.connect('mongodb://localhost:27017/myapp');
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}