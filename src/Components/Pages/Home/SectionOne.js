import React from 'react';

const SectionOne = () => {
    return (
        <div className='sm:flex ' >
            
            <div className='w-full sm:w-1/2'>
              <img className='' src="https://demo.joomsky.com/car-manager/demo9/wp-content/themes/car-manager/images/homepage/homepage8/four-features-left-image.jpg" alt="" srcset="" />
            </div>
            <div className='w-full sm:w-1/2 p-5 '>
                <h1 className='text-3xl text-[#F44617] font-2xl text-left'  >Riven Driven</h1>
                <p className='text-xl text-left'>Riven car Driven offers an advanced set of Inventory Management features that help you manage your inventory in the most efficient and cost-effective manner. Riven car Driven also includes an extensive set of customization features which enable you to implement and manage your operations based on the unique requirements of your dealership. </p>
                <br/>
                <p className='text-xl text-left'>Furthermore, through seamless integration with WebManager, the ultimate automotive website, social media, and digital marketing platform, you will be able to market your inventory on hundreds of online marketplaces such as Craigslist and Facebook Marketplace, to name a few, expanding your brand visibility and attracting buyers no matter where they are searching for their next vehicle.</p>
            </div>
        </div>
    );
};

export default SectionOne;