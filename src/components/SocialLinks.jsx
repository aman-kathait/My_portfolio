import React from 'react'

const SocialLinks = ({linkAdd,icon,linkName}) => {
  return (
    <div className='ml-3 items-center text-blue-500 hover:text-blue-800' >
      <a className="flex " href={linkAdd}>{icon} <span className='ml-2 items-center'>{linkName} </span></a>
    </div>
  )
}

export default SocialLinks;