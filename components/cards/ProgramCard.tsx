import Image from 'next/image'
import { Program } from '../../types'
import Button from '../buttons/Button'

const ProgramCard = ({ program, idx }: Program) => {
  return (
    <div
      id={`program${idx}`}
      className=" shadow-xl rounded-xl snap-start md:snap-center w-full md:w-1/4 shrink-0 mt-14 h-full first:ml-10 last:mr-10 flex flex-col items-center py-5"
    >
      <div className="w-full  flex flex-col gap-2">
        <Image
          src={program.acf.imagen}
          alt={program.acf.titulo}
          width={150}
          height={150}
          className="rounded-full mx-auto -translate-y-5 h-24 w-fit "
        />
        <div className=" w-full h-full text-center my-2 -translate-y-2 ">
          <h2 className="text-primary text-xl md:text-sm font-normal font-Montserrat lin">
            {program.acf.pretitle}
            <br />
            <span className="text-primary text-3xl md:text-xl font-Montserrat font-bold ">
              {program.acf.posttitle}
            </span>{' '}
          </h2>
        </div>
        <div className="w-full mx-auto text-center  ">
          <p className="text-sm text-primary font-Titillium">
            {program.acf.description}
          </p>
        </div>
        <Button className="bg-secondary text-sm">
          Descubre más iniciando sesión
        </Button>

        {/*    <ul className="w-5/6 mx-auto flex flex-col gap-2 md:hidden ">
        {features.map((feat) => {
          return (
            <li
              key={feat.title}
              className="flex flex-row items-center border-2 border-primary rounded-xl pl-2 h-10"
            >
              <Image
                src={feat.img}
                width={50}
                height={50}
                alt={feat.title}
                className="py-2 h-12 w-12"
              />
              <p className=" w-5/6 text-center font-Titillium text-primary ">
                {feat.title}
              </p>
            </li>
          )
        })}
      </ul>

      <div
        className="w-5/6  md:w-full mx-auto text-center py-5 prose prose-p:text-sm prose-p:font-Fira prose-p:text-primary md:prose-p:text-sm"
        dangerouslySetInnerHTML={{ __html: program.schedule }}
      /> */}
      </div>
    </div>
  )
}

export default ProgramCard
