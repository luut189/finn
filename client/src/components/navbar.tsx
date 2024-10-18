import { ILoginProp } from '@/common/types';
import Sidebar from '@/components/sidebar';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Button } from '@/components/ui/button';

import { CircleAlert, Coins, House, LayoutDashboard, LogIn, LogOut, Settings } from 'lucide-react';
import { ReactNode } from 'react';

export interface INavbarContent {
    mainName: string;
    sideIcon: ReactNode;
    href?: string;
    function?: () => void;
}

const loggedInNavbarContent: INavbarContent[] = [
    {
        mainName: 'Home',
        href: '/',
        sideIcon: <House />,
    },
    {
        mainName: 'Dashboard',
        href: '/dashboard',
        sideIcon: <LayoutDashboard />,
    },
    {
        mainName: 'Setting',
        href: '/setting',
        sideIcon: <Settings />,
    },
    {
        mainName: 'About',
        href: '/about',
        sideIcon: <CircleAlert />,
    },
    {
        mainName: 'Log out',
        href: '/logout',
        sideIcon: <LogOut />,
    },
];

const navbarContent: INavbarContent[] = [
    {
        mainName: 'Home',
        href: '/',
        sideIcon: <House />,
    },
    {
        mainName: 'About',
        href: '/about',
        sideIcon: <CircleAlert />,
    },
    {
        mainName: 'Login or Sign up',
        href: '/login',
        sideIcon: <LogIn />,
    },
];

export default function Navbar({ isLoggedIn }: ILoginProp) {
    return (
        <header>
            <Sidebar
                isLoggedIn={isLoggedIn}
                loggedInNavbarContent={loggedInNavbarContent}
                navbarContent={navbarContent}
            />
            <div className='hidden h-20 items-center px-4 sm:hidden md:flex lg:flex lg:px-6'>
                <div className='flex text-xl font-medium'>
                    <div className='flex items-center gap-2'>
                        <Coins />
                        Finn
                    </div>
                </div>
                <nav className='ml-auto flex gap-4 sm:gap-6'>
                    {isLoggedIn
                        ? loggedInNavbarContent.map((content, index) => (
                              <Button
                                  key={index}
                                  variant={
                                      index == loggedInNavbarContent.length - 1 ? 'outline' : 'link'
                                  }
                                  asChild>
                                  <a href={content.href}>{content.mainName}</a>
                              </Button>
                          ))
                        : navbarContent.map((content, index) => (
                              <Button
                                  key={index}
                                  variant={index == navbarContent.length - 1 ? 'outline' : 'link'}
                                  asChild>
                                  <a href={content.href}>{content.mainName}</a>
                              </Button>
                          ))}
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}
