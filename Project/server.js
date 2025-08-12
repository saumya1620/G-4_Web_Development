const express = require('express');
require("dotenv").config();
const dbConnect = require("./config/database");
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');
const ProfileRouter = require('./routes/profileRouter');

const app = express();
const PORT = process.env.PORT || 4888;

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/profile",ProfileRouter);

app.get('/', (req, res) => {
    res.send("API is running...");
});


dbConnect().then(() => {
    app.listen(PORT, () => {
        console.log("Server running on port", PORT);
    });
});
