import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'
import Header from '../Header/Header';
import './ViewDoctors.css';

function ViewDoctors({logged}) {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState('');
  const [name,setName] = useState('')

  useEffect(() => {
    const user = Cookies.get('name')
    setName(user)
    fetch('https://niroggyan-backend-42v7.onrender.com/api/doctors')
      .then(res => res.json())
      .then(data => setDoctors(data));
  }, []);


  return (
    <div className='containerr'>
      <Header logged={logged}/>
      <div className='body'>
      <input
        type="text"
        placeholder="Search by name or specialization"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="doctor-list">
        {doctors.filter(d =>
          d.name.toLowerCase().includes(search.toLowerCase()) ||
          d.specialization.toLowerCase().includes(search.toLowerCase())
        ).map(doc => (
          <Link to={`/doctor/${doc.id}`} key={doc.id} className="doctor-card">
            <img src={`${process.env.PUBLIC_URL}/images/doctor${doc.id}.png`} alt={doc.name} className='doctor-img'/>
            <h2>{doc.name}</h2>
            <p>{doc.specialization}</p>
            <span className={doc.available ? 'available' : 'unavailable'}>
              {doc.available ? 'Available' : 'Unavailable'}
            </span>
          </Link>
        ))}
      </div>
      <Link to='/home'>
      <button className='btn btn-primary mt-3'>Back</button>
      </Link>
      </div>
    </div>
  );
}

export default ViewDoctors;
