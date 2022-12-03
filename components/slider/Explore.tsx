import Image from 'next/image'
import React from 'react'
import ButtonWhite from '../buttons/ButtonWhite'

const benefits = [
  {
    img: '/img/sliders/explore1.png',
    description: 'Problemas cardíacos, conoce los síntomas',
    text: 'Leer Más'
  },
  {
    img: '/img/sliders/explore2.png',
    description: 'Conoce los descuentos disponibles',
    text: 'Ver descuentos'
  },
  {
    img: '/img/sliders/explore3.png',
    description: 'Próximos lanzamientos',
    text: 'Leer Más'
  }
]

export const Explore = () => {
  return (
    <div className="w-full my-10 ">
      <div className="w-5/6 mx-auto h-full">
        <div className="flex items-center justify-center my-5 ">
          <h2 className="text-primary text-xl font-Montserrat font-normal text-center">
            Explora
            <br />
            <span className="text-secondaryDark text-3xl font-Montserrat font-bold text-center">
              más beneficios
            </span>
          </h2>
        </div>
        <ul className="flex flex-row items-start justify-between snap-x snap-mandatory  w-full h-full ">
          {benefits.map((benefit) => {
            return (
              <li
                key={benefit.description}
                className="shrink-0 w-full md:w-1/4  flex flex-col items-center justify-center snap-start"
              >
                <div className="w-full mx-auto  flex flex-col gap-5 items-center justify-between h-full ">
                  <Image
                    src={benefit.img}
                    width={300}
                    height={300}
                    alt={benefit.description}
                  />
                  <h2 className=" w-full text-center text-primary text-xl md:text-2xl font-Titillium">
                    {benefit.description}
                  </h2>
                  <ButtonWhite className="bg-white">Leer Más</ButtonWhite>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
