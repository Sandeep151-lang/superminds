import React from 'react'
import EditIcon from '../icons/EditIcon'
import DeleteIcon from '../icons/DeleteIcon'
import Nav from './Nav'

const Blog = () => {
  return (
    <div>
        <Nav/>
        <img className='head-image' src='https://img.freepik.com/free-vector/background-sketches-blog-elements_23-2147572815.jpg?w=740&t=st=1691161802~exp=1691162402~hmac=e841b715c19d5b8e0575746464cd00509100c7d94f160a7f7091b8af83bfa247'  alt='image'/>
    <div className='blog-detail'>
        <img className='profile-image' alt="" src=''/>
        <p className='profile-name'>Sandeep</p>
    </div>
    <div className='blogs-section'>
        <DeleteIcon className="delete-icon"/>
        <EditIcon className="edit-icon"/>
        <h2>Subject</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla ipsam autem ad necessitatibus ut natus odio voluptas cum similique? Earum ratione nam sit accusamus corporis voluptatibus aut expedita fuga.</p>
    </div>
    </div>
  )
}

export default Blog