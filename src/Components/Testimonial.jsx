import React from 'react'

function Testimonial (props) {
    const quote = props.quote
    const comment = props.comment
    const user = props.user

  return (
    <div className='w-[268px] h-60 sm:h-72 sm:py-12 flex flex-col gap-2 shadow-lg rounded-lg bg-white justify-center items-center px-2 '>
        <div className="quote w-full justify-center   flex">{quote}</div>
        <p className='text-gray-400 text-center'> {comment}</p>
        <h1 className='text-orange-500/60 text-center'> {user} </h1>
    </div>
  )
}

export default Testimonial