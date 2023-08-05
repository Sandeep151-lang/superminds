import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const router = useNavigate()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    const onsubmit=async()=>{
        const payload={
            email,
            password
        }
        try {
          const res =  axios.post(``,payload)
          if(res){
            router('/')
          }
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <div className='login-page'>
        <div className='login-section'>
            <div>
                <h2 className='register-heading'>Login To <span className='super-mind'>Supermind</span></h2>
            </div>
            <div className='login-feild'>
            <label>Enter Email</label>
            <br/>
            <input type='email' placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='login-feild'>
            <label>Enter Password</label>
            <br/>
            <input type='password' placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
                <button className='register-btn' onClick={onsubmit}>Login</button> 
            <div className='login-account'>
            <p>Don't have an account please <Link to="/register">Register</Link></p>
        </div> 
        </div>
        
    </div>
  )
}

export default Login