import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Tooltip } from '@mui/material';
import useLoadData from '../../Shared/Hooks/useLoadData';


    


const ManageItems = () => {
    const url='https://guarded-ravine-66276.herokuapp.com/manageInv'
    const data= useLoadData(url)
   
    const [rows, setData]=useState([])

    useEffect(()=>setData(data),[data])

    const deleteItem=(index,id)=>{
        const filterd= rows.filter(info=>info._id !==id)
        setData(filterd)
    }

    const handleDelete= (index, id)=>{
        fetch(`https://guarded-ravine-66276.herokuapp.com/manage/${id}`, {
        method: 'DELETE',
        })
        .then(res => res.json())
        .then(res => res && deleteItem(index,id))
    }
    return (
              <TableContainer className='container mx-auto' component={Paper}>
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
                            <TableCell align="left">{row.name}</TableCell>
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
            );
            }

export default ManageItems;