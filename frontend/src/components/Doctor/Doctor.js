import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './Doctor.css';

const Doctor = () => {

    const { id } = useParams();
    const [doctor, setDoctor] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        fetch(`https://niroggyan-backend-42v7.onrender.com/doctors`)
            .then(response => response.json())
            .then(data => {
                const found = data.find(d => d.id === Number(id));
                setDoctor(found)
            })
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://niroggyan-backend-42v7.onrender.com/appointments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    patientName: e.target.elements.name,
                    appointmentDate: e.target.elements.date
                }),
            })
            const data = await response.json();
            setSubmitted(true);
            console.log("Appointement booked:", data)
        } catch (error) {
            console.log('Error:', error);
        }
    }

  return (
    <div className='doctor-details'>
        <img src={`${process.env.PUBLIC_URL}/images/doctor${doctor.id}.png`} alt={doctor.name} className='doctor-image'/>
        <h1>{doctor.name}</h1>
        <p>Specialization: {doctor.specialization}</p>
        <p>Contact: {doctor.contact}</p>
        <p>Available: {doctor.available ? "Yes" : "No"}</p>
        <p>Description: {doctor.description}</p>
        <h2>Book Appointment</h2>
        {!doctor.available ? (
            <p>This doctor is not available for appointments at the moment.</p>
        ) : submitted ? (
            <p className='success'>Your appointment has been booked successfully!</p>
        ) : (
            <form onSubmit={handleSubmit} className='form'>
                <input type="text" placeholder="Your Name" name='patientName' required onChange={(e) => setDoctor({ ...doctor, patientName: e.target.value })} />
                <input type="date" placeholder="Appointment Date" name='appointmentDate' required onChange={(e) => setDoctor({ ...doctor, appointmentDate: e.target.value })} />
                <button type="submit">Book Appointment</button>
            </form>
        )}
    </div>
  )
}

export default Doctor
