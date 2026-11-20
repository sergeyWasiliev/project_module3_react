import type { TrainClass } from '../../types/trainsTypes'
import ClassCard from '../ClassCard/ClassCard.tsx'
import s from './ClassCardsContainer.module.css'

interface Props {
  classes: TrainClass[]
}

export default function ClassCardsContainer({ classes }: Props) {
  return (
    <div className={s.container}>
      {classes.map((el) => (
        <ClassCard key={el.type} {...el} />
      ))}
    </div>
  )
}