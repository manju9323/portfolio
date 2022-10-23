
import React,{useState} from 'react'
import "./project.css"

function ProjectMap({mmm:{img,title,desc,link}}) {

    const [show,setshow]=useState(false);

  return (
    <>
    <a href={link}>
        <div className='project' onMouseEnter={()=>setshow(true)} onMouseLeave={()=>setshow(false)}>
            {   show ? 
                 <div>
                  <h3>{title}</h3>
                  <div>{desc}</div>
                </div>
                :<img src={require(`./${img}`)} alt=""/>
            }
        </div>
    </a>
    </>
    
  )
}

export default ProjectMap