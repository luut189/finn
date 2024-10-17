import { Button } from '@/components/ui/button';

export default function PageNotFound() {
    return (
        <div className='flex min-h-screen items-center px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
            <div className='w-full space-y-6 text-center'>
                <div className='space-y-3'>
                    <h1 className='text-4xl font-bold tracking-tighter transition-transform hover:scale-110 sm:text-5xl'>
                        404
                    </h1>
                    <p className='text-gray-500'>
                        Looks like you've ventured into the unknown digital realm.
                    </p>
                </div>
                <Button asChild>
                    <a href='/'>Return to website</a>
                </Button>
            </div>
        </div>
    );
}
