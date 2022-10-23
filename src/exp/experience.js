import React from 'react'
import "./experience.css"
import {Element} from "react-scroll"

function Experience() {
  return (
    <Element name="experience">
      <div className='exp' >
        <h1>Personel Experience</h1>
   <div className='ex'>
    
    <div className='en'>
        <h4>Fresher</h4>
        <div>MERN stack developer</div>
    </div>

    <div className='en'>  <h4>10+</h4>
    <div>self practice project</div></div>

    <div className='en'>
    <h4>8 Months</h4>
    <div>learn and deploying project</div></div>

    </div>
    </div>
    </Element>
    
    )
}

export default Experience