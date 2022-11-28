import { Programs } from '../../types'
import ProgramCard from '../cards/ProgramCard'
import { useInView } from 'react-intersection-observer'

const ProgramList = ({ programs }: Programs) => {
  // console.log(programs, 'programs')

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0
  })

  return (
    <div>
      <ul className="w-full flex flex-row overflow-scroll snap-x snap-mandatory md:gap-10 ">
        {programs.map((program, idx) => {
          return <ProgramCard program={program} key={program.title} />
        })}
      </ul>
    </div>
  )
}

export default ProgramList
