import React from 'react';
import useLoadData from '../../Shared/Hooks/useLoadData';

const SectionTwo = () => {
    const imgs= useLoadData("data.json")
    console.log(imgs)
    return (
       <div className='container mx-auto mt-15'>
           <h2 className='text-5xl font-lg text-[#F44617]  '>Our Partners</h2>
            <div className='grid grid-cols-2 sm:grid-cols-6 mx-auto pl-10 sm:pl-3  gap-6'>
            {imgs.map(img=>
                <div className='my-5'>
                    <img className='w-[125px] ' src={img} alt="" />
                </div>

            )}
        </div>
       </div>
    );
};

export default SectionTwo;