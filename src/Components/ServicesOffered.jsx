import React from 'react'
import ServicesCard from './ServicesCard'
import { Icon } from '@iconify/react'
import Services from './Services'
import Specials from './Specials'
import TestimonialShow from './TestimonialShow'

const ServicesOffered = () => {
  return (
    <div className=' overflow-x-hidden min-h-screen bg-[#F5F5F5] mt-[128px] relative'>
      <div className=' w-screen  h-96   bg-black object-cover bg-backgroundImage bg-cover bg-center  '   >      
      <div className="inner w-full h-full flex justify-center items-center text-center relative ">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="content w-[440PX] absolute">
      <h4 className='text-orange-300 font-medium' >Why Choose us </h4>
      <h1 className='text-3xl text-gray-200 font-bold mt-2 '>Let us Show You The Beauty Of The World</h1>
      <button className='p-2 bg-orange-400 rounded-3xl text-gray-100 px-3 mt-2 hover:opacity-80'>Book Now</button>
     </div>
     <div className='w-full flex flex-col px-52 justify-between absolute   mt-[480px]'>
      <Services/>
      </div>
     
      {/* <div className='flex flex-col -mt-[2700px] '>
          
          <TestimonialShow/>
      </div> */}
      
      </div>
     
     
    

    
            
       

    </div>

    <div >
      <Specials/> 
      </div>

      <div>
        <TestimonialShow/>
      </div>
      
    </div>

    

    
  )
}

export default ServicesOffered

