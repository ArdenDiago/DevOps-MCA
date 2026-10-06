const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>Student Docker App</title>
            <style>
                body {
                    margin: 0;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Segoe UI', Arial, sans-serif;
                    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
                    color: #fff;
                }
                .card {
                    background: rgba(255, 255, 255, 0.08);
                    backdrop-filter: blur(6px);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 16px;
                    padding: 48px 56px;
                    text-align: center;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                }
                h1 {
                    margin: 0 0 12px;
                    font-size: 2.2rem;
                }
                p {
                    margin: 6px 0;
                    color: #cfd8dc;
                }
                .badge {
                    display: inline-block;
                    margin-top: 16px;
                    padding: 6px 16px;
                    border-radius: 999px;
                    background: #2496ED;
                    color: #fff;
                    font-size: 0.85rem;
                    font-weight: 600;
                }
                a {
                    color: #7fd1ff;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>🚢 Student Greeting App</h1>
                <p>Hello from Docker!</p>
                <p>Containerized successfully.</p>
                <span class="badge">Running inside a container</span>
                <p><a href="/student">View student JSON &rarr;</a></p>
                <p style="margin-top:24px;font-size:0.8rem;color:#90a4ae;">Arnav Narula &middot; 2547115</p>
            </div>
        </body>
        </html>
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