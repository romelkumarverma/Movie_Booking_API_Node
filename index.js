const express = require("express");
const bodyParser = require("body-parser");
const env = require("dotenv");
const mongoose = require("mongoose")
const Movie = require('./models/movie.model')

const MovieRoutes = require('./routes/movie.routes');

env.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

MovieRoutes(app); // Inoking movie Routes

app.get("/home", (req, res) => {
    return res.json({
        success: true,
        message: "Fetched home"
    });
});

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);

    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("Successfully connected to mongodb database...")
    } catch (err) {
        console.log("Not able to connect...", err);
    }
});
