import React from 'react'

function ServicesCard (props) {
  const icon = props.icon
  const title = props.title
  const desc = props.desc
  
  return (
    <div className=' w-56 h-60 mt-24  bg-[#FFF2F6] flex flex-col  align-middle justify-center gap-1 z-50  shadow-xl px-4 cursor-pointer' >
      <div className='w-full justify-center flex  relative' >
      <div className="icon w-16 h-16 bg-orange-500/70 justify-center  items-center align-middle text-center flex  rounded-full relative ">
        <div className='flex w-full h-16 justify-center items-center mx-2 '>
        {icon}
        </div>
        </div>

      </div>
        <h1 className=' font-bold text-center  text-orange-500/60  '>{title}</h1>
        <p className='text-center text-purple-400/60'>{desc}</p>
    </div>
  )
}

export default ServicesCard
