import React from 'react'

function BlogProp (props)  {
 const image = props.image
 const title = props.title
 const date = props.date
  return (
    <div className='w-full flex flex-col ' >
        <img className='h-56 object-cover' src={image} />
        <h2 className='font-bold text-center text-lg'>{title} </h2>
        <p className='font-bold text-center'>{date} </p>
    </div>
  )
}

export default BlogProp