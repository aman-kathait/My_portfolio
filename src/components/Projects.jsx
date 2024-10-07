import React from 'react'
import Section from './Section'
import { Briefcase } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const myProject=[{heading:"E-Commerce Platform",projectInfo:"Developed a fully functional e-commerce website with paypal integration and with Virtual Try On feature using Augmented Reality.",techUsed:["Html","Css","Tailwind","React","MongoDB"]},{heading:"E-Commerce Platform",projectInfo:"Developed a fully functional e-commerce website with paypal integration and with Virtual Try On feature using Augmented Reality.",techUsed:["Html","Css","Tailwind","React","MongoDB"]}];
  return (
    <div>
      <Section icon={<Briefcase/>} sectionTitle="Projects"></Section>
      {myProject.map(myPro=><ProjectCard heading={myPro.heading} projectInfo={myPro.projectInfo} techUsed={myPro.techUsed}></ProjectCard>)}
    </div>
  )
}

export default Projects