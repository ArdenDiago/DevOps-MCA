import express from 'express'

const app = express();
app.use(express.static('public'));

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000';

app.get('/', async (req, res) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/posts`);
    const posts = await response.json();
    
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Microblog - Docker Compose Demo</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 2rem;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        h1 {
            color: white;
            text-align: center;
            margin-bottom: 2rem;
            font-size: 2.5rem;
        }
        .subtitle {
            color: rgba(255, 255, 255, 0.9);
            text-align: center;
            margin-bottom: 3rem;
            font-size: 1.1rem;
        }
        .posts {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        .post-card {
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .post-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
        }
        .post-title {
            color: #333;
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }
        .post-date {
            color: #667eea;
            font-size: 0.9rem;
            margin-bottom: 1rem;
            font-weight: 600;
        }
        .post-content {
            color: #555;
            line-height: 1.6;
        }
        .info {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 8px;
            padding: 1rem;
            margin-bottom: 2rem;
            text-align: center;
            color: #555;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Microblog</h1>
        <p class="subtitle">A Docker Compose Demo</p>
        <div class="info">
            Frontend (Express): Port 3000 | Backend (Express API): Port 8000
        </div>
        <div class="posts">
            ${posts.map(post => `
                <div class="post-card">
                    <h2 class="post-title">${post.title}</h2>
                    <div class="post-date">${new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                    })}</div>
                    <p class="post-content">${post.content}</p>
                </div>
            `).join('')}
        </div>
    </div>
</body>
</html>
    `;
    
    res.send(html);
  } catch (error) {
    res.status(500).send(`
      <h1>Error connecting to backend</h1>
      <p>${error.message}</p>
    `);
  }
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Frontend server running on port ${PORT}`);
});