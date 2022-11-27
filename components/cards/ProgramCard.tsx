import Image from 'next/image'
import { Program } from '../../types'

const ProgramCard = ({ program }: Program) => {
  return (
    <div className=" rounded-xl snap-start w-full shrink-0 my-5">
      <Image
        src={program.img}
        alt={program.title}
        width={150}
        height={150}
        className="rounded-full mx-auto"
      />
      <div className=" w-full text-center">
        <h2 className="text-primary text-xl font-normal font-Montserrat">
          {program.pretitle}{' '}
        </h2>
        <span className="text-primary text-3xl font-Montserrat font-bold">
          {program.posttitle}
        </span>
      </div>
      <div className="w-3/4 mx-auto text-center py-5">
        <p className="text-primary">{program.description}</p>
      </div>
      <div className="w-3/4 mx-auto text-center py-5">{program.schedule}</div>
    </div>
  )
}

export default ProgramCard
