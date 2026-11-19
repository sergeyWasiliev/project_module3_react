import TicketsSearchForm from '../../TicketsSearchForm/TicketsSearchForm.tsx'
import s from './HomePage.module.css'

export default function HomePage() {
  return (
    <main className={s.home}>
      <div className={s.hero}>
        <div className={s.hero_text}>
          <h1 className={s.title}>Let's Find That Ticket</h1>
          <p className={s.subtitle}>Before Someone Else Does</p>
        </div>
        <TicketsSearchForm page='home_page'/>
      </div>
    </main>
  )
}