import React from 'react'

const List = ({list}) => {
  return (
      <ol className='list-disc ml-7'>
        {list.map(list=><li key={list}>{list}</li>)}
      </ol>
  )
}

export default List