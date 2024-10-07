import React from 'react'
import Section from './Section'
import { Globe, Key } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';
import SocialLinks from './SocialLinks';
const Contact = () => {
  const socialLink=[{linkAdd:"#",icon:<Linkedin/>,linkName:"LinkedIn"},{linkAdd:"#",icon:<Github/>,linkName:"Github"},{linkAdd:"#",icon:<Twitter/>,linkName:"Twitter"}]
  return (
    <div className='pb-6 '>
      <Section icon={<Globe/>} sectionTitle="Contact">
      <p className='ml-3 mb-1'>
        <span className='font-bold'>Email: </span>aman.kathat011@gmail.com <br />
        <span className='font-bold'>Phone No. : </span>8439593496
      </p>
      {socialLink.map(social=> <  SocialLinks icon={social.icon} key={social.linkName} linkAdd={social.linkAdd} linkName={social.linkName}/>)} 
      </Section>
    </div>
  )
}

export default Contact