const express = require("express");
const app = express();

const data = require('../data/hotels.json');

app.listen(3000, () => {
    console.log("Server running on port 3000...");
});

app.get("/hotels", (req, res) => {
    res.json(data);
});