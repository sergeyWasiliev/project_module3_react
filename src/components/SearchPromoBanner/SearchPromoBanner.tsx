import chevronIcon from '../../media/promo-chevron.svg'
import s from './SearchPromoBanner.module.css'

type Props = {
  title: string
  imageSrc: string
}

export default function SearchPromoBanner({ title, imageSrc }: Props) {
  return (
    <div className={s.banner}>
      <img className={s.background} src={imageSrc} alt="" aria-hidden />
      <span className={s.overlay} aria-hidden />
      <p className={s.title}>{title}</p>
      <img className={s.chevron} src={chevronIcon} alt="" aria-hidden />
    </div>
  )
}