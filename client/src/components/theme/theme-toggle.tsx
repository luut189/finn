import { useTheme } from '@/components/theme/theme-provider';
import { Button } from '@/components/ui/button';

import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    let isDark = theme == 'dark';

    return (
        <Button
            size={'icon'}
            onClick={() => {
                isDark = !isDark;
                setTheme(isDark ? 'dark' : 'light');
            }}>
            <div className='flex h-5 w-5 items-center transition-all'>
                {isDark ? <Sun /> : <Moon />}
            </div>
        </Button>
    );
}
