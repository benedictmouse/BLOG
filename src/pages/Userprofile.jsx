import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Avatar from "../images/nerd2.jpeg"
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function Userprofile() {



  const [avatar, setAvatar] = useState(Avatar)
  const [name,setName]= useState('')
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const [newPassword,setNewPassword]= useState('')
  const [confirmPassword,setConfirmPassword]= useState('')

  return (
   <section className='profile'>
    <div className='container profile_container'>
      <Link to ={`/mypost/sdfsdf/`} className='btn btn-primary'>my post</Link>
      <div className="profile_detail">
        <div className="avatar_wrapper">
          <img src={avatar} alt="avatar"  />
        </div>
        <form className='avatar_form'>
          <input type ="file"name='avatar' id ="avatar"  onChange={e => setAvatar(e.target.files[0])} accept='png ,jpg,jpeg'/>
          <label htmlFor='avatar'><FaEdit /></label>
        </form>
        <button className='profile_avatar-btn'><FaCheck /></button>
      </div>
      <h4>Benedict Omondi</h4>
      </div>
      <form className='form profile_form'>
        <input type ="text" placeholder='fullname' value={name} onChange={e =>setName(e.target.value)}/>
         <input type ="email" placeholder='email' value={email} onChange={e =>setEmail(e.target.value)}/>
          <input type ="password" placeholder='pasword' value={password} onChange={e =>setPassword(e.target.value)}/>
           <input type ="password" placeholder='New password' value={newPassword} onChange={e =>setNewPassword(e.target.value)}/>
            <input type ="password" placeholder='confirm password' value={confirmPassword} onChange={e =>setConfirmPassword(e.target.value)}/>
            <button type="submit" className='btn btn-primary'>update details </button>
      </form>
   
   </section>
  )
}

export default Userprofile