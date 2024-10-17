// index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3002;

// Middleware to parse JSON data
app.use(bodyParser.json());

app.get('/test', (req, res) => {
    res.status(200).json({ message: "Success!" });
});
// Route to handle incoming data
app.post('/api/location', (req, res) => {
    const { latitude, longitude, time, id } = req.body;
    console.log('Received data: ', { latitude, longitude, time, id });
    // console.log('Latitude:', latitude);
    // console.log('Longitude:', longitude);
    // console.log('Time:', time);
    res.status(200).json({ message: 'Data received successfully' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
