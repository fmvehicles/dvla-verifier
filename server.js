const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    res.send('Node.js service is running on Render!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});