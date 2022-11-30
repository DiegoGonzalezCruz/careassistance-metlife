import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <footer className=" w-full mx-auto h-fit md:h-[20vh] bg-backgroundDark flex flex-col  gap-5">
      <div className="w-full px-5  h-full flex flex-col items-center justify-center mx-auto">
        <div className="flex flex-row justify-between items-center py-5 w-full ">
          <Image
            src="/img/logos/metlife.png"
            alt="metlife"
            width={50}
            height={20}
            className=" h-fit w-1/3 md:h-10 md:w-fit"
          />
          <Image
            src="/img/logos/poweredCA.png"
            alt="metlife"
            width={80}
            height={20}
            className=" h-fit w-1/3 md:h-10 md:w-fit"
          />
        </div>
        <div className="w-full flex flex-row  gap-5  ">
          <p className="text-xs text-primary font-Titillium ">
            Políticas de Privacidad
          </p>
          <p className="text-xs text-primary font-Titillium">
            Términos y condiciones
          </p>
        </div>
        <div className="md:hidden flex flex-col  gap-0  ">
          <p className="font-Titillium text-xs font-bold">
            Chile / Compañías MetLife.
          </p>
          <p className="font-Titillium text-xs">
            <span className="font-bold text-xs">Atención Telefónica: </span>
            Lunes a Jueves 9:00 a 17:00 hrs. Viernes 9:00 a 15:00 hrs.
          </p>
          <p className="font-Titillium text-xs">
            <span className="font-bold text-xs">Desde teléfonos fijos: </span>
            600 390 3000.
          </p>
          <p className="font-Titillium text-xs h-fit ">
            <span className="font-bold text-xs ">
              Desde teléfonos celulares o el extranjero:
            </span>
            +56 2 2826 4790.
          </p>
        </div>
      </div>
    </footer>
  )
}
