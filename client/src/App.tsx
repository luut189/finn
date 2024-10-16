import Landing from '@/pages/Landing';
import Dashboard from '@/pages/Dashboard';
import PageNotFound from '@/pages/PageNotFound';
import LoginPage from '@/pages/LoginPage';

import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useState } from 'react';

export default function App() {
    // mockup login state
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <Navbar isLoggedIn={isLoggedIn} />
                            <Landing />
                        </>
                    }
                />
                <Route
                    path='dashboard'
                    element={
                        <>
                            <Navbar isLoggedIn={isLoggedIn} />
                            <Dashboard />
                        </>
                    }
                />
                <Route path='login' element={<LoginPage />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
            <Footer />
        </>
    );
}
