import planningImage from '../../media/search-promo-planning-holidays.png'
import tourismImage from '../../media/search-promo-train-tourism.png'
import SearchPromoBanner from '../SearchPromoBanner/SearchPromoBanner.tsx'
import s from './SearchResultsPromoSection.module.css'

const DISCLAIMER =
  `Our trains don't just transport people, they transport emotions and stories! From the mountains of Darjeeling to the beaches of Goa, we connect more than just stations. As Raj Koothrappali would say, "In India, we don't just ride trains, we experience cosmic journeys with occasional cow delays." Book now and embrace the colorful chaos!`

export default function SearchResultsPromoSection() {
  return (
    <section className={s.section} aria-label="Travel inspiration">
      <div className={s.banners}>
        <SearchPromoBanner title="Planning your holidays" imageSrc={planningImage} />
        <SearchPromoBanner title="Train tourism packages" imageSrc={tourismImage} />
      </div>
      <p className={s.disclaimer}>{DISCLAIMER}</p>
    </section>
  )
}