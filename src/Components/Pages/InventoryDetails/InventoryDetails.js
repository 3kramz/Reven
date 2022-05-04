import React from 'react';
import {useParams} from "react-router-dom";

const InventoryDetails = () => {
    const {id }=useParams()
    return (
        <div>
            {id}
            <h1>hello </h1>
        </div>
    );
};

export default InventoryDetails;