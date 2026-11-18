import s from './NavMenu.module.css'

export default function NavMenu() {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}>Mobile App</li>
                <li className={s.item}>FAQs</li>
                <li className={s.item}>Contact</li>
                <li className={`${s.item} ${s.signUp}`}>Sign Up</li>
            </ul>
        </nav>
    )
}