import Image from 'next/image'
import React from 'react'
import ButtonWhite from '../buttons/ButtonWhite'

const benefits = [
  {
    img: '/img/sliders/heart.png',
    description: 'Problemas cardíacos, conoce los síntomas'
  },
  {
    img: '/img/sliders/heart.png',
    description: 'Problemas en dos áreas, conoce los síntomas'
  }
]

export const Explore = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <h2 className="text-primary text-xl font-Montserrat font-normal text-center">
          Explora
          <br />
          <span className="text-secondaryDark text-3xl font-Montserrat font-bold text-center">
            más beneficios
          </span>
        </h2>
      </div>
      <ul className="flex flex-row overflow-scroll snap-x snap-mandatory">
        {benefits.map((benefit) => {
          return (
            <li
              key={benefit.description}
              className="shrink-0 w-full mx-auto  flex flex-col gap-5 items-center justify-center snap-start"
            >
              <div className="w-3/4 mx-auto  flex flex-col items-center justify-between h-full">
                <Image
                  src={benefit.img}
                  width={300}
                  height={300}
                  alt={benefit.description}
                />
                <h2 className=" w-full text-center text-primary text-xl font-Titillium">
                  {benefit.description}g
                </h2>
                <ButtonWhite>Leer Más</ButtonWhite>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
