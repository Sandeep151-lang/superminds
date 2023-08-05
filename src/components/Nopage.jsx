import React from 'react'
import {  useNavigate } from 'react-router-dom'

const Nopage = () => {
    const navigate =useNavigate()
  return (
    <div className='nopage'>
        <div className='page-section'>
        <h1>Page not available</h1>
        <button className='no-page-butn' onClick={()=>navigate('/')}>Back To Home</button>
        </div>
    </div>
  )
}

export default Nopage