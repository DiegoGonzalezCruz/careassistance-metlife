import React from 'react'
import ProgramCard from '../cards/ProgramCard'

const programs = [
  {
    title: 'consulta medica',
    schedule: 'Mon to Fri',
    description: 'lorem blab la blasblsd asd',
    img: '/img/cards/testImage.png'
  },
  {
    title: 'consulta medica',
    schedule: 'Mon to Fri',
    description: 'lorem blab la blasblsd asd',
    img: '/img/cards/testImage.png'
  },
  {
    title: 'consulta medica',
    schedule: 'Mon to Fri',
    description: 'lorem blab la blasblsd asd',
    img: '/img/cards/testImage.png'
  }
]

export const ProgramSlider = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-primary">Conoce tus</h2>
        <span className="text-secondaryDark">programas online</span>
      </div>
      <div className="w-full h-full flex flex-row gap-5">
        {programs.map((program) => {
          return <ProgramCard program={program} />
        })}
      </div>
    </div>
  )
}
