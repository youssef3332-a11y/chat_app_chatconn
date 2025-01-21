import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectDB from './db/connectToMongoDB.js';
import cors from 'cors';
import {app, server} from './socket/socket.js';

dotenv.config();
const Port = process.env.PORT || 3000;


dotenv.config();

app.use(express.json());//middleware to parse json data
app.use(cookieParser());//middleware to parse cookies

app.use(cors({
    origin: process.env.CLIENT_UR, // Exact origin
    credentials: true, // Allow cookies
}));

app.options('*', cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.get("/", (req, res) => {
    res.send("Welcome to the server");
    });

server.listen(Port, () => {
    connectDB();
});

