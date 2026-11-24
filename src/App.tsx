import './App.css'
import s from './App.module.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './components/pages/HomePage/HomePage.tsx'
import SearchResultsPage from './components/pages/SearchResultsPage/SearchResultsPage.tsx'
import ReviewBookingPage from './components/pages/ReviewBookingPage/ReviewBookingPage.tsx'
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage.tsx'
import Header from './components/Header/Header.tsx'
import type { HeaderPage } from './components/Header/Header.tsx'
import Footer from './components/Footer/Footer.tsx'


export default function App() {
    const location = useLocation()
    const isHome = location.pathname === '/'
    const isFooter =
        location.pathname === '/search-results' ||
        location.pathname.startsWith('/review-booking')

    const headerPage: HeaderPage = isHome ? 'home_page' : 'all_pages'

    return (
        <div className={s.app}>
            <Header page={headerPage} />
            <div className={isHome ? undefined : s.content_light}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search-results" element={<SearchResultsPage />} />
                    <Route path="/review-booking/:train_id/:class_code" element={<ReviewBookingPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
            {isFooter && <Footer />}
        </div>
    )
}