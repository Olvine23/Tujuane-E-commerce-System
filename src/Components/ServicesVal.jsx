import { useState } from 'react'
import './App.css'
import './ServicesVal.css'
import Contact from './Contact'
// import './Hotairballon.png';
const ServicesVal = () => {
  return (
    <>
     
      
    <div className="card">
      <div>
    <h4>Our Services</h4>
     <h1>Join The Adventures With Stories</h1>
    <div className='icon'>

     <div >
     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v2c0 3.771 0 5.657-1.172 6.828C17.657 20 15.771 20 12 20c-3.771 0-5.657 0-6.828-1.172C4 17.657 4 15.771 4 12v-2Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M4 13h16m-4.5 3H17M7 16h1.5M6 19.5V21a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1m8.5-.5V21a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1M20 9h1a1 1 0 0 1 1 1v1a1 1 0 0 1-.4.8L20 13M4 9H3a1 1 0 0 0-1 1v1a1 1 0 0 0 .4.8L4 13"/><path stroke-linecap="round" d="M19.5 5h-15"/></g></svg>
     <p>Valencia Neema</p>
     </div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm5.56 10.46l5.93-5.93l-1.06-1.06l-4.87 4.87l-2.11-2.11l-1.06 1.06z"/></svg>
      <p>Valencia Neema</p>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32"><g fill="currentColor"><path d="M0 16c0 8.822 7.178 16 16 16s16-7.178 16-16S24.822 0 16 0S0 7.178 0 16zM16 1c8.271 0 15 6.729 15 15s-6.729 15-15 15S1 24.271 1 16S7.729 1 16 1z"/><path d="M16 29c7.168 0 13-5.832 13-13S23.168 3 16 3S3 8.832 3 16s5.832 13 13 13zM15 4.051v1.526a.5.5 0 0 0 1 0V4c6.279 0 11.438 4.85 11.949 11h-1.527a.5.5 0 0 0 0 1H28c0 6.617-5.383 12-12 12v-1.577a.5.5 0 0 0-1 0v1.526C8.851 27.438 4 22.28 4 16h1.578a.5.5 0 0 0 0-1H4.051C4.534 9.181 9.181 4.534 15 4.051z"/><path d="M9.386 23.041a.5.5 0 0 0 .292-.094l5.614-4.036c.228.056.463.093.708.093c1.654 0 3-1.346 3-3a3 3 0 0 0-.087-.687l4.106-5.712a.501.501 0 0 0-.698-.699l-5.778 4.153a2.96 2.96 0 0 0-.544-.055c-1.654 0-3 1.346-3 3c0 .195.022.386.058.571L8.98 22.249a.501.501 0 0 0 .406.792zM14 16.005c0-1.103.897-2 2-2s2 .897 2 2s-.897 2-2 2s-2-.898-2-2zm6.424-4.502l-1.987 2.765a3.025 3.025 0 0 0-.792-.767l2.779-1.998zm-6.919 6.164c.199.298.454.553.743.763l-2.672 1.921l1.929-2.684z"/></g></svg>
      <p>Valencia Neema</p>
      </div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 41 32"><g fill="currentColor"><path d="M9.239 31.927c.009.006.021.003.03.009A.51.51 0 0 0 9.5 32a.5.5 0 0 0 .132-.018L20.5 29.016l10.868 2.966A.5.5 0 0 0 31.5 32a.492.492 0 0 0 .23-.065c.01-.005.021-.003.03-.009l9-5.5a.501.501 0 0 0 .22-.563l-4.984-17.5a.499.499 0 0 0-.726-.3l-4.962 2.784a.501.501 0 0 0 .491.872l4.409-2.475l4.707 16.526l-8.015 4.899l-1.904-15.231a.5.5 0 0 0-.993.124l1.907 15.259L21 28.116v-2.73a.5.5 0 0 0-1 0v2.73l-9.911 2.705l1.907-15.259a.5.5 0 1 0-.993-.124L9.1 30.669l-8.015-4.898L5.792 9.246l4.409 2.475a.501.501 0 0 0 .491-.872L5.729 8.064a.496.496 0 0 0-.725.3L.02 25.864a.498.498 0 0 0 .22.563l8.999 5.5z"/><path d="M20.161 23.368a.5.5 0 0 0 .675.003C21.169 23.068 29 15.882 29 8.5C29 3.733 25.267 0 20.5 0S12 3.733 12 8.5c0 7.254 7.828 14.56 8.161 14.868zM20.5 1C24.775 1 28 4.224 28 8.5c0 6.097-5.993 12.337-7.497 13.807C19.002 20.82 13 14.498 13 8.5C13 4.224 16.225 1 20.5 1z"/><path d="M25 8.5C25 6.019 22.981 4 20.5 4S16 6.019 16 8.5s2.019 4.5 4.5 4.5S25 10.981 25 8.5zM20.5 12c-1.93 0-3.5-1.57-3.5-3.5S18.57 5 20.5 5S24 6.57 24 8.5S22.43 12 20.5 12z"/></g></svg>
      <p>Valencia Neema</p>
      </div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 36 36"><path fill="currentColor" d="M32 8h-7.3l-1.06-2.72A2 2 0 0 0 21.78 4h-7.56a2 2 0 0 0-1.87 1.28L11.3 8H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Zm0 22H4V10h8.67l1.55-4h7.56l1.55 4H32Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M9 19a9 9 0 1 0 9-9a9 9 0 0 0-9 9Zm16.4 0a7.4 7.4 0 1 1-7.4-7.4a7.41 7.41 0 0 1 7.4 7.4Z" class="clr-i-outline clr-i-outline-path-2"/><path fill="currentColor" d="M9.37 12.83a.8.8 0 0 0-.8-.8h-2.4a.8.8 0 0 0 0 1.6h2.4a.8.8 0 0 0 .8-.8Z" class="clr-i-outline clr-i-outline-path-3"/><path fill="currentColor" d="M12.34 19a5.57 5.57 0 0 0 3.24 5l.85-1.37a4 4 0 1 1 4.11-6.61l.86-1.38A5.56 5.56 0 0 0 12.34 19Z" class="clr-i-outline clr-i-outline-path-4"/><path fill="none" d="M0 0h36v36H0z"/></svg>
      <p>Valencia Neema</p>
      </div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><rect width="39" height="31" x="4.5" y="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.34 16.8a3.6 3.6 0 0 0-3.59 3.6h0a3.6 3.6 0 0 0 3.59 3.6h1.22m0 0h1.22a3.59 3.59 0 0 1 3.59 3.6h0a3.59 3.59 0 0 1-3.59 3.6M24 18c-1-.83-2.06-1.21-4.47-1.21h-1.19M15.09 30c1 .83 2.07 1.21 4.47 1.21h1.22M19.56 33V15m16.79 5.4h7.15v7.2h0h-7.15a2.85 2.85 0 0 1-2.85-2.85v-1.5a2.85 2.85 0 0 1 2.85-2.85Z"/><circle cx="36.47" cy="24" r=".8" fill="currentColor"/></svg>
      <p>Valencia Neema</p>

      </div>
    </div>
    </div>
    <div className='pic1'>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repudiandae reiciendis iure similique, quaerat molestiae in enim ducimus, a temporibus eligendi cum quia fuga, laborum dolores odio neque sed nesciunt!</p> */}
    <img src="https://images.unsplash.com/photo-1519659528534-7fd733a832a0?auto=format&fit=crop&q=80&w=1926&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>

    </div>
    <p className="read-the-docs">
      <Contact />    
        </p>
  </>
  );
}

export default ServicesVal;
