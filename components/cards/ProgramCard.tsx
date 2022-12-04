import Image from 'next/image'
import { useState } from 'react'
import { Program } from '../../types'
import Button from '../buttons/Button'
import ProgramModal from '../laylout/ProgramModal'

const ProgramCard = ({ program, idx }: Program) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [programToModal, setProgramToModal] = useState<Program>()

  const modalOpener = (prgm: Program) => {
    console.log('modal open', prgm)
    setIsModalOpen(true)
    setProgramToModal(prgm)
  }
  return (
    <>
      <div
        id={`program${idx}`}
        className=" shadow-xl rounded-xl snap-start md:snap-center w-full h-[60vh] md:w-1/4   shrink-0 first:ml-10 last:mr-10 flex flex-col items-center my-2 "
      >
        <div className="w-full h-full flex flex-col items-center justify-around  px-5 md:px-0">
          <div className=" w-full h-fit ">
            <Image
              src={program.acf.imagen}
              alt={program.acf.titulo}
              width={150}
              height={150}
              className="rounded-full mx-auto  h-24 w-fit "
            />
            <div className=" w-full h-fit text-center  ">
              <h2 className=" text-primary text-xl md:text-sm font-normal font-Montserrat ">
                {program.acf.pretitle}
                <br />
                <span className="text-primary text-xl md:text-2xl font-Montserrat font-bold ">
                  {program.acf.posttitle}
                </span>{' '}
              </h2>
            </div>
          </div>
          <div className=" w-full h-fit flex flex-col justify-end ">
            <div className="w-full mx-auto text-center  ">
              <p className="text-base text-primary font-Titillium">
                {program.acf.description}
              </p>
            </div>
            <Button
              onClick={() => modalOpener(program)}
              className="bg-secondary text-sm "
            >
              Descubre más iniciando sesión
            </Button>

            <p className="text-xs font-Titillium text-secondaryDark text-center">
              {program.acf.horario}
            </p>
          </div>
        </div>
      </div>
      <ProgramModal program={program} />
    </>
  )
}

export default ProgramCard
