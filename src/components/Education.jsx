import React from 'react'
import Section from './Section'
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <div>
      <Section icon={<GraduationCap/>} sectionTitle="Education">
      <div className='ml-2'>
        <p className='font-bold'>Bachelor of Science in Computer Science</p>
        <p className='mb-3'>Hemwati Nandan Central University,2021-25</p>
        <p className='font-bold'>Full stack web development</p>
        <p>Code Academy,2020</p>
      </div>
      </Section>
    </div>
  )
}

export default Education