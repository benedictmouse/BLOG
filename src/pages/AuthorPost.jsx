import React,{useState} from 'react'
import PostItem from '../components/PostItem'
import { DUMMY } from '../data'

function AuthorPost() {
    const [post, setPost] = useState(DUMMY)
    return (
      <section className='posts'>
       {post.length>0? <div className="container post_container">
         {
              post.map(({ID,thumbnail,category,title,desc,authorID}) => <PostItem key={ID} postID={ID} thumbnail={thumbnail} category={category} title={title}
              description={desc} authorID={authorID}  />)
            
          }
         </div> :<h2 className='no_post'>no post</h2>} 
  
      </section>
  )
}

export default AuthorPost