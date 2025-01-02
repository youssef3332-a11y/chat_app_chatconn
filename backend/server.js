import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectDB from './db/connectToMongoDB.js';


const Port = process.env.Port || 3000;

const app = express();

dotenv.config();

app.use(express.json());//middleware to parse json data
app.use(cookieParser());//middleware to parse cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.get("/", (req, res) => {
    res.send("Welcome to the server");
    });

app.listen(Port, () => {
    console.log(`Server is running at http://localhost:${Port}`);
    connectDB();
});

