import { Program, Programs } from '../../types'
import ProgramCard from '../cards/ProgramCard'

const ProgramList = ({ programs }: Programs) => {
  console.log(programs, 'programs')
  return (
    <div>
      <ul>
        {programs.map((program) => {
          return <ProgramCard program={program} />
        })}
      </ul>
    </div>
  )
}

export default ProgramList
