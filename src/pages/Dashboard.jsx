import React , {useState}from 'react'
import { Link } from 'react-router-dom'
import { DUMMY } from '../data'



function Dashboard() {

  const [post ,setPost] =useState (DUMMY)

  return (
   <section className='dashboard'>
    {
      post.length ? <div className="dashboard_post">
        {
          post.map(post => {
            return<article key={post.ID} className='dashboard_post'>
              <div className="dashboard_post-thumbnail">
                <img src={post.thumbnail} alt='ben'/>
              </div>
              <h5>{post.title}</h5>
              <div className="dashboard_post-action">
                <Link to={`/post/${post.ID}`} className="btn btn-primary">View</Link>
                <Link to={`/post/${post.ID}/edit`} className="btn btn-primary">edit</Link>
                <Link to={`/post/${post.ID}/delete`} className="btn btn-danger">delete</Link>

              </div>
            </article>
        })
      }
      </div>
    : <h2 className='text-center'>No post yet</h2>
    }
   </section>
)
  }

export default Dashboard