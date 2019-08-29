import React from 'react'
import Part from './Part'

const Content = ({parts}) => {
  const allParts = parts.map((part) => {
    return (
      <Part key={part.id} part={part.name} exercises={part.exercises} />
    )    
  }); 

  return (
    <div>
      {allParts}
    </div>
  )
} 

export default Content