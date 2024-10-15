import { MenuIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface INavbarContent {
    id: number;
    name: string;
    href: string;
}

const navbarContent: INavbarContent[] = [
    { id: 0, name: 'Home', href: '/' },
    { id: 1, name: 'Dashboard', href: '/dashboard' },
    { id: 2, name: 'Setting', href: '/' },
];

export default function Navbar() {
    return (
        <header>
            <div className='flex h-20 items-center px-4 md:hidden lg:hidden 2xl:hidden'>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            size={'icon'}
                            variant='outline'
                            className='flex items-center p-2 md:hidden lg:hidden 2xl:hidden'>
                            <MenuIcon className='h-6 w-6' />
                            <span className='sr-only'>Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent className='flex w-fit flex-col' side={'left'}>
                        <div className='grid gap-2 py-6'>
                            {navbarContent.map((content) => (
                                <Button
                                    key={content.id}
                                    className='flex w-full items-center py-2 text-lg font-semibold'
                                    variant={'link'}>
                                    <a href={content.href}>{content.name}</a>
                                </Button>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            <div className='hidden h-14 items-center px-4 sm:hidden md:flex lg:flex lg:px-6'>
                <p className='text-xl font-medium'>Finn</p>
                <nav className='ml-auto flex gap-4 sm:gap-6'>
                    {navbarContent.map((content) => (
                        <Button key={content.id} variant={'link'}>
                            <a href={content.href}>{content.name}</a>
                        </Button>
                    ))}
                </nav>
            </div>
        </header>
    );
}
