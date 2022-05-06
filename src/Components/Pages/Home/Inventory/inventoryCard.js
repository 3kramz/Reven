import React from 'react';
import { Link } from 'react-router-dom';
import useLoadData from '../../../Shared/Hooks/useLoadData';
// import {Link, useParams} from "react-router-dom";


const InventoryCard = () => {
   
    

    const inventory = useLoadData(`https://guarded-ravine-66276.herokuapp.com/inventory/6273d80eb152f41d9faed808`)
    const {_id, img , disc, stock, brand,  name , sold, email} =inventory
   
    return (
        <div className='w-[390px] '>
           <div className="h-[211px] ">
             <img className='border border-slate-200 h-full w-full' src={img} alt="" />
           </div>
           <div className="flex items-center justify-center text-3xl h-[41px] text-[#F44617] border border-slate-200">
               <p clasaName=" "> {name}</p>
           </div>
           <div className="flex items-center justify-start pl-3 h-[45px] border border-slate-200">
               <p className='px-3 py-1 border-2 text-green-500 border-green-300 rounded'> new</p>
               <p className='px-3 py-2'> Automated</p>
               <p className='px-3 py-2'> Petrol</p>
           </div>
           <div className="h-[41px] flex items-center justify-start pl-3  border border-slate-200">
               <p clasaName=""> {disc} </p>
           </div>
           <div className="h-[41px] flex items-center justify-start pl-3  border border-slate-200">
               <p clasaName=""> <span className="font-bold">Stock: </span> { stock} </p>
           </div>
           <div className="h-[41px] flex items-center justify-start pl-3  border border-slate-200">
               <p clasaName=""> <span className="font-bold">Sold: </span>{sold}</p>
           </div>
           <div className="h-[41px] flex items-center justify-start pl-3  border border-slate-200">
               <p clasaName="">{email}</p>
           </div>
           <div className="h-[41px] flex items-center justify-start pl-3  border border-slate-200">
               <p clasaName="">{brand}</p>
           </div>
           <div className="h-[41px] flex items-center justify-center text-2xl font-bold pl-3 text-white bg-[#f46617] border border-slate-200">
               <Link to={`/inventory/${_id}`} >update</Link>
           </div> 
        </div>
    );
};

export default InventoryCard;