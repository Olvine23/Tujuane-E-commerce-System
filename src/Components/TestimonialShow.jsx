import React from 'react'
import Testimonial from './Testimonial'
import { Icon } from '@iconify/react'

const TestimonialShow = () => {
  return (
    <div id='TestimonialShow' className=' min-w-full flex flex-row  flex-nowrap gap-3 mt-1  py-8  justify-center sm:px-5 '>
        <Testimonial quote={ <Icon icon="raphael:quote" color="red" width="40" height="40" className='quote' />} comment="This was not a trip this was definately something else, never have I had such a great outdoor session " user="Laria" />
        <Testimonial quote={ <Icon icon="raphael:quote" color="red" width="40" height="40" className='quote' />} comment="Splendid adventure, it definately exceeded its value am definately gonna recommend it to everyone" user="Val" />
        <Testimonial quote={ <Icon icon="raphael:quote" color="red" width="40" height="40" className='quote' />} comment="Never had I thought of going for a holiday and actually I was forced to this but had I known this would be the case😂😂😂" user="Kinsly" />
        <Testimonial quote={ <Icon icon="raphael:quote" color="red" width="40" height="40" className='quote' />} comment="Amazing experience in overall, probably the best moment of my life" user="Phoebe" />
    </div>
  )
}

export default TestimonialShow