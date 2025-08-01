const express = require('express');
const cors = require('cors');
const app = express();
const doctors = require('./doctors.json'); // Assuming you have a doctors.json file with doctor data

app.use(express.json());

app.use(cors());

app.get('/doctors', (req, res) => {
    res.json(doctors);
});

app.post('/appointments', (req, res) => {
    console.log(`Appointment booked:`, req.body);
    res.status(201).json({ message: 'Appointment booked successfully' });
});

app.listen(5000, () => console.log('Server is running on port 5000'));