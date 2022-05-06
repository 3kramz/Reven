import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Inventory = ({inventory}) => {
   const {id}= useParams()
   console.log(id)
    const {_id, img , disc, stock, brand, price, name} =inventory
    
   
    return (
        <div className='mt-10'>
           
            <div className='h-25 w-[83.4px] border-[#F44617] border-2 '><p className='text-white fs-[14px] bg-[#F44617] py-[5px] px-[10px] '>featured</p></div>
            <div className='border-t-[#F44617] border-t-4  sm:flex'>
                <div className='w-full sm:w-2/5 h-auto'> 
                    <img className='w-full h-auto' src={img} alt=""  />
                    </div>
                <div className='sm:w-3/5 mt-2 sm:mt-0 '> 
                    <div className=' flex justify-between bg-[#f7f7f7] border-b-[#D4D4D4] border-b-2  h-[60px] text-left text-2xl  font-bold ' >
                        
                        <p className=' flex items-center pl-5  text-[#F44617] '>{name}</p>
                        
                        <Link to={ `/inventory/${_id}`}className=' flex items-center px-8 bg-[#F44617]  border-b-[#F44617]  text-white' > Update</Link>


                    </div>
                    <div className='text-left ml-5 mt-4 text-xl'>
                        <p>{disc}</p>
                        <p className='font-bold'>Price: $ <span className='text-slate-600'>{price}</span></p>
                        <p className='font-bold'> Stock: {stock}</p>
                        <p className='font-semibold text-rose-700'>{brand}</p>
                    </div>
                  
                </div>
            </div>
            
        </div>
    );
};

export default Inventory;
