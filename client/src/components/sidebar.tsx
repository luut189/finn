import { INavbarContent } from '@/components/navbar';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { MenuIcon } from 'lucide-react';

export default function Sidebar({
    isLoggedIn,
    loggedInNavbarContent,
    navbarContent,
}: {
    isLoggedIn: boolean;
    loggedInNavbarContent: INavbarContent[];
    navbarContent: INavbarContent[];
}) {
    return (
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
                <SheetContent className='w-fit' side={'left'}>
                    <div className='grid gap-4 py-6'>
                        {isLoggedIn
                            ? loggedInNavbarContent.map((content, index) => (
                                  <Button
                                      key={index}
                                      className='text-md flex w-fit gap-2 py-2'
                                      variant={
                                          index == loggedInNavbarContent.length - 1
                                              ? 'outline'
                                              : 'link'
                                      }
                                      asChild>
                                      <a href={content.href}>
                                          {content.sideIcon}
                                          {content.mainName}
                                      </a>
                                  </Button>
                              ))
                            : navbarContent.map((content, index) => (
                                  <Button
                                      key={index}
                                      className='text-md flex w-fit gap-2 py-2'
                                      variant={
                                          index == navbarContent.length - 1 ? 'outline' : 'link'
                                      }
                                      asChild>
                                      <a href={content.href}>
                                          {content.sideIcon}
                                          {content.mainName}
                                      </a>
                                  </Button>
                              ))}
                    </div>
                </SheetContent>
            </Sheet>
            <div className='ml-auto flex gap-4 sm:gap-6'>
                <ThemeToggle />
            </div>
        </div>
    );
}
