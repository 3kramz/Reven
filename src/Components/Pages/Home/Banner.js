import React from 'react';

const Banner = () => {
    return (
        <div className='h-screen bg-cover w-full bg-[url("https://demo.themesuite.com/automotive/images/slide-show3.jpg")] flex items-center'>
           <div className='ml-10 font-black'>
               <p className="text-green-500 text-5xl">WOW FACTOR?</p>
               <p className="text-white text-bold text-7xl">STANDARD</p>
           </div>
        </div>
    );
};

export default Banner;