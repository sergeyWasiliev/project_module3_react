import s from './TrainCard.module.css'
import type { Train } from '../../types/trainsTypes.ts'
import ClassCardsContainer from '../ClassCardsContainer/ClassCardsContainer.tsx'

type Props = Train

export default function TrainCard({
  id,
  name,
  runsOn,
  departure,
  duration,
  arrival,
  classes,
}: Props) {
  return (
    <article className={s.card}>
      <h3 className={s.train_name}>
        {id} - {name}
      </h3>

      <div className={s.runs_on}>
        <span className={s.runs_on_label}>Runs on</span>
        <span className={s.runs_on_badge}>{runsOn}</span>
      </div>

      <div className={s.route_row}>
        <div className={s.station_block}>
          <p className={s.station_date}>{departure.date}</p>
          <p className={s.station_lines}>
            <span className={s.station_time}>{departure.time}</span>
            <br />
            {departure.station} - {departure.code}
          </p>
        </div>

        <p className={s.duration}>{duration}</p>

        <div className={`${s.station_block} ${s.station_block_end}`}>
          <p className={s.station_date}>{arrival.date}</p>
          <p className={s.station_lines}>
            <span className={s.station_time}>{arrival.time}</span>
            <br />
            {arrival.station} - {arrival.code}
          </p>
        </div>
      </div>

      <ClassCardsContainer classes={classes} />
    </article>
  )
}