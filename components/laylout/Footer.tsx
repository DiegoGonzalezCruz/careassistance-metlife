import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="w-5/6  mx-auto h-fit bg-backgroundDark flex flex-col  gap-5">
      <div className="flex flex-row justify-between items-center py-5">
        <Image
          src="/img/logos/metlife.png"
          alt="metlife"
          width={50}
          height={20}
          className=" h-fit w-1/3"
        />
        <Image
          src="/img/logos/poweredCA.png"
          alt="metlife"
          width={80}
          height={20}
          className=" h-fit w-1/3"
        />
      </div>
      <div className="w-full flex flex-row  gap-5">
        <p className="text-sm text-primary font-Titillium">
          Políticas de Privacidad
        </p>
        <p className="text-sm text-primary font-Titillium">
          Términos y condiciones
        </p>
      </div>
      <div className=" ">
        <p className="font-Titillium text-sm font-bold">
          Chile / Compañías MetLife.
        </p>
        <p className="font-Titillium text-sm">
          <span className="font-bold text-sm">Atención Telefónica: </span>
          Lunes a Jueves 9:00 a 17:00 hrs. Viernes 9:00 a 15:00 hrs.
        </p>
        <p className="font-Titillium text-sm">
          <span className="font-bold text-sm">
            Atención Telefónica Desde teléfonos fijos:{' '}
          </span>
          600 390 3000.
        </p>
        <p className="font-Titillium text-sm ">
          <span className="font-bold text-sm">
            Atención Telefónica Desde teléfonos celulares o el extranjero:{' '}
          </span>
          +56 2 2826 4790.
        </p>
      </div>
    </footer>
  )
}
