import React from 'react'
import ServicesCard from './ServicesCard'
import { Icon } from '@iconify/react'
import Services from './Services'
import Specials from './Specials'
import TestimonialShow from './TestimonialShow'

const ServicesOffered = () => {
  return (
    <div id='servicesOffered' className=' overflow-x-hidden min-h-screen bg-[#F5F5F5] mt-[] relative' >
      <div className=' w-screen  h-[450px]   bg-black object-cover bg-backImage bg-cover bg-center  '   >      
      <div className="inner w-full h-full flex justify-center items-center text-center relative ">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="content w-[620PX] absolute">
      <h4 className='text-orange-300 font-medium' >Why Choose us </h4>
      <h1 className='text-4xl text-gray-200 font-bold mt-2 space-x-8 '>Let us Show You The Beauty Of The World</h1>
      <button className=' cursor-pointer p-2 bg-orange-400 rounded-3xl text-gray-100 px-4 mt-2'>Book Now</button>
     </div>
     <div className='w-full flex flex-col xl:px-52 lg:px-24 sm:px-5 justify-between absolute   mt-[480px]'>
      <Services/>
      </div>
     
    
      
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

