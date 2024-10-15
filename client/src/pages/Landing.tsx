import { Button } from '@/components/ui/button';

export default function Landing() {
    return (
        <section className='flex min-h-screen w-full items-center justify-center px-0'>
            <div className='container px-4 md:px-6'>
                <div className='flex flex-col items-center space-y-4 text-center'>
                    <div className='space-y-2'>
                        <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                            Welcome to Finn
                        </h1>
                        <p className='mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl'>
                            Manage your expenses, and invest toward your goals
                        </p>
                    </div>
                    <div className='space-x-4'>
                        <Button>Get Started</Button>
                        <Button variant='outline'>Learn More</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
