import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

const posts = [
  {
    id: 1,
    title: "Getting Started with Docker",
    date: "2024-03-15",
    content: "Docker makes it easy to package applications with all their dependencies. Today I learned about containers!"
  },
  {
    id: 2,
    title: "Why Docker Compose?",
    date: "2024-03-16",
    content: "Docker Compose simplifies running multi-container applications. Just one command to start everything!"
  },
  {
    id: 3,
    title: "Microservices Architecture",
    date: "2024-03-17",
    content: "Breaking applications into smaller services makes them easier to develop, deploy, and scale independently."
  },
  {
    id: 4,
    title: "Container Networking",
    date: "2024-03-18",
    content: "Containers can communicate using service names as hostnames. Docker Compose creates a network automatically!"
  }
];

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

const PORT = 8000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend API running on port ${PORT}`);
});