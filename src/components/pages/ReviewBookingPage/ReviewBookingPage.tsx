import BoardingDetailsCard from '../../BoardingDetailsCard/BoardingDetailsCard.tsx'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../../store/hook.ts'
import type { Train } from '../../../types/trainsTypes.ts'

export default function ReviewBookingPage() {
  const { train_id, class_code } = useParams()
  const trains = useAppSelector((state) => state.trainsSearchResults.trains)

  const targetTrain = trains.find((train: Train) => train.id === Number(train_id))
  const travelClass = targetTrain?.classes.find((item) => item.type === class_code)

  if (!targetTrain || !travelClass) {
    return (
      <main>
        <p>Train or class not found</p>
      </main>
    )
  }

  return (
    <main>
      <BoardingDetailsCard train={targetTrain} travelClass={travelClass} />
    </main>
  )
}