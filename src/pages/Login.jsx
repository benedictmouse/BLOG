import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [userData ,setUserData] = useState ({
    name :'',
    email :'',
    password :'',
    password2 :'',
  })

  const ChangeinputHandler = (e) => {
    setUserData (prevState => {
      return {...prevState , [e.target.name]:e.target.value} 
    })
  }
  return (
   <section className="register">
    <div className="container">
      <h2>Login</h2>
      <form className='form register_form'>
        <input type='emailt' placeholder='email' name='email' value={userData.email} onChange={ChangeinputHandler}/>
        <input type='password' placeholder='password' name='password' value={userData.name} onChange={ChangeinputHandler}/>
        <button type="submit" className='btn btn-primary'>Login</button>
      </form>
      <small>Don't have an account? <Link to='/register'>Register</Link></small>
    </div>
   </section>
  )
}

export default Login