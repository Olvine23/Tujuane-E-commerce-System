import React from 'react'
import Special from './Special'

const Specials = () => {
  return (
    <div className='w-screen flex flex-row  mt-48 lg:px-52 sm:px-5     '>
        <Special specialTitle="Couples Special Offer" specialDesc="For the love birds we have got you, enjoy the best of romance at a special offer" specialImage="/images/couples.jpg" />

        <Special className="row-reverse" specialImage1="/images/adventure.jpg" specialTitle="Adventures" specialDesc="Whoever said pictures don't speak was surely right, they do scream"/>
        

    </div>
  )
}

export default Specials