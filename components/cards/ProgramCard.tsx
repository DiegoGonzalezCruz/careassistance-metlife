import Image from 'next/image'
import { Program } from '../../types'

const ProgramCard = ({ program }: Program) => {
  const features = [
    {
      title: '600 945 9800',
      img: '/img/logos/programFeatures/landline.svg'
    },
    {
      title: '+56 9 9968 7935',
      img: '/img/logos/programFeatures/cellphone.svg'
    },
    {
      title: 'Chat Online',
      img: '/img/logos/programFeatures/chat.svg'
    },
    {
      title: 'Iniciar videollamada',
      img: '/img/logos/programFeatures/telemedicina.svg'
    }
  ]

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
      <ul className="w-3/4 mx-auto flex flex-col gap-5">
        {features.map((feat) => {
          return (
            <li
              key={feat.title}
              className="flex flex-row items-center border-2 border-primary rounded-xl pl-2 h-12"
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
      <div className="w-3/4 mx-auto text-center py-5">
        <p className="text-primary">{program.description}</p>
      </div>
      <div className="w-3/4 mx-auto text-center py-5 ">{program.schedule}</div>
    </div>
  )
}

export default ProgramCard
