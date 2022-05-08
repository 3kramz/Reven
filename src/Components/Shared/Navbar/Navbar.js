import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon ,XIcon } from '@heroicons/react/solid'
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const [open, setOpen] = useState(false)
    
    return (
        <div className='bg-[#F46617] h-24 items-center flex  w-full sticky top-0'>
           
            <div className="w-6 h-6 sm:hidden " onClick={()=>setOpen(!open)}>
               {open? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>

            <nav className="sm:flex justify-between  container mx-auto ">
                <div className='font-black text-xl text-orange-200'>
                   <Link to="/">RIVEN DRIVEN </Link>
                </div >

                <div className={` sm:flex justify-center  mx-auto sm:static gap-4 text-gray-900 bg-[#F46617]  text-xl font-lg absolute duration-300 ease-in ${open? "top-0":"top-[-120px] text-center"}` }>
                        <div>
                            {user?.emailVerified && <Link to="/manage-items">Manage Items </Link>}
                        </div>
                        <div>
                            { user?.emailVerified && <Link to="/add-item">Add Item</Link>}
                        </div>
                        <div>
                            {user?.emailVerified &&  <Link to="/my-items">My items</Link> }
                        </div>
                        <div>
                            <Link to="/blogs">Blogs</Link> 
                        </div>
                        <div>
                           {user?.emailVerified? <p onClick={()=>signOut(auth)}> Sign  out</p>: <Link to="/login">Login</Link>}
                        </div>
                        
                </div>
            </nav>
       </div>
    );
};

export default Navbar;