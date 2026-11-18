import logoBlack from '../../media/Logo_black.png'
import logoWhite from '../../media/Logo_white.png'
import s from './Logo.module.css'
import type { HeaderPage } from '../Header/Header.tsx'

interface Props {
    page: HeaderPage
}

export default function Logo({ page }: Props) {
    const isHome = page === 'home_page'

    return (
        <div className={s.logo}>
            <img
                className={s.logoImage}
                src={isHome ? logoWhite : logoBlack}
                alt={isHome ? 'Logo white' : 'Logo black'}
            />
            <p className={s.title}>Railway</p>
        </div>
    )
}