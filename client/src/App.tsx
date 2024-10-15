import Landing from '@/pages/Landing';
import Dashboard from '@/pages/Dashboard';
import PageNotFound from '@/pages/PageNotFound';
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
            <Footer />
        </>
    );
}
