const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors({
    origin: "http://localhost:8080"
}));

app.get("/", (req, res) => {
    res.json({
        message: "Hello from Backend!"
    });
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
