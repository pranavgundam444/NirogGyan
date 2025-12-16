import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nirogya.css'

const Nirogya = () => {

    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [successfull, setSuccessfull] = useState(false)


    const handleSubmit= () => {
        if(email && subject && message){
            setSuccessfull(true)
            setEmail('')
            setSubject('')
            setMessage('')
        }
        
    }

  return (
    <div>
        <div className='header'>
            <ul className="text-decoration-none">
                    <li className='d-flex'>
                        <a href="#home" className="text-dark text-decoration-none">
                            <img src="/images/logo.png" className='hsptl-logo' alt="nirogyan" />
                        </a>
                    </li>
            </ul>

            <ul className="d-flex gap-5 text-decoration-none text-dark" style={{listStyleType: "none"}}>
                <li><a href="#home" className="text-dark text-decoration-none">Home</a></li>
                <li><a href="#services" className="text-dark text-decoration-none">Services</a></li>
                <li><a href="#contact" className="text-dark text-decoration-none">Contact</a></li>
            </ul>

            <NavLink>
                <Link to="/login">
                    <button className='btn btn-primary'>Login</button>
                </Link>
            </NavLink>
        </div>

        <div className='bodyy'>
            <section className='bd1' id='home'>
                <div className='d-flex flex-column'>
                    <h1 className='heading'>We help patients <br/> live a healthy, <br /> longer life</h1>
                    <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br /> do eiusmod tempor incididunt ut labore et dolore magna aliqua <br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ? <br /></p>
                    <Link to="/login" className='text-decoration-none'>
                        <button className='apt-button'>Request an appointment</button>
                    </Link>
                </div>
                <div>
                    <img src='/images/cardiolo.png' className='img-cardiolo' alt='card' />
                </div>
            </section>
            <section className='bd2' id='services'>
                <div className='row'>
                    <div className='col-4'>
                        <div className='cards'>
                            <h1 style={{fontFamily: "Georgia", fontSize: '30px'}}>Cancer Care</h1>
                            <p>World class care for everyone. Our health system offers unmatched.expert health care. From the lab to the clinic</p>
                                <div className='d-flex flex-row justify-content-between'>
                                    <div className="circle-icon">
                                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </div>
                                    <div className='sqare'>
                                        1
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='cards'>
                            <h1 style={{fontFamily: "Georgia", fontSize: '30px'}}>Labor & Delivery</h1>
                            <p>World class care for everyone. Our health system offers unmatched.expert health care. From the lab to the clinic</p>
                            <div className='d-flex flex-row justify-content-between'>
                                    <div className="circle-icon">
                                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </div>
                                    <div className='sqares'>
                                        2
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='cards'>
                            <h1 style={{fontFamily: "Georgia", fontSize: '30px'}}>Heart & Vascular</h1>
                            <p>World class care for everyone. Our health system offers unmatched.expert health care. From the lab to the clinic</p>
                            <div className='d-flex flex-row justify-content-between'>
                                    <div className="circle-icon">
                                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </div>
                                    <div className='sqared'>
                                        3
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='cards'>
                            <h1 style={{fontFamily: "Georgia", fontSize: '30px'}}>Mental Health</h1>
                            <p>World class care for everyone. Our health system offers unmatched.expert health care. From the lab to the clinic</p>
                            <div className='d-flex flex-row justify-content-between'>
                                    <div className="circle-icon">
                                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </div>
                                    <div className='sqared'>
                                        4
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='cards'>
                            <h1 style={{fontFamily: "Georgia", fontSize: '30px'}}>Neurology</h1>
                            <p>World class care for everyone. Our health system offers unmatched.expert health care. From the lab to the clinic</p>
                            <div className='d-flex flex-row justify-content-between'>
                                    <div className="circle-icon">
                                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </div>
                                    <div className='sqare'>
                                        5
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='cards'>
                            <h1 style={{fontFamily: "Georgia", fontSize: '30px'}}>Burn Treatment</h1>
                            <p>World class care for everyone. Our health system offers unmatched.expert health care. From the lab to the clinic</p>
                            <div className='d-flex flex-row justify-content-between'>
                                    <div className="circle-icon">
                                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                    </div>
                                    <div className='sqares'>
                                        6
                                    </div>
                                </div>
                        </div>
                    </div>
                    
                </div>
                
            </section>
            <section className='bd3' id='contact'>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h1>Contact Us</h1>
                    <p className='mb-5'>Got a technical issue ? Want to send feedback about a feature ? Let us know.</p>
                </div>
                <div>
                    <h2 className='credentials'>Your Email</h2>
                    <input type='text' placeholder='example@gmail.com' value={email} className='mb-4' onChange={(e) => setEmail(e.target.value)}/>
                    <h2 className='credentials'>Subject</h2>
                    <input type='text' placeholder='Let us know how we can help you' value={subject} className='mb-4' onChange={(e) => setSubject(e.target.value)} />
                    <h2 className='credentials'>Your Message</h2>
                    <textarea cols={53} rows={5} type='text' placeholder='Leave a comment' value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
                {successfull && <p>Feedback Submitted Successfully</p>}
            </section>
        </div>
    </div>
  )
}

export default Nirogya