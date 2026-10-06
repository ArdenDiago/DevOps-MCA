const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Student Greeting App</h1>
        <p>Hello from Docker!</p>
        <p>Containerized successfully.</p>
    `);
});

app.get("/student", (req, res) => {
    res.json({
        message: "Welcome to DevOps!",
        student: "Your Name"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});