const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 4888;

app.use(express.json());

app.use((req, res, next) => {
    console.log("this is global");
    next();
});
app.use("/api/user", userRouter);

app.get('/', (req, res) => {
    res.send("API is running...");
});

async function dbconnect() {
    await mongoose.connect(process.env.CONNECTION_URL)
        .then(() => console.log("DB CONNECTED"))
        .catch((err) => console.error("DB connection error:", err));
}

dbconnect().then(() => {
    app.listen(PORT, () => {
        console.log("Server running on port", PORT);
    });
});
