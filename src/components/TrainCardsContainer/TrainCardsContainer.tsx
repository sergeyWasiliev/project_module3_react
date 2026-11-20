import s from './TrainCardsContainer.module.css'
import { useAppSelector } from '../../store/hook.ts'
import TrainCard from "../TrainCard/TrainCard.tsx";

export default function TrainCardsContainer() {

    const trainsSearchResults = useAppSelector(store => store.trainsSearchResults.trains);

  return (
    <div className={s.container}>
        {
            trainsSearchResults.map(el =>
                <TrainCard key={el.id} {...el}/>)
        }
    </div>
  )
}