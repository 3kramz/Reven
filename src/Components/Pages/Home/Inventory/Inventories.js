import React from 'react';
import { Link } from 'react-router-dom';
import useLoadData from '../../../Shared/Hooks/useLoadData';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import Inventory from './Inventory';
import InventoryCard from './inventoryCard';

const Inventories = () => {
const inventories = useLoadData('https://guarded-ravine-66276.herokuapp.com/home')

    return (
        <div className="container my- mx-auto">
           <p className='my-5  text-[#F46617]  text-5xl font-4xl' > Out Top Products</p>

          <div className='grid grid-cols-1 sm:grid-cols-3 mx-auto pl-5 sm:pl-0 w-11/12 gap-6'>
            {inventories.map(inventory=><InventoryCard key={inventory._id} inventory={inventory}></InventoryCard>)}

          </div>
          
              <div className='text-right  text-xl font-black mt-5  w-11/12 mx-auto'>
                   <Link className='text-white rounded-lg bg-[#F46617] px-5 py-2'  to={'manage-items'} >All <ArrowRightAltIcon/> </Link>
              </div>
           
          
        </div>
    );
};

export default Inventories;