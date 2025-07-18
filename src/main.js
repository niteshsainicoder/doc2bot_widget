// src/main.js
const botId = new URLSearchParams(window.location.search).get("botId");

fetch(`https://your-backend.com/singlebot/${botId}`)
  .then((res) => res.json())
  .then((config) => {
    const root = document.createElement("div");
    root.style.position = "fixed";
    root.style.bottom = "20px";
    root.style.right = "20px";
    root.style.padding = "10px 15px";
    root.style.backgroundColor = config.primaryColor || "#5A67D8";
    root.style.color = "white";
    root.style.borderRadius = "8px";
    root.innerText = `Hi, I'm ${config.botName || "Doc2Bot"}!`;
    document.body.appendChild(root);
  });
