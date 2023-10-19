import React from 'react'
import { Icon } from '@iconify/react'

const icon = () => {
  return (
    <div>
    <Icon icon="fluent:airplane-20-regular" className='plane'  rotate={3} />
    <Icon icon="icon-park-outline:backpack" className='bag'  />
    <Icon icon="clarity:compass-line" className='compass'  />
    <Icon icon="clarity:camera-line" className='camera'  />
    </div>
 
  )
}

export default icon