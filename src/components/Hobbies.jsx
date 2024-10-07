import React from 'react'
import Section from './Section'
import { Award   } from 'lucide-react';
import List from './List';

const Hobbies = () => {
  const myHobbies=["Travel","Photography","Gaming","Geo-Politics"];
  return (
    <div>
      <Section icon={<Award/>} sectionTitle="Hobbies">
      <List list={myHobbies}></List>
      </Section>
    </div>
  )
}

export default Hobbies