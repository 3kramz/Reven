import React from 'react';
import { Link } from 'react-router-dom';


const InventoryCard = ({inventory}) => {
   
    const {_id, img , stock, brand,  name , sold, email ,type,fuel, condition} =inventory
   
    return (
        <div className='w-[390px]  '>
           <div className="h-[211px] ">
             <img className='border border-slate-200 h-full w-full' src={img} alt="" />
           </div>
           <div className="flex items-center justify-center text-3xl h-[41px] text-[#F46617] border border-slate-200">
               <p className=" "> {name}</p>
           </div>
           <div className="flex items-center justify-start pl-3 h-[45px] border border-slate-200">
               <p className='px-3 py-1 border-2 text-green-500 border-green-300 rounded'> {condition}</p>
               <p className='px-3 py-2'> {type}</p>
               <p className='px-3 py-2'> {fuel}</p>
           </div>
           
           <div className="h-[41px] flex items-center justify-start pl-3  border border-slate-200">
               <p className=""> <span className="font-bold">Stock: </span> { stock} </p>
           </div>
           <div className="h-[41px] flex items-center justify-start pl-3  border border-slate-200">
               <p className=""> <span className="font-bold">Sold: </span>{sold}</p>
           </div>
           <div className="h-[41px] flex items-center justify-start pl-3  border border-slate-200">
               <p className="">{email}</p>
           </div>
           <div className="h-[41px] flex items-center justify-start pl-3  border border-slate-200">
               <p className="">{brand}</p>
           </div>
          
           <div className="h-[41px] flex items-center justify-center text-2xl font-bold pl-3 text-white bg-[#F46617] rounded-b-lg border border-slate-200">
               <Link to={`/inventory/${_id}`} >update</Link>
           </div> 
        </div>
    );
};

export default InventoryCard;