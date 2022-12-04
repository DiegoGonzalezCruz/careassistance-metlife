import Image from 'next/image'
import React from 'react'
import { Program, ProgramFromREST, ProgramsModal } from '../../types'
import Button from '../buttons/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const ProgramModal = ({ program, isModalOpen, setIsModalOpen }: any) => {
  console.log(program, '*******HERE')
  const programToView = program
  if (programToView) {
    return (
      <div
        className={` top-0  w-screen h-screen bg-input/10 ${
          !isModalOpen ? 'hidden' : 'fixed'
        }`}
      >
        <div className="card h-5/6 mt-10 w-5/6 bg-white mx-auto relative rounded-xl">
          <div className="wrapper w-full mx-auto h-full   debug1">
            <div className="h-1/2 debug1 flex flex-row justify-between">
              <div className="debug1 flex flex-row items-center justify-around w-1/2">
                <Image
                  src={programToView.acf.icono}
                  alt={programToView.acf.titulo}
                  width={100}
                  height={100}
                />
                <h2 className="font-Montserrat text-xl text-primary debug1 w-1/2">
                  {programToView.acf.pretitle}
                  <br />
                  <b>{programToView.acf.posttitle}</b>
                </h2>
              </div>
              <div className="debug2 h-full">
                <Image
                  alt={programToView.acf.titulo}
                  src={programToView.acf.imagen_modal}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain debug1"
                />
              </div>
            </div>
            <div className="h-1/2 w-full px-10 flex flex-col items-center justify-around">
              <p className="text-primary font-Titillium">
                {programToView.acf.description}
              </p>
              <div className="flex flex-row items-center justify-between debug1 w-full gap-10">
                <p className="text-sm text-primary">
                  {programToView.acf.horario}
                </p>
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={() => setIsModalOpen(false)}
                  className="cursor-pointer text-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default ProgramModal
