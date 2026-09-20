---
title: 3 Things I Wish I Knew Before Using Docker
date: '2025-10-08'
---
Docker is one of those tools that seems complicated at first, but once you start using it, you wonder how you ever built anything without it. Here are a few tips I wish I’d known when I started.

### 1. Containers Don’t Last Forever

Containers are meant to be short-lived. They spin up, run your app, and can be deleted without breaking anything. That means you should always keep your important data in **volumes** or in a database — never rely on the container’s internal files sticking around.

### 2. Use --rm During Development

When you’re experimenting and running containers over and over, your system can fill up with stopped containers you don’t need. Adding the `--rm` flag to `docker run` cleans them up automatically when they stop:

```docker run --rm -p 3000:3000 my-app```


### 3. Name Your Containers

This one’s simple but powerful. Instead of copying and pasting long container IDs, give them a name with `--name`. It makes every other command easier:

```
docker run --name blog -p 3000:3000 my-app
docker logs -f blog
docker exec -it blog sh
```

These small habits save you a ton of time — and they make Docker feel way less intimidating. Once you start using it every day, it becomes second nature.



