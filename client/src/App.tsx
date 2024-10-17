import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Dashboard from '@/pages/Dashboard';
import Landing from '@/pages/Landing';
import LoginPage from '@/pages/LoginPage';
import PageNotFound from '@/pages/PageNotFound';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

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
