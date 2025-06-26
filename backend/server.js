const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from the 3-Tier App Backend!');
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
}); 