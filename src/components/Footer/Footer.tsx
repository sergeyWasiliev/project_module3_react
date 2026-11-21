import Logo from '../logo/Logo.tsx'
import s from './Footer.module.css'

type LinkColumnProps = {
  title: string
  items: readonly string[]
}

function FooterLinkColumn({ title, items }: LinkColumnProps) {
  return (
    <div className={s.column}>
      <h2 className={s.columnTitle}>{title}</h2>
      <ul className={s.columnList}>
        {items.map((item) => (
          <li key={item} className={s.columnItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

const ABOUT_LINKS = [
  'How it works',
  'Featured',
  'Partnership',
  'Bussiness Relation',
] as const

const COMMUNITY_LINKS = [
  'Events',
  'Blog',
  'Podcast',
  'Invite a friend'
] as const

const SOCIAL_LINKS = [
  'Discord',
  'Instagram',
  'Twitter',
  'Facebook'] as const

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footer_inner}>
        <div className={s.top}>
          <div className={s.brand}>
            <Logo page="home_page" />
          </div>
          <FooterLinkColumn title="About" items={ABOUT_LINKS} />
          <FooterLinkColumn title="Community" items={COMMUNITY_LINKS} />
          <FooterLinkColumn title="Socials" items={SOCIAL_LINKS} />
        </div>
        <p className={s.copyright}>©2025 RailWay.&nbsp;&nbsp;All rights reserved</p>
      </div>
    </footer>
  )
}