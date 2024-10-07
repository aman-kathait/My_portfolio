import React from 'react'
import Section from './Section'
import { GraduationCap } from 'lucide-react';
import List from './List';
const Extracurricular = () => {
    const extraC=["Volunteer at local coding boot-camp ","Organized city tour ","Member of University Gaming club"];
  return (
    <div>
      <Section icon={<GraduationCap/>} sectionTitle="Extracurricular">
      <List list={extraC}></List>
      </Section>
    </div>
  )
  
}

export default Extracurricular