import React from 'react'
import { Props } from '../../types'

const ProgramCard = ({ program }: Props) => {
  return (
    <div className="border-primary border-2 rounded-xl">
      <h2>{program.title}</h2>
      <p>{program.description}</p>
      <p>{program.schedule}</p>
    </div>
  )
}

export default ProgramCard
