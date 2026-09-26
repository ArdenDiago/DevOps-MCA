---
title: How I Built My First API with Express
date: '2025-10-08'
---

Building my first backend felt intimidating — but Express made it way easier than I expected.

I started with a simple goal: create a small API that returns a list of blog posts. No databases, no authentication, just a few endpoints to practice with.

Here’s what my code looked like:

```js
const express = require("express");
const app = express();

const posts = [
  { id: 1, title: "Hello World", content: "My first post!" },
  { id: 2, title: "Learning Docker", content: "Containerizing apps is so powerful." }
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

Once I had this running locally, I tried packaging it into a Docker container. It blew my mind how I could ship the exact same setup to another computer, a server, or the cloud — no “but it works on my machine” headaches.

### A few lessons I learned:

Start small — even a single endpoint teaches you a lot.

Use environment variables for ports and config early on.

Docker makes deployment feel way less scary.

This little project was a turning point for me. It showed me that backend development isn’t magic — it’s just solving problems one endpoint at a time.
