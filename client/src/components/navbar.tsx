import { CircleAlert, House, LayoutDashboard, LogIn, LogOut, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { ReactNode } from 'react';
import Sidebar from './sidebar';

export interface INavbarContent {
    mainName: string;
    sideIcon: ReactNode;
    href?: string;
    function?: () => void;
}

interface INavBarProp {
    isLoggedIn: boolean;
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
        href: '/',
        sideIcon: <Settings />,
    },
    {
        mainName: 'About',
        href: '/',
        sideIcon: <CircleAlert />,
    },
    {
        mainName: 'Log out',
        sideIcon: <LogOut />,
    },
];

const navbarContent: INavbarContent[] = [
    {
        mainName: 'About',
        href: '/',
        sideIcon: <CircleAlert />,
    },
    {
        mainName: 'Login or Sign up',
        href: '/login',
        sideIcon: <LogIn />,
    },
];

export default function Navbar({ isLoggedIn }: INavBarProp) {
    return (
        <header>
            <Sidebar
                isLoggedIn={isLoggedIn}
                loggedInNavbarContent={loggedInNavbarContent}
                navbarContent={navbarContent}
            />
            <div className='hidden h-14 items-center px-4 sm:hidden md:flex lg:flex lg:px-6'>
                <p className='text-xl font-medium'>Finn</p>
                <nav className='ml-auto flex gap-4 sm:gap-6'>
                    {isLoggedIn
                        ? loggedInNavbarContent.map((content, index) => (
                              <Button
                                  key={index}
                                  variant={
                                      index == loggedInNavbarContent.length - 1 ? 'outline' : 'link'
                                  }>
                                  <a href={content.href}>{content.mainName}</a>
                              </Button>
                          ))
                        : navbarContent.map((content, index) => (
                              <Button
                                  key={index}
                                  variant={index == navbarContent.length - 1 ? 'outline' : 'link'}>
                                  <a href={content.href}>{content.mainName}</a>
                              </Button>
                          ))}
                </nav>
            </div>
        </header>
    );
}