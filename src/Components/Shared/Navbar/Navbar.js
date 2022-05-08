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
        <div className='bg-gray-400/[.9] h-24 items-center flex  w-full sticky top-0'>
           
            <div className="w-6 h-6 sm:hidden" onClick={()=>setOpen(!open)}>
               {open? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>

            <nav className="sm:flex justify-between  container mx-auto ">
                <div>
                   <Link to="/">RIVEN DRIVEN </Link>
                </div >

                <div className={` sm:flex justify-center w-96 mx-auto sm:static gap-4 absolute duration-300 ease-in ${open? "top-0":"top-[-120px] text-center"}` }>
                        <div>
                            <Link to="/manage-items">Manage Items </Link>
                        </div>
                        <div>
                            <Link to="/add-item">Add Item</Link>
                        </div>
                        <div>
                            <Link to="/my-items">My items</Link>
                        </div>
                        <div>
                           {
                               user?.emailVerified? <p onClick={()=>signOut(auth)}> Sign  out</p>: <Link to="/login">Login</Link>
                           }
                        </div>
                        
                </div>
            </nav>
       </div>
    );
};

export default Navbar;