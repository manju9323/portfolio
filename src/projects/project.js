import React from 'react'
import { Element } from 'react-scroll'
import "./project.css"
import ProjectMap from './projectmap'


const project=[
  {img:"youtube.png",
  title:" Full stack Youtube reactjs+mongodb firebase googleauth",
  desc:"upload,subscribe,likes,comments section is here and wait for 30sec to start server",
  github:"https://github.com/manju9323/youtubereact",
  mongo:"https://github.com/manju9323/youtubenode",
  netlify:"https://youtubeplacereact.netlify.app/",
  link:"https://youtubeplacereact.netlify.app/"},

  {img:"chat.png",
  title:" Full Stack Real time chat app reactjs+mongodb",
  desc:"create account to follow others real time online chat using socket io",
  github:"https://github.com/manju9323/chatsreact",
  mongo:"https://github.com/manju9323/chatnode",
  netlify:"https://chatreactmaesgo.netlify.app/",
  link:"https://chatreactmaesgo.netlify.app/"},

  {img:"gmail.png",
    title:"Full stack gmail clone app reactjs+mongodb",
    desc:"gmail clone app send create inbox delete forward reply",
    github:"https://github.com/manju9323/frontendmailgood",
  mongo:"https://github.com/manju9323/gmailbackendfine",
  netlify:"https://gmailreact.netlify.app/",
    link:"https://gmailreact.netlify.app/"},

  

    {img:"short.png",
    title:"Full stack url shortner reactjs+mongodb",
    desc:"using email forget password url shortner for mern stack developer redirect to specific url",
    github:"https://github.com/manju9323/urlshort38",
  mongo:"https://github.com/manju9323/urlshortbackend38",
  netlify:"https://startling-bavarois-af96a1.netlify.app",
  link:"https://startling-bavarois-af96a1.netlify.app"},

  {img:"crud.png",
    title:"CRUD operation",
    desc:"this project just only front end crud operation using fake api",
    github:"https://github.com/manju9323/jayamcrud",
  mongo:"",
  netlify:"https://verdant-cannoli-aa1ce1.netlify.app/",
  link:"https://verdant-cannoli-aa1ce1.netlify.app/"},

  {img:"usecontext.png",
  title:"create table using use context",
  desc:"use context method to create tables",
  github:"https://github.com/manju9323/day26react",
mongo:"",
netlify:"https://astounding-lolly-f9c956.netlify.app/",
link:"https://astounding-lolly-f9c956.netlify.app/"},
]


function Project() {
   
  return (
    <Element name='project' className='projectcontainer'>
      <h1>Projects</h1>
      <h2>Credentials</h2>
      <p>Admin log in: manjugopi610@gmail.com</p>
      <p>Password: 333</p>
      <p>User log in: christgopi333@gmail.com</p>
      <p>Password: 333</p>
      <div className='projectcontainerproject'>
      {
         project.map((mm,i)=><ProjectMap key={i} mmm={mm}/>)
      }
      </div>
   
  
    </Element>
  )
}

export default Project