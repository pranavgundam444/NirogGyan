import React, { useState } from 'react'
import './Login.css'
import Cookies from 'js-cookie'


const Login = ({logged}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [hasAccount, setHasAccount] = useState(true)
    const [actCreated, setActCreated] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        const userDetails = {email, password}
        const url = 'http://localhost:5000/login'
        const options = {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(userDetails)
        }
        const response = await fetch(url, options)
        const result = await response.json()
        console.log(result)
        if(result.token) {
            if(result.role === "Patient") {
                logged(true)
                Cookies.set('jwt_token', result.token, {expires: 30})
                Cookies.set('role', "Patient", {expires:30})
                Cookies.set('name', email.split('@')[0], {expires: 30})
                Cookies.set('id', result.id, {expires: 30})
            } else if(result.role === "Doctor") {
                logged(true)
                Cookies.set('jwt_token', result.token, {expires: 30})
                Cookies.set('role', 'Doctor', {expires: 30})
                Cookies.set('name', email.split('@')[0], {expires: 30})
                Cookies.set('id', result.id, {expires: 30})
            }
            
        } else {
            setError(result.error)
        }
    }

    const createAccount = async (e) => {
        e.preventDefault()
        const userDetails = {name, email, password}
        const url = 'http://localhost:5000/create'

        const options = {
            method: "POST",
            headers: {
                'Content-type' : "application/json"
            },
            body: JSON.stringify(userDetails)
        }
        const response = await fetch(url, options)
        const result = await response.json()
        console.log(result)
        setActCreated(result.message)
    }

  return (
    <div className='mainnn'>
        <div className='d-flex flex-row gap-5'>
            <div className='illustration'>
                <img src='/images/loginlogo.png' alt='login' className='loginimg'/>
            </div>
            <div className='containerrrr'>
                
                {hasAccount ? 
                    <form onSubmit={handleSubmit}>
                        
                        <div className='text-center'>
                            <img src='/images/logo.png' alt='loginlogo' className='loginlogo'/>
                        </div>

                        <h2 className='fontt'>USERNAME</h2>
                        <input type='text' className='input' placeholder='Username' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <h2 className='fontt'>PASSWORD</h2>
                        <input type='password' className='input' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        {error && <p>{error}</p>}
                        <div className='d-flex flex-row justify-content-center'>
                            <div className='d-flex flex-column align-items-center'>
                                <button className=' container-fluid mb-2 btn btn-primary' type='submit'>Login</button>
                                <button className='container-fluid btn rounded-pill createaccount' onClick={() => setHasAccount(prev => !prev)} >Create new account</button>
                                
                            </div>
                        </div>
                    </form>
                    :
                    <form onSubmit={createAccount}>
                        <h1 className='CreateYourAccount'>Create Your Account</h1>
                        <h2 className='fontt'>Your Name</h2>
                        <input type="text" className='input' placeholder='Username' value={name} onChange={(e) => setName(e.target.value)}/>
                        <h2 className='fontt'>SET USERNAME</h2>
                        <input type="email" className='input' placeholder='Username' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <h2 className='fontt'>SET PASSWORD</h2>
                        <input type='password' className='input' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type='submit' className='container-fluid'>Create New Account</button>
                        {actCreated && <p className='text-success mt-3'>{actCreated}</p>}
                    </form>
                }
            </div>
        </div>
    </div>
  )
}

export default Login