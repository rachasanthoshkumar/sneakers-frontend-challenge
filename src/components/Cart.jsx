import React from 'react'
import Image from 'next/image'
import product1 from '@/assets/images/image-product-1-thumbnail.jpg'
import { MdDelete } from "react-icons/md";
const Cart = () => {
  return (
    <div className='absolute border-2 top-20 right-[-100px] w-[350px] p-4 rounded-md shadow-md'>
        <div className='flex flex-col gap-3'>

        <p className='text-l font-bold'>Cart</p>
        <div className='border-gray-300 border-[1px]'></div>
        
        <div className='flex gap-3 justify-between'>

        <Image src={product1} className='h-8 w-auto rounded-md'/>
        <div className='flex flex-col'>
        <p className='text-sm text-gray-400'>Autumn Limited Edition...</p>
        <p className='text-gray-400 text-sm'>$125.00 * 4 <span className='text-black font-bold'>$500.00</span></p>
        </div>
        <MdDelete size={20} className='text-gray-400'/>

        </div>
        <button className='w-full bg-orange-400 rounded-md text-white text-sm py-2 px-2'>Checkout</button>
        </div>
    </div>
  )
}

export default Cart