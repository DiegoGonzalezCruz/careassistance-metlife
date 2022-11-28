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
    <div className=" rounded-xl snap-start md:snap-center w-full md:w-1/3 shrink-0 my-5 h-full first:ml-10 last:mr-10">
      <Image
        src={program.img}
        alt={program.title}
        width={150}
        height={150}
        className="rounded-full mx-auto"
      />
      <div className=" w-full h-full text-center my-2 ">
        <h2 className="text-primary text-xl md:text-sm font-normal font-Montserrat lin">
          {program.pretitle}
          <br />
          <span className="text-primary text-3xl md:text-xl font-Montserrat font-bold ">
            {program.posttitle}
          </span>{' '}
        </h2>
      </div>
      <div className="w-3/4 mx-auto text-center ">
        <div
          className="text-primary prose prose-p:font-Titillium prose-p:text-primary md:prose-p:text-sm "
          dangerouslySetInnerHTML={{ __html: program.description }}
        />
      </div>
      <ul className="w-3/4 mx-auto flex flex-col gap-2 md:hidden ">
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
        className="w-3/4  md:w-full mx-auto text-center py-5 prose prose-p:text-sm prose-p:font-Fira prose-p:text-primary md:prose-p:text-sm"
        dangerouslySetInnerHTML={{ __html: program.schedule }}
      />
    </div>
  )
}

export default ProgramCard
