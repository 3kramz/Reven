import React from 'react';

const AddItem = () => {
    const handlePlaceOrder = event =>{
        event.preventDefault();
        const inventory = {
            name:event.target.name.value,
            email:event.target.email.value,
            img:event.target.img.value,
            disc:event.target.disc.value,
            price:event.target.price.value,
            stock:event.target.stock.value,
            condition:event.target.condition.value,
            type:event.target.type.value,
            fuel:event.target.fuel.value,
            supplier: event.target.supplier.value,
            sold:0
        }

        fetch("https://guarded-ravine-66276.herokuapp.com/addServices", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(inventory)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        })

     event.target.reset()  
    }

    return (
        <div >
            <div className="container mx-auto font-5xl my-10 text-6xl text-[#F44617]">
                <p className="   py-10 ">Add New inventory</p>
            </div>
           
            <form className=" container mx-auto " onSubmit={handlePlaceOrder}>
            
                <input className=' w-full mb-2 border  rounded pl-4 py-2' type="text" name="name" placeholder='name' required />
                <br />
                <input className='    w-full mb-2 border  rounded pl-4 py-2' type="email" name="email" placeholder='email' required/>
                <br />
                <input className='    w-full mb-2 border  rounded pl-4 py-2' type="text" name="img" placeholder='Image link' required/>
                <br />
                <textarea className='    w-full mb-2 border  rounded pl-4 py-2' placeholder="Description" name="disc" id="" cols="30" rows="5" required></textarea>
                <br />
                <input className='    w-full mb-2 border  rounded pl-4 py-2' type="number" name="price" placeholder='price'  required />
                <br />
                <input className='    w-full mb-2 border  rounded pl-4 py-2' type="number" name="stock" placeholder='Add Stock'  required />
                <br />
                <input className='    w-full mb-2 border  rounded pl-4 py-2' type="text" name="condition" placeholder='condition' required />
                <br />

                <input className='    w-full mb-2 border  rounded pl-4 py-2' type="text" name="type" placeholder='type'  required />
                <br />

                <input className='    w-full mb-2 border  rounded pl-4 py-2' type="text" name="fuel" placeholder='fuel'  required />
                <br />
                <input className='    w-full mb-2 border  rounded pl-4 py-2' type="text" name="supplier" placeholder='suppleir' autoComplete='off' required />
               <br/>
                <input className='bg-[#F44617] w-full mb-2 py-4 text-white cursor-pointer' type="submit" value="Place Inventory" />
            </form>
        </div>
    );
};

export default AddItem;