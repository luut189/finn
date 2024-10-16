import { Button } from '@/components/ui/button';

export default function Footer() {
    return (
        <footer className='flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-3 sm:flex-row md:px-6'>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
                © 2024 Finn. All rights reserved.
            </p>
            <nav className='flex gap-4 sm:ml-auto sm:gap-6'>
                <Button className='text-xs' variant={'link'} asChild>
                    <a href='#'>Terms of Service</a>
                </Button>
                <Button className='text-xs' variant={'link'} asChild>
                    <a href='#'>Privacy</a>
                </Button>
            </nav>
        </footer>
    );
}
