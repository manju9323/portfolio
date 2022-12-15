import React from 'react'
import "./topcontent.css"
import mainpro from'./pblue.jpg' ;
//lm;lml;lm
function Topcontent() {
  return (
    <div>
        <div className='topcontent'>


          <div className='profileimg' > <div className='inner'><img  src={mainpro} alt=""></img></div></div>


          <div className="topcontent-container">
              <h1>Manjunathan M</h1>
              <span>Dob{" : "}12:12:1995</span>
              <span className='span'>email{" : "}manjugopi610@gmail.com</span>
             
               <p>Full Stack Developer (MERN)</p>
               <a href="https://drive.google.com/file/d/13oRyHsXQcW9xZ37115CjW232K_Is6W7P/view?usp=sharing" target={"_blank"} rel="noreferrer">
                <button className='downloadbutt'>Resume</button>
               </a>
               {/*<a href="https://github.com/manju9323" target={"_blank"} rel="noreferrer" smooth={true} duration={500}><button className='downloadbutt'>My work</button>    </a>*/}
                <div className="ico">
                <div className='ico1'><a href="https://github.com/manju9323" target={"_blank"} rel="noreferrer"><img className='git' src={require(`./${"git.png"}`)} alt=""/></a></div>
          <div className='ico2'><a href="https://www.linkedin.com/in/manjunathan-m-715420229/" target={"_blank"} rel="noreferrer"><img className='link' src={require(`./${"linked.png"}`)} alt=""/></a></div>
                </div>
                <div className='About'>
                  <h1>About</h1>
                    <p>       I am MANJUNATHAN M I completed BE.EEE in the year 2017, then my final year project is a hybrid electrical car run by using solar, wind, and generator with the support of VRLA battery and I achieved university runner in yoga champion.  in between those years preparing for civil service exams(SSB). now I am preparing for full stack web developer(MERN) and well in web developing (MERN) stack and advance redux concept.
                    </p>

                </div>
           
             


            </div>
        </div>
    </div>
  )
}

export default Topcontent