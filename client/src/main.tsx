import App from '@/App.tsx';
import { ThemeProvider } from '@/components/theme/theme-provider';
import '@/index.css';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>,
);
