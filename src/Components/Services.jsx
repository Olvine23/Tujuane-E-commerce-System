import React from 'react'
import { Icon } from '@iconify/react'
import ServicesCard from './ServicesCard'

const services = () => {
  return (
    <div>
    <div className="services flex gap-3
    -mt-20 w-full justify-between  ">
      <ServicesCard icon={    <Icon icon="fluent:airplane-20-regular" className='plane z-10' width={40} color='white' rotate={3} />} title='Fly you out' desc='Show you the world from our angle'/>
      <ServicesCard icon={    <Icon icon="icon-park-outline:backpack" width={40} color='white' />} title='Camping' desc='Experience and be part of nature'/>
      <ServicesCard icon={     <Icon icon="clarity:compass-line" className='compass' width={40} color='white'  />
} title='Adventure Tour' desc='Take you to the wildest trip'/>
      <ServicesCard icon={    <Icon icon="clarity:camera-line" width={40} color='white' className='camera'  />
} title='Outbound Activity' desc='Create spectacular memories'/>

    </div></div>
  )
}

export default services