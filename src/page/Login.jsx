import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Login = () => {
  const navigate =useNavigate()
  const[err ,setErr]=useState(false)
  const [loading,setLoading]=useState(false)
  const handleSubmit =async (e)=>{
    e.preventDefault()
    
   
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email);
    
    try{
       await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    
        } catch (err) {
          setErr(true);
          setLoading(false);
        }
      };
         
  return (
    <div className='formContainer'>
    <div className="formWrapper">
      <span className="logo">Chat</span>
      <span className="title">Login</span>
        <form onSubmit={handleSubmit} >

<input type="email" placeholder='email'/>
<input type="password" placeholder='password'  />


<button >Sign in</button>
{err && <span>Somthing went wrong</span>}
        </form>
        <p>YO don't have an account ? <Link to='/register'>Register</Link></p>
    </div>
  
</div>
  )
}

export default Login
