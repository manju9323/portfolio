import React from 'react'
import { Element } from 'react-scroll'
import "./project.css"
import ProjectMap from './projectmap'

const project=[
    {img:"short.png",
    title:"url shortner",
    desc:"url shortner for mern stack developer redirect to specific url",
  link:"https://startling-bavarois-af96a1.netlify.app"},
    {img:"gmail.png",
    title:"gmail clone app",
    desc:"gmail clone app send create inbox delete forward reply",
    link:"https://calm-stroopwafel-e735ec.netlify.app"},
    {img:"movie.png",
    title:"ticket booking app",
    desc:"booking app for movie ticket",
    link:"https://leafy-rabanadas-a10613.netlify.app"},
    {img:"mem.png",
    title:"find and select members",
    desc:"select and find some doctors at particular time",
    link:"https://jocular-naiad-c8919d.netlify.app"}
]


function Project() {
   
  return (
    <Element name='project' className='projectcontainer'>
      <h1>Projects</h1>
      <p>here are some project</p>
      <div className='projectcontainerproject'>
      {
         project.map((mm,i)=><ProjectMap key={i} mmm={mm}/>)
      }
      </div>
   
  
    </Element>
  )
}

export default Project