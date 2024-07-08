import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar1 from  "../images/nerd1.jpeg"
import Avatar2 from  "../images/nerd2.jpeg"
import Avatar3 from  "../images/nerd3.jpeg"
import Avatar4 from  "../images/ben.jpg"

const authorData =[
 { id:1, avatar :Avatar1 , name : "Benedict Omondi" ,posts:3},
 { id:2, avatar :Avatar2 , name : "collins Omondi" , posts:1},
 { id:1, avatar :Avatar3 , name : "Xavier  otieno" ,posts:6},
 { id:1, avatar:Avatar4 , name : "Andrea Achieng" ,posts:2},
  
]

const Author = () => {
  const [authors,setAuthors]= useState(authorData)

  
  return (
<section className='authors'>
  {authors.length >0? <div className='container authors_container'>
    {authors.map(({id ,avatar, name ,posts}) =>{
      return <Link key={id} to = {`/post/users/${id}`} className='author-link'>
         <div className="author-card">
        <div className="authors_avatar">
          <img src={avatar} alt={name} className="avatar" />
        </div>
        <div className="authors_info">
          <h4>{name}</h4>
          <p>{posts} posts</p>
          </div>
          </div>
      </Link>
    } )
  }
  </div> :<h2>No users found</h2>}
</section>
)
  }
export default Author