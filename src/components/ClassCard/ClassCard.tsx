import type { TrainClass } from '../../types/trainsTypes'
import s from './ClassCard.module.css'

interface Props extends TrainClass {}

export default function ClassCard({
  type,
  status,
  availability,
  fareType,
  price,
}: Props) {
  const availabilityCode = String(availability).padStart(3, '0')
  const availabilityLabel =
    status === 'available' ? `Avl - ${availabilityCode}` : `WL - ${availabilityCode}`

  return (
    <div className={s.card} data-type={type}>
      <div className={s.row}>
        <span>{type}</span>
        <span>{availabilityLabel}</span>
      </div>
      <div className={s.row}>
        <span>{fareType}</span>
        <span>₹{price}</span>
      </div>
    </div>
  )
}