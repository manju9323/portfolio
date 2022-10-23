import React from 'react'
import {Element} from "react-scroll"
import "./contact.css"

function Contact() {
  return (
    <Element className='contact'>
        <div className='contacts'>
        <h3>Contact</h3>
         <div className='contactspan'>
            <p>Name:<span> Manjunathan M</span></p>
            <p>Email:<span> manjugopi610@gmail.com</span></p>
            <p>Phone:<span> 9943512775</span></p>
            <p>github Username:<span> https://github.com/manju9323</span></p>
         </div>
        </div>
         
    </Element>
   
  )
}

export default Contact