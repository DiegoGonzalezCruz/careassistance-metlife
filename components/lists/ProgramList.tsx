import { Programs } from '../../types'
import ProgramCard from '../cards/ProgramCard'
import { useInView } from 'react-intersection-observer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const ProgramList = ({ programs }: Programs) => {
  // console.log(programs, 'programs')

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0
  })

  return (
    <div className="w-full">
      <ul className="w-full flex flex-row overflow-scroll snap-x snap-mandatory md:gap-10 ">
        {programs.map((program, idx) => {
          return <ProgramCard program={program} key={program.title} idx={idx} />
        })}
      </ul>
      <div className="w-full mb-5 flex flex-row gap-5 items-center justify-center ">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-2xl hover:text-primary text-input"
        />
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-2xl hover:text-primary text-input"
        />
      </div>
    </div>
  )
}

export default ProgramList
