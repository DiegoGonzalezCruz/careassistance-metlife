import Image from 'next/image'
import React from 'react'
import ButtonWhite from '../buttons/ButtonWhite'

const benefits = [
  {
    img: '/img/sliders/heart.png',
    description: 'Problemas cardíacos, conoce los síntomas'
  }
]

export const Explore = () => {
  return (
    <div>
      <div>
        <h2>Explora más beneficios</h2>
      </div>
      <ul>
        {benefits.map((benefit) => {
          return (
            <li key={benefit.description}>
              <Image
                src={benefit.img}
                width={300}
                height={300}
                alt={benefit.description}
              />
              <h2>{benefit.description}</h2>
              <ButtonWhite>Leer Más</ButtonWhite>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
