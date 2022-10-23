import React from 'react'
import { Element } from 'react-scroll'
import "./skills.css"
import {LinearProgress} from "@mui/material"
import "./skills.css"


function Skills() {
  return (
    <Element className='skillcontainer' id="skills">

    <div className='skillimg'>
        <img src="https://media.istockphoto.com/photos/the-perfect-setting-to-complete-work-picture-id1251629816?k=20&m=1251629816&s=612x612&w=0&h=VmGljiSf8_Ps6vPnfMGFPn14sW8TJw-eaqT7LCwkjEo=" alt=""/>
        
    </div>
    <div className='skillcontainer-text'>
        <h2>SKILLSET</h2>
         <div className='skillcontainer-skillset'>
            <h5>React js</h5>
            <div className='skillcontainer-slider skillcontainer-slider1'>
            <LinearProgress variant="determinate" value={90} />
            </div>
         </div>

         <div className='skillcontainer-skillset'>
            <h5>Node js</h5>
            <div className='skillcontainer-slider skillcontainer-slider2'>
            <LinearProgress variant="determinate" value={90} />
            </div>
         </div>

         <div className='skillcontainer-skillset'>
            <h5>Mongo db</h5>
            <div className='skillcontainer-slider skillcontainer-slider3'>
            <LinearProgress variant="determinate" value={90} />
            </div>
         </div>

         <div className='skillcontainer-skillset'>
            <h5>Self Projects</h5>
            <div className='skillcontainer-slider skillcontainer-slider4'>
            <LinearProgress variant="determinate" value={80} />
            </div>
         </div>
    </div>
    </Element>
  
  )
}

export default Skills