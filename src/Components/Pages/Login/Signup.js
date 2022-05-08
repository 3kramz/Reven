
import React from 'react';
import { signOut } from "firebase/auth";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';


const Signup = () => {
    const [ createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, ] = useSendEmailVerification(auth);
     const navigate = useNavigate();
    
    
    const handleSubmit = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification(email)
        await signOut(auth)
        toast("Varification email sent..")
        navigate('/login');
    }

    return (
        <div className=' mt-10'>
              <div className="container mx-auto font-5xl my-10 text-6xl text-[#F46617]">
                <p >Signup</p>
            </div>
           <form className=" container mx-auto px-5" onSubmit={handleSubmit}>
            
           
            <input className='my-5 w-full mb-2 border  rounded pl-4 py-2' type="email" name="email" placeholder='email' required/>
            <br />

             <input className='my-5 w-full mb-2 border  rounded pl-4 py-2' type="password" name="password" placeholder='**********' required/>
            <br />
             <input className='bg-[#F46617] w-full mb-2 py-4 text-white cursor-pointer' type="submit" value="Signup" />
        </form>
        <p>Already have account? <Link className="text-[#F46617]" to={"/login"}>Login</Link></p>
        </div>
    );
};

export default Signup;