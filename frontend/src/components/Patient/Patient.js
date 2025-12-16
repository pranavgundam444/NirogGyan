import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Cookies from 'js-cookie'
import './Patient.css';

function DoctorProfile() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [form, setForm] = useState({ patientName: '', email: '', dateTime: '' });
  const [submitted, setSubmitted] = useState(false);
  const [appointments, setAppointments] = useState('')

  useEffect(() => {
    fetch('https://niroggyan-backend-42v7.onrender.com/api/doctors')
      .then(res => res.json())
      .then(data => {
        const found = data.find(d => d.id === Number(id));
        setDoctor(found);
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://niroggyan-backend-42v7.onrender.com/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, doctorId: Number(id) })
    })
      .then(res => res.json())
      .then(data => {
        const details = data.data
        setAppointments(data.data)
        console.log(details)
        Cookies.set('appointments', JSON.stringify(data.data), {expires: 30})
      })

      .then(() => setSubmitted(true));
  };




  if (!doctor) return <p>Loading...</p>;

    return (
      <div className="profile-container">
        <img src={`${process.env.PUBLIC_URL}/images/doctor${doctor.id}.png`} alt={doctor.name} className="profile-img" />
        <h2>{doctor.name}</h2>
        <p>{doctor.specialization}</p>
        <p>{doctor.description}</p>
        <h3>Book Appointment</h3>
        {!doctor.available ? (
          <div>
            <p className="unavailable">This doctor is currently unavailable for appointments.</p>
            <Link to='/patient' className=' text-decoration-none'>
              <button className='btn btn-danger text-dark'>Back</button>
            </Link>
          </div>
        ) : submitted ? (
          <div>
            <p className="success-msg">Appointment successfully booked!</p>
            <Link to='/patient'>
            <button className='btn btn-primary'>Back</button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form">
            <input type="text" name="patientName" placeholder="Your Name" required onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
            <input type="datetime-local" name="dateTime" required onChange={handleChange} />
            <div className='d-flex flex-row justify-content-between'>
              <button>Submit</button>
              <Link to='/patient'>
              <button>Back</button>
              </Link>
            </div>
          </form>
        )}
      </div>
    );
}

export default DoctorProfile;
