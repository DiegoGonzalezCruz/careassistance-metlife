import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="w-screen h-[20vh] bg-backgroundDark flex flex-col">
      <div className="flex flex-row justify-between">
        <Image
          src="/img/logos/metlife.png"
          alt="metlife"
          width={100}
          height={100}
        />
        <Image
          src="/img/logos/poweredCA.png"
          alt="metlife"
          width={100}
          height={100}
        />
      </div>
      <div className="w-full flex flex-row">
        <p>Políticas de Privacidad</p>
        <p>Términos y condiciones</p>
      </div>
      <div>
        <p>Chile / Compañías MetLife. </p>
        <p>
          Atención Telefónica Lunes a Jueves 9:00 a 17:00 hrs. Viernes 9:00 a
          15:00 hrs.
        </p>
        <p> Desde teléfonos fijos 600 390 3000. </p>
        <p> Desde teléfonos celulares o el extranjero +56 2 2826 4790. </p>
      </div>
    </footer>
  )
}
