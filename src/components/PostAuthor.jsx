import React from 'react'
import Avatar from "../images/ben.jpg"
import { Link } from 'react-router-dom'

const PostAuthor = () => {
  return (
    <Link to ={`/post/users/sfdf` } className='post__author'>

   <div className="post-author-avatar">
    <img src={Avatar} alt ="me"  className='Avatar'/>
   </div>

   <div className="post__author-details">
    <h5>By : Benedict Omondi</h5>
   </div>
   </Link>
  )
}

export default PostAuthor