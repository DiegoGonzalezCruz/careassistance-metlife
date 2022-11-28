import React from 'react'
import ProgramList from '../lists/ProgramList'

const programs = [
  {
    title: 'consulta telemedicina',
    schedule:
      '<p>Lunes a Viernes de 9:00 a 20:00 <br /> Sábados de 9:00 a 13:00</p>',
    phone: '+569123123123',
    description:
      '<p>Comunícate con un doctor a través de videollamada frente a cualquier duda sobre tu salud. <b>Servicio disponible para ti las 24 hrs.</b></p>',
    img: '/img/cards/testImage.png',
    pretitle: 'Consulta',
    posttitle: 'telemedicina'
  },
  {
    title: 'consulta veterinaria',
    schedule: 'Mon to Fri',
    phone: '+569123123123',
    description:
      '<p>A través de videollamada frente a cualquier duda sobre tu salud</p>',
    img: '/img/cards/testImage.png',
    pretitle: 'Consulta',
    posttitle: 'veterinaria'
  },
  {
    title: 'Consulta poética',
    schedule: 'Mon to Fri',
    phone: '+569123123123',
    description:
      'Através de videollamada frente a cualquier duda sobre tu salud. Esto es un texto agregado.',
    img: '/img/cards/testImage.png',
    pretitle: 'Consulta',
    posttitle: 'poética'
  },
  {
    title: 'consulta telemedicina',
    schedule:
      '<p>Lunes a Viernes de 9:00 a 20:00 <br /> Sábados de 9:00 a 13:00</p>',
    phone: '+569123123123',
    description:
      'Comunícate con un doctor a través de videollamada frente a cualquier duda sobre tu salud. Servicio disponible para ti las 24 hrs.',
    img: '/img/cards/testImage.png',
    pretitle: 'Consulta',
    posttitle: 'telemedicina'
  },
  {
    title: 'consulta veterinaria',
    schedule: 'Mon to Fri',
    phone: '+569123123123',
    description:
      'A través de videollamada frente a cualquier duda sobre tu salud',
    img: '/img/cards/testImage.png',
    pretitle: 'Consulta',
    posttitle: 'veterinaria'
  },
  {
    title: 'Consulta poética',
    schedule: 'Mon to Fri',
    phone: '+569123123123',
    description:
      'Através de videollamada frente a cualquier duda sobre tu salud. Esto es un texto agregado.',
    img: '/img/cards/testImage.png',
    pretitle: 'Consulta',
    posttitle: 'poética'
  }
]

export const ProgramSlider = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-primary font-normal text-xl">Conoce tus</h2>
        <span className="text-secondaryDark font-bold text-2xl">
          programas online
        </span>
      </div>
      <ProgramList programs={programs} />
    </div>
  )
}
