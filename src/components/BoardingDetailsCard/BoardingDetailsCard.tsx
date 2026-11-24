import s from './BoardingDetailsCard.module.css'
import type { Train, TrainClass } from '../../types/trainsTypes.ts'

export interface BoardingDetailsCardProps {
  train: Train
  travelClass: TrainClass
}

export default function BoardingDetailsCard({
  train,
  travelClass,
}: BoardingDetailsCardProps) {
  const { id, name, departure, duration, arrival } = train
  const availabilityCode = String(travelClass.availability).padStart(3, '0')
  const availabilityLabel =
    travelClass.status === 'available'
      ? `Avl - ${availabilityCode}`
      : `WL - ${availabilityCode}`

  return (
    <article className={s.card}>
      <h2 className={s.title}>Boarding Details</h2>

      <p className={s.train_name}>
        {id} – {name}
      </p>

      <div className={s.class_row}>
        <span className={s.class_type}>{travelClass.type}</span>
        <span className={s.class_meta}>
          {availabilityLabel} · {travelClass.fareType} · ₹{travelClass.price}
        </span>
      </div>

      <div className={s.route_row}>
        <div className={s.station_block}>
          <p className={s.station_date}>{departure.date}</p>
          <p className={s.station_lines}>
            <span className={s.station_time}>{departure.time}</span>
            <br />
            {departure.station} – {departure.code}
          </p>
        </div>

        <p className={s.duration}>{duration}</p>

        <div className={`${s.station_block} ${s.station_block_end}`}>
          <p className={s.station_date}>{arrival.date}</p>
          <p className={s.station_lines}>
            <span className={s.station_time}>{arrival.time}</span>
            <br />
            {arrival.station} – {arrival.code}
          </p>
        </div>
      </div>
    </article>
  )
}