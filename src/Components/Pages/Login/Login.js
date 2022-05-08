
import React from 'react';
import {  useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';


const Login = () => {
  
    const navigate = useNavigate();
    const location = useLocation();
    const [ signInWithEmailAndPassword ]= useSignInWithEmailAndPassword(auth);
    let from = location.state?.from?.pathname || "/";
   

    
    const handleSubmit = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password);        
        navigate(from, { replace: true })
        
    }

    return (
        <div className=' mt-10'>
              <div className="container mx-auto font-5xl my-10 text-6xl text-[#F44617]">
                <p >Login</p>
            </div>
           <form className=" container mx-auto px-5" onSubmit={handleSubmit}>
            
           
            <input className='my-5 w-full mb-2 border  rounded pl-4 py-2' type="email" name="email" placeholder='email' required/>
            <br />

             <input className='my-5 w-full mb-2 border  rounded pl-4 py-2' type="password" name="password" placeholder='**********' required/>
            <br />
             <input className='bg-[#F44617] w-full mb-2 py-4 text-white cursor-pointer' type="submit" value="Login" />
        </form>
        <p>Do not have any account? <Link className="text-[#F44617]" to={"/signup"}>Sign up</Link></p>
        </div>
    );
};

export default Login;