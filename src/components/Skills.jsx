import React from 'react'
import Section from './Section'
import { Code  } from 'lucide-react';
import Pill from './Pill';

const Skills = () => {
  const skill=['Javascript','Html','CSS','Php','Python','MySql']
  return (
      <div className='flex flex-wrap' >
      <Section className=''icon={<Code/>} sectionTitle="Skills">
      {skill.map(title=><Pill title={title}></Pill>)}
      </Section>
    </div>
  )
}
export default Skills