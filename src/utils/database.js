import mongoose from "mongoose";

const URI = 'mongodb+srv://admin:admin@cluster0.d5vce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const databaseConnection = async () => {
    if (!global.mongoose) {
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URI)
    }
}

export default databaseConnection