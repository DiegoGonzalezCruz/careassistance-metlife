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
    <div className="w-full">
      <ul className="w-full  ">
        {features.map((feat) => {
          return (
            <li
              key={feat.description}
              className="bg-primary flex flex-col items-center justify-between pb-10"
            >
              <Image
                src={feat.img}
                width={400}
                height={300}
                alt={feat.description}
                className="w-full"
              />
              <div className="bg-primary py-10 w-3/4 mx-auto text-center">
                <p className="text-white">{feat.description}</p>
              </div>
              <button className="bg-secondary rounded-full w-3/4 px-4 py-2 bold-button text-white">
                Comprar online
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
