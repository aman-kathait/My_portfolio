import React from 'react'
import ProjectPill from './ProjectPill'

const ProjectCard = ({heading,projectInfo,techUsed}) => {
  return (
    <div className='bg-blue-100 mx-7 p-3 rounded-md shadow-lg mb-4'>
      <h1 className='font-bold mb-1'>{heading}</h1>
      <p className='font-semibold text-gray-800 mb-2'>{projectInfo}</p>
      <div className='flex flex-wrap'>
        {techUsed.map(techUsed=> <ProjectPill title={techUsed}></ProjectPill>)}
      </div>
    </div>
  )
}

export default ProjectCard