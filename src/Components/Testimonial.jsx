import React from 'react'

function Testimonial (props) {
    const quote = props.quote
    const comment = props.comment
    const user = props.user

  return (
    <div className='w-60 h-60 flex flex-col gap-2 shadow-lg rounded-lg bg-white justify-center items-center '>
        <div className="quote w-full justify-center   flex">{quote}</div>
        <p className='text-purple-400/60 text-center'> {comment}</p>
        <h1 className='text-orange-500/60 text-center'> {user} </h1>
    </div>
  )
}

export default Testimonial