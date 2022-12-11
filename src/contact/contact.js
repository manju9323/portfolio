import React from 'react'
import {Element} from "react-scroll"
import "./contact.css"
import GitHubIcon from '@mui/icons-material/GitHub';
//https://mail.google.com/mail/u/0/#inbox?compose=new
function Contact() {
  return (
    <Element className='contact' id="con">
        <div className='contacts'>
        <h3>Contact</h3>
         <div className='contactspan'>
            <p>Name:<span> Manjunathan M</span></p>
            <p>Email:<span> manjugopi610@gmail.com</span></p>
            <p>Phone:<span> 9943512775</span></p>
            <p>github Username:<span> https://github.com/manju9323</span></p>
         </div>
        <div className='ico'>
        <div><a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target={"_blank"} rel="noreferrer"><img src={require(`./${"Gmail.png"}`)} alt=""/></a></div>
          <div><a href="https://github.com/manju9323" target={"_blank"} rel="noreferrer"><img src={require(`./${"git.png"}`)} alt=""/></a></div>
          <div><a href="https://www.linkedin.com/in/manjunathan-m-715420229/" target={"_blank"} rel="noreferrer"><img src={require(`./${"linked.png"}`)} alt=""/></a></div>
          <div><a href="https://www.guvi.in/manjugopi61081" target={"_blank"} rel="noreferrer"><img src={require(`./${"guvi.png"}`)} alt=""/></a></div>
        </div>
        </div>
    </Element>
   
  )
}

export default Contact