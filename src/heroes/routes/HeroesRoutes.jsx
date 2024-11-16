import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "../../ui";
import { MarvelPage, DcPage, SearchPage, HeroPage } from '../';

export const HeroesRoutes = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Navigate to="/marvel" />} />
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:id" element={<HeroPage />} />
                </Routes>
            </div>
        </>
    )
}