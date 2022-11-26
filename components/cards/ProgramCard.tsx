import React from 'react'

const ProgramCard = ({
  program
}: {
  program: {
    title: string
    schedule: string
    description: string
    img: string
  }
}) => {
  return (
    <div className="border-primary border-2 rounded-xl">
      <h2>{program.title}</h2>
      <p>{program.description}</p>
      <p>{program.schedule}</p>
    </div>
  )
}

export default ProgramCard
