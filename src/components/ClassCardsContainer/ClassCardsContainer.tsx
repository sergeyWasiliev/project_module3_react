import type { TrainClass } from '../../types/trainsTypes'
import ClassCard from '../ClassCard/ClassCard.tsx'
import s from './ClassCardsContainer.module.css'

const CLASS_SLOTS = ['3A', '2A', '1A'] as const

interface Props {
  classes: TrainClass[]
}

export default function ClassCardsContainer({ classes }: Props) {
  const classesByType = new Map(classes.map((item) => [item.type, item]))

  return (
    <div className={s.container}>
      {CLASS_SLOTS.map((type) => {
        const classData = classesByType.get(type)
        if (!classData) {
          return <div key={type} className={s.slot} aria-hidden />
        }
        return <ClassCard key={type} {...classData} />
      })}
    </div>
  )
}