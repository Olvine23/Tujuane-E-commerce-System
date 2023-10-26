import React from 'react'

import './Servicesval.css'


function Contact (){
  return (
    
    <div className='contactPage'>
        <div className='contacts'>
        <h3> Contacts Info </h3>     
        <p>
          Phone: +254 715 820126 <br />
          Email :  tujuaneadventures@gmail.com <br/>

        </p>
       </div>
        <div className='social'>
              <h3>Socials</h3>
              <div className='socialmedia'>
                <div className="insta" width='24px' height='24px'>
                  <img  src="/images/nobginsta.png" alt="" />
                  
                </div>
                <div className="insta" width='24px' height='24px'>
                  <img  src="/images/nobglinkedin.png" alt="" />
                  
                </div>
                <div className="insta tiktok" width='24px' height='24px'>
                  <img  src="/images/nobgtiktok.png" alt="" />
                  
                </div>
              </div>  
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quam suscipit aut dolores veritatis </p>
       </div>
      
    </div>
  )
}

export default Contact