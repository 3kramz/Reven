import React from 'react';
import Inventory from './Inventory';

const Inventories = () => {
    return (
        <div className="container my- mx-auto">
         <p className=' text-left my-5'> We have # Vehicles availble.</p>
          <Inventory></Inventory>
          <Inventory></Inventory>
          <Inventory></Inventory>
          <Inventory></Inventory>

        </div>
    );
};

export default Inventories;