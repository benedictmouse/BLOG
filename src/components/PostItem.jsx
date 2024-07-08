import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'



const PostItem = ({postID,category,title,description,authorID,thumbnail}) => {
  const shortDescription = description.length>145 ?  description.substring(0,145)+"..." : description

  return (
    <>
   
    <div className="card" >
    <img src={thumbnail}class="card-img-top" alt="..."/>
    <div class="card-body">
     <Link to ={`/post/${postID}`}>
        <h3>{title}</h3>
     </Link>
      <p class="card-text">{shortDescription}</p>
      <div className='post__footer'>
      <PostAuthor/> 
      <Link to ={`/post/categories/${category}`}>
        {category}
       </Link>
      </div>
    </div>
  </div>
  

  </>
  )
}

export default PostItem