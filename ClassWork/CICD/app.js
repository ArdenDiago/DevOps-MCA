import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Works on my machine.');
});

export default app;
