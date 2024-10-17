import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from '@/App.tsx';
import '@/index.css';
import { ThemeProvider } from '@/components/theme/theme-provider';

createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>,
);
