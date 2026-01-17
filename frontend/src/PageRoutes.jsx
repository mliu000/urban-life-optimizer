import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import WelcomePage from './WelcomePage'

export default function PageRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/WelcomePage" replace/>}/>
                <Route path="/WelcomePage" element={<WelcomePage />} />
            </Routes>
        </BrowserRouter>
    );
}