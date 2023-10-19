import React from 'react'
import Special from './Special'

const Specials = () => {
  return (
    <div className='w-full flex flex-row  mt-[1100px] px-44 py-8   '>
        <Special specialTitle="Couples Special Offer" specialDesc="For the love birds we have got you, enjoy the best of romance at a special offer" specialImage="/images/couple.jpg" />

        <Special className="row-reverse" specialImage1="/images/family.jpg" specialTitle="Family Offers" specialDesc="Best Moments to e shared with friends at a great offer"/>
        

    </div>
  )
}

export default Specials