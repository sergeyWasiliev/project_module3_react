import NavMenu from '../NavMenu/NavMenu.tsx'
import Logo from '../logo/Logo.tsx'
import s from './Header.module.css'

export type HeaderPage = 'home_page' | 'all_pages'

interface Props {
    page: HeaderPage
}

export default function Header({page}: Props) {
    const isHome = page === 'home_page'

    return (
        <header className={`${s.header} ${isHome ? s.home_page : s.all_pages}`}
             // className={[s.header, isHome ? s.home_page : s.all_pages].join(' ')}
        >
            <div className={s.header_inner}>
                <Logo page={page}/>
                <NavMenu/>
            </div>
        </header>
    )
}

