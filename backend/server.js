const express = require('express');
const fs = require("fs");
const path = require("path");
const cors = require('cors');
const app = express();
const doctors = require('./doctors.json');
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const filePath = path.join(__dirname, './doctors.json')

const readData = () => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data)
};

const writeData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
};





app.use(express.json());
app.use(cors());

const SECRET_KEY = "This is my key"

const appointments = [];


app.post("/create", (req, res) => {
  const { name, email, password} = req.body;

  const data = readData();

  const emailExists =
    data.doctors.some(u => u.email === email) ||
    data.patients.some(u => u.email === email);

  if (emailExists) {
    return res.status(409).json({ message: "User already exists" });
  }

  const newUser = {
    id: crypto.randomUUID(),
    name,
    email,
    password,
    role:"Patient",
    createdAt: new Date().toISOString()
  };

  data.patients.push(newUser);

  writeData(data);

  res.status(201).json({
    message: "Account created successfully",
    user: {
      id: newUser.id,
      name,
      email,
      role:"Patient"
    }
  });

  console.log(data)
});



app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user =
    doctors.doctors.find(d => d.email === email && d.password === password) ||
    doctors.patients.find(p => p.email === email && p.password === password);

  if (user) {
    const token = jwt.sign(
      { id: crypto.randomUUID(), role: user.role },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    res.json({
      token,
      loggedIn: email,
      role: user.role,
      name: user.name,
      id: user.id
    });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});


app.post

app.get('/api/doctors', (req, res) => {
  res.json(doctors.doctors);
});


app.post('/api/appointments', (req, res) => {

  appointments.push(req.body);

  console.log(appointments)

  res.status(201).json({ data: req.body });
});

app.get('/api/appointments/:id', (req, res) => {
  const doctorId = Number(req.params.id);

  const doctorAppointments = appointments.filter(
    a => a.doctorId === doctorId
  );

  res.json(doctorAppointments);
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
