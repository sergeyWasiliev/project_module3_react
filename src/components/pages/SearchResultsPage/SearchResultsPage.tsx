import TicketsSearchForm from '../../TicketsSearchForm/TicketsSearchForm.tsx'
import TrainCardsContainer from '../../TrainCardsContainer/TrainCardsContainer.tsx'
import SearchResultsPromoSection from '../../SearchResultsPromoSection/SearchResultsPromoSection.tsx'
import s from './SearchResultsPage.module.css'

export default function SearchResultsPage() {
  return (
    <main className={s.page}>
      <section className={s.search_section}>
        <h1 className={s.title}>Search Results</h1>
        <TicketsSearchForm page="all_pages" />
      </section>

      <SearchResultsPromoSection />

      <section className={s.trains_section} aria-labelledby="available-trains-heading">
        <h2 id="available-trains-heading" className={s.trains_title}>
          Available Trains
        </h2>
        <TrainCardsContainer />
      </section>
    </main>
  )
}