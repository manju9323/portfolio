import React from 'react'
import "./topcontent.css"
import mainpro from'./profile.jpg';
function Topcontent() {
  return (
    <div>
        <div className='topcontent'>
          <div className='profileimg' ><img  src={mainpro} alt=""></img></div>
          <div className="topcontent-container">
              <h1>Manjunathan M</h1>
               <p>Professional MERN stack developer</p>
               <a href="https://drive.google.com/file/d/1BKGIZ_k3LxaIs5q6btXTwHsEe2KUnwpk/view?usp=sharing" target={"_blank"} rel="noreferrer">
                <button className='downloadbutt'>Download CV</button>
               </a>
               <a href="https://github.com/manju9323" target={"_blank"} rel="noreferrer" smooth={true} duration={500}>
                <button className='downloadbutt'>My work</button>
               </a>
             


            </div>
        </div>
    </div>
  )
}

export default Topcontent