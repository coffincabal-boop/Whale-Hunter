const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const fs = require('fs');
const path = require('path');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const app = express();

// Serve HTML file
app.get('/', (req, res) => {
  const htmlPath = path.join(__dirname, 'whale-hunter-coffin-cabal (1).html');
  res.sendFile(htmlPath);
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Discord bot
client.once('ready', () => {
  console.log(`✅ Bot logged in as ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);

// Start web server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Server running on port ${PORT}`);
});
