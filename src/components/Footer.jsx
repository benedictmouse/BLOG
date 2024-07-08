import React from 'react'
import { Link } from 'react-router-dom'


const Footer =()=> {
  return (
    <footer>
      <ul className='footer__categories'>
        <li><Link to = "/post/categories/Agriculture">Agriculture</Link></li>
        <li><Link to = "/post/categories/Entertainment">Entertainment</Link></li>
        <li><Link to = "/post/categories/Education">Education</Link></li>
        <li><Link to = "/post/categories/Business">Business</Link></li>
      </ul>
      <div className="footer_copyright">
        <small>all rights reserved &copy copyright Bentech</small>
      </div>
    </footer>
  )
}

export default Footer