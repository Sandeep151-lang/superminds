import React from 'react'
import Nav from './Nav'

const Post = () => {
  return (
    <>
    <Nav/>
    <div className='post-form'>
        <div>
            <input type='text' placeholder='Enter subject'/>
        </div>
        <div>
            <textarea placeholder="enter post"/>
        </div>
        <div>
            <button className='post-btn'>Add Post</button>
        </div>
    </div>
    </>
  )
}

export default Post