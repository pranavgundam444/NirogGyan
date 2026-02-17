    import React, { useEffect, useState} from 'react'
    import { motion, useMotionValue, useSpring } from "framer-motion";
    import { Phone, MapPin, Mail } from "lucide-react";
    import { Link } from 'react-router-dom'
    
    import './Nirogya.css'

    const Nirogya = () => {

        const [email, setEmail] = useState('')
        const [subject, setSubject] = useState('')
        const [message, setMessage] = useState('')
        const [successfull, setSuccessfull] = useState(false)
        const [animateBg, setAnimateBg] = useState(false);
        const [scrollY, setScrollY] = useState(0);
        const [menuOpen, setMenuOpen] = useState(false);
        const [hover, setHover] = useState(false);

  // Cursor follower
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 550 };
  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 24);
      mouseY.set(e.clientY - 24);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Hover detection
  useEffect(() => {
    const add = () => setHover(true);
    const remove = () => setHover(false);

    const elements = document.querySelectorAll("button,a");
    elements.forEach((el) => {
      el.addEventListener("mouseenter", add);
      el.addEventListener("mouseleave", remove);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", add);
        el.removeEventListener("mouseleave", remove);
      });
    };
  }, []);


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

            <ul className="nav-links align-items-center">
                <li><a href="#home" className='text-decoration-none text-dark'>Home</a></li>
                <li><a href="#services" className='text-decoration-none text-dark'>Services</a></li>
                <li><a href="#contact" className='text-decoration-none text-dark'>Contact</a></li>
            </ul>

            <Link to="/login">
                <button className="btn btn-primary">Login</button>
            </Link>
            </div>


            <div className='bodyy'>
                <section className='bd1' id='home'>
                    <motion.div
                        style={{
                            x: sx,
                            y: sy,
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: 9999,
                            pointerEvents: "none",
                            border: "2px solid blue",
                        }}
                        animate={{
                            width: hover ? 70 : 40,
                            height: hover ? 70 : 40,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                        }}
                    />


                    <div className='first'>
                        <div className='d-flex flex-column justify-content-center'>
                            
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
                <section className='bd3 min-vh-100 d-flex justify-content-center align-items-center position-relative' id='contact'>

                    <div className="d-flex rounded overflow-hidden" style={{width: "900px", height:"550px"}}>

                        {/* LEFT SIDE */}
                        <div style={{width:"100%"}}>
                        <div className="bg-white p-5 text-white">
                            <h1 className='text-dark fs-4 mb-3'>Get In Touch</h1>
                            <p className='text-dark mb-4 w-50'>We'd love to hear from you. Send us a message and we’ll respond as soon as possible. </p>
                            <div className='d-flex flex-row gap-4'>
                                <div className='d-flex gap-2'>
                                    <Mail className='text-danger'/>
                                    <p className='text-dark ml-3'>Niroggyan@gmail.com</p> 
                                </div>
                                <div className='d-flex gap-2'>
                                    <Phone className='text-danger' />
                                    <p className='text-dark'>9808978687</p> 
                                </div>
                                <div className='d-flex gap-2'>
                                    <MapPin className='text-danger' />
                                    <p className='text-dark'>Malakpet</p> 
                                </div>
                            </div>
                        </div>  

                        <div className="bg-danger p-5">
                            <h5 className='text-white mb-3'>About Us</h5>
                            <p className='text-white mb-5'>Niroggyan is a hospital which has the success rate of 100%. </p>
                            <div className='d-flex flex-row justify-content-between'>
                                <p className='text-white'>Home</p>
                                <p className='text-white'>Portfolio</p>
                                <p className='text-white'>Services</p>
                                <p className='text-white'>Team Member</p>
                                <p className='text-white'>Client</p>
                                <p className='text-white'>Contact</p>
                            </div>
                            
                        </div>
                        </div>


                        {/* RIGHT SIDE (floating card) */}

                        <div className="bg-white p-4 rounded shadow-lg position-absolute" style={{
                            top: "40%",
                            right: "22%",
                            transform: "translateY(-50%)",
                            width: "320px",
                            zIndex: 5
                        }}>
                            <h5 className="mb-3">Say Something</h5>

                            <input type='text'
                            placeholder='Your Email'
                            value={email}
                            className='form-control mb-3'
                            onChange={(e) => setEmail(e.target.value)}
                            />

                            <input type='text'
                            placeholder='Subject'
                            value={subject}
                            className='form-control mb-3'
                            onChange={(e) => setSubject(e.target.value)}
                            />

                            <textarea
                            placeholder='Message'
                            className='form-control mb-3'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            />

                            <button className="btn btn-danger w-100">SEND</button>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
    }

    export default Nirogya
