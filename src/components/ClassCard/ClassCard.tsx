import type { TrainClass } from '../../types/trainsTypes'
import { Link } from 'react-router-dom'
import s from './ClassCard.module.css'

interface Props extends TrainClass {
  train_id: number
}

export default function ClassCard({
  train_id,
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
    <Link
      to={`/review-booking/${train_id}/${type}`}
      className={s.card}
      data-type={type}
    >
      <div className={s.row}>
        <span>{type}</span>
        <span>{availabilityLabel}</span>
      </div>
      <div className={s.row}>
        <span>{fareType}</span>
        <span>₹{price}</span>
      </div>
    </Link>
  )
}