import React from 'react';
import useLoadData from '../../../Shared/Hooks/useLoadData';
// import Inventory from './Inventory';
import InventoryCard from './inventoryCard';

const Inventories = () => {
const inventories = useLoadData('https://guarded-ravine-66276.herokuapp.com/home')
console.log(inventories)
    return (
        <div className="container my- mx-auto">
         <p className=' text-left my-5'> We have <span className=" text-[#F44617]  text-2xl px-2">{inventories.length}</span> Vehicles availble.</p>
          
          {/* {inventories.map(inventory=><Inventory key={inventory.id} inventory={inventory}></Inventory>)} */}
          <InventoryCard></InventoryCard>
        </div>
    );
};

export default Inventories;