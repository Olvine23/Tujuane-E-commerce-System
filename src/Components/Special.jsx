import React from 'react'

function Special(props){
    const specialTitle = props.specialTitle
    const specialDesc = props.specialDesc
    const specialImage = props.specialImage
    const specialImage1 = props.specialImage1
  return (
    <div  className=' w-full  text-start my-8 mx-2'>
        <img src={ specialImage1} alt="" />
        <h1 className='text-2xl font-bold text-orange-500/60'>{specialTitle}</h1>
        <p className='text-sm text-purple-400/90'>{specialDesc}</p>
        <img src={specialImage} alt="" />
    </div>

    
  )
}

export default Special