const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;
const BUILD_DIR = path.join(__dirname, 'dist'); // Path to your Next.js static export

// Serve static files from the 'dist' directory
app.use(express.static(BUILD_DIR));

// Custom redirect for the root to /th/
app.get('/', (req, res) => {
  res.redirect('/th/');
});

// Handle all other routes for client-side routing
app.get('/th/*', (req, res) => {
  const filePath = path.join(BUILD_DIR, 'th', 'index.html');
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).sendFile(path.join(BUILD_DIR, '404.html'));
  }
});

app.get('/en/*', (req, res) => {
  const filePath = path.join(BUILD_DIR, 'en', 'index.html');
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).sendFile(path.join(BUILD_DIR, '404.html'));
  }
});

// Fallback for any other route to the main index.html (or 404)
app.get('*', (req, res) => {
  const filePath = path.join(BUILD_DIR, 'index.html');
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).sendFile(path.join(BUILD_DIR, '404.html'));
  }
});

app.listen(PORT, () => {
  console.log(`🚀 HR Management System is running on http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${BUILD_DIR}`);
  console.log(`🌐 Frontend URL: https://hr.mimshack-sourc.com`);
  console.log(`🔗 Backend API: https://hrbackoofice.mimshack-sourc.com/api`);
});