import React from 'react';
import Banner from './Banner';
import Inventories from './Inventory/Inventories';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

const Home = () => {
    return (
        <div>  
            <Banner></Banner>
            <SectionOne></SectionOne>
            <Inventories></Inventories>
            <SectionTwo></SectionTwo>
        </div>
    );
};

export default Home;