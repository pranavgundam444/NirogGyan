    import React, { useEffect, useState } from 'react'
    import { Link, NavLink } from 'react-router-dom'
    import './Nirogya.css'

    const Nirogya = () => {

        const [email, setEmail] = useState('')
        const [subject, setSubject] = useState('')
        const [message, setMessage] = useState('')
        const [successfull, setSuccessfull] = useState(false)
        const [animateBg, setAnimateBg] = useState(false);
        const [scrollY, setScrollY] = useState(0);
        const [menuOpen, setMenuOpen] = useState(false);


        
        const handleSubmit= () => {
            if(email && subject && message){
                setSuccessfull(true)
                setEmail('')
                setSubject('')
                setMessage('')
            }
            
        }

        useEffect(() => {
            const onScroll = () => setScrollY(window.scrollY);
            window.addEventListener("scroll", onScroll);
            return () => window.removeEventListener("scroll", onScroll);
        }, []);



        const reveals = document.querySelectorAll(".bd2");

        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
            });
        },
        );

        reveals.forEach((el) => observer.observe(el));


        const animation = document.querySelectorAll(".bd3");

        const result = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
            });
        },
        );

        animation.forEach((el) => result.observe(el));



    return (
        <div>
            <div className="header">
            <a href="#home">
                <img src="/images/logo.png" className="hsptl-logo" alt="nirogyan" />
            </a>

            <button className="menu-btn">☰</button>

            <ul className="nav-links text-decoration-none">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <Link to="/login">
                <button className="btn btn-primary">Login</button>
            </Link>
            </div>


            <div className='bodyy'>
                <section className='bd1' id='home'>
                    <div className='first'>
                        <div className='d-flex flex-column'>
                            
                            <h1 className='heading'>We help patients <br/> live a healthy, <br /> longer life</h1>
                            <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br /> do eiusmod tempor incididunt ut labore et dolore magna aliqua <br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ? <br /></p>
                            
                            <Link to="/login" className='text-decoration-none reqButton'>
                                <button className='apt-button'>Request an appointment</button>
                            </Link>
                        </div>
                        <div>
                            <img
                            src="/images/cardiolo.png"
                            alt="doctor"
                            className="img-cardiolo"
                            />
                        </div>
                    </div>
                    <div className="second">
                        <div className='row justify-content-center gap-2'>
                            <div className='col-sm-12 col-md-4 col-lg-4 bg-info  bg-opacity-10 card d-flex flex-column justify-content-center align-items-center '>
                                <h3>50+</h3>
                                <p>Labs & Hospitals</p>
                            </div>
                            <div className='col-sm-12 col-md-4 col-lg-4 bg-secondary  card d-flex flex-column justify-content-center align-items-center'>
                                <h3>1M+</h3>
                                <p>Smart Reports Delivered</p>
                            </div>
                            <div className='col-sm-12 col-md-4 col-lg-4 col-md-4 col-lg-4 bg-light  card d-flex flex-column justify-content-center align-items-center'>
                                <h3>5+</h3>
                                <p>Languages Supported</p>
                            </div>
                            <div className='col-sm-12 col-md-4 col-lg-4 bg-warning  card d-flex flex-column justify-content-center align-items-center'>
                                <h3>300%</h3>
                                <p>Privacy-First</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='bd2' id='services'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
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
                        <div className='col-sm-12 col-md-6 col-lg-4'>
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
                        <div className='col-sm-12 col-md-6 col-lg-4'>
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
                        <div className='col-sm-12 col-md-6 col-lg-4'>
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
                        <div className='col-sm-12 col-md-6 col-lg-4'>
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
                        <div className='col-sm-12 col-md-6 col-lg-4'>
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
                <section className='bd3' id='contact' >
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <h1>Contact Us</h1>
                        <p className='mb-5'>Got a technical issue ? Want to send feedback about a feature ? Let us know.</p>
                    </div>
                    <div>
                        <h2 className='credentials'>Your Email</h2>
                        <input type='text' placeholder='example@gmail.com' value={email} className='input-box mb-4' onChange={(e) => setEmail(e.target.value)}/>
                        <h2 className='credentials'>Subject</h2>
                        <input type='text' placeholder='Let us know how we can help you' value={subject} className='input-box mb-4' onChange={(e) => setSubject(e.target.value)} />
                        <h2 className='credentials'>Your Message</h2>
                        <textarea className='comment-box' type='text' placeholder='Leave a comment' value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
                    {successfull && <p>Feedback Submitted Successfully</p>}
                </section>
            </div>
        </div>
    )
    }

    export default Nirogya
