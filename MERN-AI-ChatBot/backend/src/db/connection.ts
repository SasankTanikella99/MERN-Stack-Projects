import { connect, disconnect } from "mongoose";
async function connectToDatabse() {
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
        throw new Error("Unable to connect to MongoDB");
    }
}

async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error("Unable to Disconnect from MongoDb");
    }
    
}

export {connectToDatabse, disconnectFromDatabase} ;