import TicketsSearchForm from '../../TicketsSearchForm/TicketsSearchForm.tsx'
import s from './SearchResultsPage.module.css'

export default function SearchResultsPage() {
  return (
    <main className={s.page}>
      <h1 className={s.title}>Search Results</h1>
      <TicketsSearchForm page="all_pages" />
    </main>
  )
}