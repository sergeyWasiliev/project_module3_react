import { Link } from 'react-router-dom'
import ghostIllustration from '../../../media/not-found-ghost.svg'
import s from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <main className={s.page}>
      <div className={s.content}>
        <div className={s.messageBlock}>
          <div className={s.heroBlock}>
            <div className={s.errorCodeRow} role="img" aria-label="404">
              <span className={s.errorCodeDigit} aria-hidden>
                4
              </span>
              <img
                className={s.ghostIllustration}
                src={ghostIllustration}
                alt=""
                aria-hidden
              />
              <span className={s.errorCodeDigit} aria-hidden>
                4
              </span>
            </div>
            <h1 className={s.heading}>Boo! Page missing!</h1>
          </div>
          <p className={s.lead}>
            Whoops! This page must be a ghost - it&apos;s not here!
          </p>
        </div>

        <Link className={s.homeLink} to="/">
          Find shelter
        </Link>
      </div>
    </main>
  )
}