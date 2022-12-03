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
    <div className="w-full md:h-full ">
      <ul className="w-full h-full ">
        {features.map((feat) => {
          return (
            <li
              key={feat.description}
              className="bg-primary flex flex-col md:flex-row items-center justify-between  w-full h-full "
            >
              <Image
                src={feat.img}
                width={400}
                height={300}
                alt={feat.description}
                className="w-full md:w-1/2 md:h-full  object-cover"
              />
              <div className="flex flex-col items-center justify-center gap-5 md:w-1/2 h-full py-5 ">
                <div className="bg-primary w-5/6 mx-auto text-center">
                  <p className="text-white">{feat.description}</p>
                </div>
                <button className="bg-secondary rounded-full w-5/6 px-4 py-2 bold-button text-white">
                  Comprar online
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
