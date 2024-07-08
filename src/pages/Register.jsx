import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
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
      <h2>sign up</h2>
      <form className='form register_form'>
        <input type='text' placeholder='Full Name' name='name' value={userData.name} onChange={ChangeinputHandler}/>
        <input type='emailt' placeholder='email' name='email' value={userData.email} onChange={ChangeinputHandler}/>
        <input type='password' placeholder='password' name='password' value={userData.name} onChange={ChangeinputHandler}/>
        <input type='password' placeholder='confirm password' name='password' value={userData.name} onChange={ChangeinputHandler}/>
        <button type="submit" className='btn btn-primary'>register</button>
      </form>
      <small>Already have an account? <Link to='/login'>Login</Link></small>
    </div>
   </section>
  )
}

export default Register