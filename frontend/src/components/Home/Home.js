import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [doctors, setDoctors] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(response => response.json())
            .then(data => setDoctors(data))
    },[]);

  return (
    <div className='container'>
        <h1>Doctors</h1>
        <input type='text' className='input-field' placeholder='Search By name or specialization' value={search} onChange={(e) => setSearch(e.target.value)} />
        <div className='doctors-list'>
            {doctors.filter(doc => doc.name.includes(search) || doc.specialization.includes(search)
            ).map(doctor => (
                <Link to={`/doctors/${doctor.id}`} className='doctor-card' key={doctor.id}>
                    <img src={`${process.env.PUBLIC_URL}/images/doctor${doctor.id}.png`} alt={doctor.name} className='doctor-image'/>
                    <h2>{doctor.name}</h2>
                    <p>Specialization: {doctor.specialization}</p>
                    <p>Contact: {doctor.contact}</p>
                    <p>Available: {doctor.available ? "Yes" : "No"}</p>
                    <p>Description: {doctor.description}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Home