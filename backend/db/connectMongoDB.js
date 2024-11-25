import mongoose from "mongoose";

// Asynchronous function to connecting to the mongodb database. 
const connectMongoDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`Database connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error connecting to database: ${error.message}`);
		process.exit(1);
	}
};

export default connectMongoDB;
