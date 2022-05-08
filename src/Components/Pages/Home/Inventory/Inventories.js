import React from 'react';
import useLoadData from '../../../Shared/Hooks/useLoadData';
// import Inventory from './Inventory';
import InventoryCard from './inventoryCard';

const Inventories = () => {
const inventories = useLoadData('https://guarded-ravine-66276.herokuapp.com/home')

    return (
        <div className="container my- mx-auto">

          <div className='grid grid-cols-1 sm:grid-cols-3 mx-auto pl-5 sm:pl-0 w-11/12 gap-6'>
            {inventories.map(inventory=><InventoryCard key={inventory._id} inventory={inventory}></InventoryCard>)}

          </div>
          
          
        </div>
    );
};

export default Inventories;