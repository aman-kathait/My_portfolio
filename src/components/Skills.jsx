import React from 'react'
import Section from './Section'
import { Code  } from 'lucide-react';
import Pill from './Pill';

const Skills = () => {
  const skill=['Javascript','Html','CSS','Php','Python','MySql']
  return (
      <div className='flex flex-wrap ' >
      <Section className=''icon={<Code/>} sectionTitle="Skills">
     <div className='flex flex-wrap '>
     {skill.map(title=><Pill title={title} key={title}></Pill>)}
     </div>

      </Section>
     </div>
   
  )
}
export default Skills