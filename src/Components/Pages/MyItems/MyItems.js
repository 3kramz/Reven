import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Tooltip } from '@mui/material';
import useLoadData from '../../Shared/Hooks/useLoadData';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const MyItems = () => {
    const [user] = useAuthState(auth);
    
    const url=`https://guarded-ravine-66276.herokuapp.com/myItems?email=${user.email}`
    const data= useLoadData(url)
   
    const [rows, setData]=useState([])

    useEffect(()=>setData(data),[data])

    const deleteItem=(index,id)=>{
        const filterd= rows.filter(info=>info._id !==id)
        setData(filterd)
    }

    const handleDelete= (index, id)=>{
        fetch(`https://guarded-ravine-66276.herokuapp.com/delete/${id}`, {
        method: 'DELETE',
        })
        .then(res => res.json())
        .then(res => res && deleteItem(index,id))
    }
    return (
        <div className='container mx-auto' >
        <p className=' text-left my-5'> We have <span className=" text-[#F44617]  text-2xl px-2">{rows.length}</span> Vehicles availble.</p>
         
             <TableContainer component={Paper}>
               <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
                   <TableHead className='bg-[#F44617]  '>
                       <TableRow className="">
                           <TableCell>No.</TableCell>
                           <TableCell>Name</TableCell>
                           <TableCell align="left">Email</TableCell>
                           <TableCell align="left">Supplier</TableCell>
                           <TableCell align="right">Price</TableCell>
                           <TableCell align="right">Stock</TableCell>
                           <TableCell align="right">sold</TableCell>
                           <TableCell align="right">Delete</TableCell>
                       
                       </TableRow>
                   </TableHead>
                   <TableBody>
                   {rows.map((row, i) => (
                       <TableRow key={row._id}  >
                           <TableCell align="left">{i+1}</TableCell>
                           <TableCell as={Link} to={`/inventory/${row._id}`} align="left">{row.name}</TableCell>
                           <TableCell align="left">{row.email}</TableCell>
                           <TableCell align="left">{row.supplier}</TableCell>
                           <TableCell align="right">{row.price}</TableCell>
                           <TableCell align="right">{row.stock}</TableCell>
                           <TableCell align="right">{row.sold}</TableCell>
                           <TableCell align="right">
                                                   <Tooltip title="Delete">
                                                       <IconButton onClick={()=>handleDelete(i, row._id)}>
                                                           <DeleteIcon />
                                                       </IconButton>
                                                   </Tooltip>
                           </TableCell>
                       </TableRow>
                   ))}
                   </TableBody>
               </Table>
           </TableContainer>
        </div>
    );
};

export default MyItems;