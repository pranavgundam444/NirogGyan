  import React from 'react'
  import { Link } from 'react-router-dom'
  import Header from '../Header/Header';
  import './Home.css'

  const Home = ({logged}) => {
  
    return (
      <div className='containerr'>
        <Header logged={logged}/>
        <div className='body'>
          <div className='part1'>

              {/* <h1 className='mb-4 fs-0 firstBook'>Book appointment <br/> with Trusted Doctors</h1> */}
              <img src="/images/docnirog.png" className='doc' alt="doctors" />


            <div className='info'>
              <h1 className='mb-4 fs-0 book'>Book appointment <br/> with Trusted Doctors</h1>
              
              <div className='d-flex align-items-center text-center gap-2'>
                <img 
                  src="/images/doc1.avif" 
                  alt="profile icon"
                  className="profile-icon mr-0"
                />
                <img 
                  src="/images/doc2.webp" 
                  alt="profile icon"
                  className="profile-icon ml-0"
                />
                <img 
                  src="/images/doc4.webp" 
                  alt="profile icon"
                  className="profile-iconn"
                />

                <p className='text-start'> Simply browse through our extensive list of Trusted Doctors, <br/> schedule your appointment hassle-free</p>
              </div>
              <Link className='text-decoration-none' to='/patient'>
                <button className='BookingButton'>Book Appointment</button>
                {/* <FontAwesomeIcon icon={faArrowRight} className='text-dark' /> */}
              </Link>
            </div>
          </div>
          <div className='part2'>
            <h3>Find By Speciality</h3>
            <p>Simply Browse Through our extensive list of trusted doctors <br/> schedule your appointment hassle-free</p>
            <div className='d-flex flex-row justify-content-center align-items-center'>
              <div className='doctors'>
                <img src='/images/profile1.webp' alt='profile1' className='profile-icons' />
                <p>Dermatologist</p>
              </div>
              <div className='doctors'>
                <img src='/images/profile2.png' alt='profile2' className='profile-icons' />
                <p>Cardiologist</p>
              </div>
              <div className='doctors'>
                <img src='/images/cardiolo.png' alt='profile3' className='profile-icons' />
                <p>Cardiologist</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    )
  }

  export default Home