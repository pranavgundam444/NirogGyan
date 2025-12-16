import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

const Doctor = ({logged}) => {

  const [name, setName] = useState("")
  const [appointments, setAppointments] = useState([])



    const handleLogout = () => {
        logged(false)
        Cookies.remove("jwt_token")
        Cookies.remove("role")
        Cookies.remove("name")
        Cookies.remove('appointments')
        Cookies.remove("id")
        
    }

   useEffect(() => {
  const id = Cookies.get("id")

  fetch(`http://localhost:5000/api/appointments/${id}`)
    .then(res => res.json())
    .then(data => setAppointments(data))

  const user = Cookies.get("name")
  setName(user)
}, [])


    
 
  return (
  <div className='maincontain'>
    <div className='gngn'>
      <h1 className='fs-5 text-capitalize doctor-name'>{name}</h1>
      <Link className='apt'>View Your Appointments</Link>
      <button className='btn btn-danger p-1' onClick={handleLogout}>Logout</button>
    </div>

    <div className='appointments'>
      {appointments.length > 0 ? (
        appointments.map((a, index) => (
          <div className="card p-3 mb-3 shadow-sm border-bottom border-4" key={index}>

            <div className="row mb-2">
              <div className="col-5 fw-bold ">Patient Name:</div>
              <div className="col-7">
                <span className="badge bg-light text-dark p-2 w-100 text-start">
                  {a.patientName}
                </span>
              </div>
            </div>


            <div className="row mb-2">
              <div className="col-5 fw-bold">Email:</div>
              <div className="col-7">
                <span className="badge bg-light text-dark p-2 w-100 text-start">
                  {a.email}
                </span>
              </div>
            </div>

            <div className="row">
              <div className="col-5 fw-bold">Appointment Time:</div>
              <div className="col-7">
                <span className="badge bg-light text-dark p-2 w-100 text-start">
                  {a.dateTime}
                </span>
              </div>
            </div>

          </div>
        ))
      ) : (
        <p className='fw-bold text-white'>No appointments yet</p>
      )}
    </div>
  </div>
);

}

export default Doctor