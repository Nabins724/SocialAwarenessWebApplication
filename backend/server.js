import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
// import userRoutes from "./routes/user.route.js";
// import postRoutes from "./routes/post.route.js";


import connectMongoDB from "./db/connectMongoDB.js";

// Reading the value from .env file securely 
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// Middlewares
app.use(express.json()); // to parse req.body 
app.use(express.urlencoded({extended:true}));    // to parse from data (urlencoded)

// For the purpose of protect route. 
app.use(cookieParser());

app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);



// Connecting to MongoDB Database
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);

    // function to connect mongodb used from connectMongoDB.js file from db folder.
	connectMongoDB();
});
