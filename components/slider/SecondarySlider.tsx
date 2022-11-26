import Image from 'next/image'
import React from 'react'

const features = [
  {
    description:
      'Compra aquí el medicamento genérico que necesitas y aprovecha el descuento que tenemos para ti',
    img: '/img/sliders/SecondarySlider.png'
  }
]

export const SecondarySlider = () => {
  return (
    <div className="">
      <ul>
        {features.map((feat) => {
          return (
            <li>
              <Image
                src={feat.img}
                width={400}
                height={300}
                alt={feat.description}
              />
              <div className="bg-primary">
                <p>{feat.description}</p>
              </div>
              <button className="bg-secondary rounded-full p-4 btn">
                Comprar online
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
