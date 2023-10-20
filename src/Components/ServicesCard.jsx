import React from 'react'

function ServicesCard (props) {
  const icon = props.icon
  const title = props.title
  const desc = props.desc
  
  return (
    <div className=' w-44 h-48 bg-pink-200 flex flex-col rounded-sm align-middle justify-center gap-1 z-50  shadow-xl ' >
      <div className='w-full justify-center flex' >
      <div className="icon w-16 h-16 bg-orange-500/70 justify-center  items-center text-center flex   rounded-full ">{icon}</div>

      </div>
        <h1 className=' font-bold text-center  text-orange-500/60  '>{title}</h1>
        <p className='text-center text-purple-400/60'>{desc}</p>
    </div>
  )
}

export default ServicesCard
