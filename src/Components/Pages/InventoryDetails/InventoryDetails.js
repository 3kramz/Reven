import React, { useEffect, useState } from 'react';
import { useParams} from "react-router-dom";
import useLoadData from "../../Shared/Hooks/useLoadData"

const InventoryDetails = () => {
    const {id }=useParams()
    const url= `https://guarded-ravine-66276.herokuapp.com/inventory/${id}`
    const inventory = useLoadData(url)
   
    const [data, setData]=useState({})
    useEffect(()=>setData(inventory),[inventory])

    let {_id,  name, img, disc, price, stock, condition, type, fuel, suppleir, email, sold} =data
   
    const handleDalivered=()=>{
       if(stock===0){
          stock= "Sold Out"
          return
        }
       else if(stock>=1){
            stock=stock-1
            sold=sold+1
        }
        const info ={...data, stock,sold}
        setData(info)
        console.log(data)
       
    }

    const handleSubmit= e=>{
        e.preventDefault()
        const newStock= parseInt(e.target.stock.value)
       
        if(newStock && stock ===  "Sold Out"){
        stock=0
        stock=newStock
        const info={...data, stock}
        setData(info)
       }
       else if(newStock && stock !==  "Sold Out"){
        
        stock= stock + newStock
        const info={...data, stock}
        setData(info)
       }
       else{return}
        e.target.reset()
    }

    const handleSaveBtn = e=>{
        fetch(url, {    
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
           alert('users added successfully!!!');
        })
      
    }
    

    return (
        <div className='my-10 container mx-auto'>
            <div className='h-25 w-[83.4px] border-[#F44617] border-2 '><p className='text-white fs-[14px] bg-[#F44617] py-[5px] px-[10px] '>{condition}</p>
            </div>
            <div className='border-t-[#F44617] border-t-4  sm:flex'>
                <div className='w-full sm:w-2/5 h-auto'> 
                    <img className='w-full h-auto' src={img} alt=""  />
                </div>
                <div className='sm:w-3/5 mt-2 sm:mt-0 '> 
                    <div className=' flex justify-between bg-[#f7f7f7] border-b-[#D4D4D4] border-b-2  h-[60px] text-left text-2xl  font-bold ' >
                        <p className=' flex items-center pl-5  text-[#F44617] '>{name}</p>
                        <button onClick={handleSaveBtn} className=' flex items-center px-8 bg-[#F44617]  border-b-[#F44617]  text-white' > Save</button>
                    </div>
                    <div className='text-left ml-5 mt-4 text-xl'>
                        <p className='mb-2'>{disc}</p>
                        <p className='font-bold'>Product ID:   <span className='text-slate-800 font-thin'>{_id}</span></p>
                        <p className='font-bold'>Price:   $<span className='text-slate-800 font-thin'>{price}</span></p>
                        <p className='font-bold'>Type:   <span className='text-slate-800 font-thin'>{type}</span></p>
                        <p className='font-bold'>Fuel:   <span className='text-slate-800 font-thin'>{fuel}</span></p>
                        <p className='font-bold'>Stock:   <span className='text-slate-800 font-thin'>{stock}</span></p>
                        <p className='font-bold'>Total Sold:   <span className='text-slate-800 font-thin'>{sold}</span></p>
                        <p className='font-bold'>Email:   <span className='text-base text-green-600 font-thin'>{email}</span></p>
                        <p className='font-semibold text-rose-700'> Suppleir: {suppleir}</p>
                    </div>
                </div>
             </div>
             <div >
                    <div className=''>
                            <button onClick={handleDalivered} className='bg-[#F44617]  w-64  py-2 text-white text-xl rounded  m-4 '>Delivered</button>
                    </div>
                    <form className='flex w-full  mx-auto border-2' onSubmit={handleSubmit}>
                        <input className="w-3/5 sm:w-4/5 pl-3" placeholder='Add Stock'  type="text" name="stock"  />
                        <input className="w-2/5 sm:w-1/5 bg-[#F44617] px-4 py-2 cursor-pointer text-white"  type="submit" value="Update stock" />
                    </form>
             </div>
          
        </div>
    );
};

export default InventoryDetails;