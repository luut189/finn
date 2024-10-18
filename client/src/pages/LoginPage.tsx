import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
    username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters.' })
        .refine((password) => /[A-Z]/.test(password), {
            message: 'Password must contain at least an uppercase character.',
        })
        .refine((password) => /[a-z]/.test(password), {
            message: 'Password must contain at least a lowercase character',
        })
        .refine((password) => /[0-9]/.test(password), {
            message: 'Password must contain at least a number.',
        })
        .refine((password) => /[!@#$%^&*]/.test(password), {
            message: 'Password must contain at least a special character.',
        }),
});

export default function LoginPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <div className='flex min-h-screen items-center justify-center'>
            <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            className='flex flex-col items-center justify-center'
                            onSubmit={form.handleSubmit(onSubmit)}>
                            <div className='flex flex-col gap-4'>
                                <FormField
                                    control={form.control}
                                    name='username'
                                    render={({ field }) => (
                                        <FormItem className='w-[20rem]'>
                                            <FormControl>
                                                <Input placeholder='Username' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='password'
                                    render={({ field }) => (
                                        <FormItem className='w-[20rem]'>
                                            <FormControl>
                                                <Input
                                                    type='password'
                                                    placeholder='Password'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button className='ml-auto underline' variant={'link'} asChild>
                                <a href='/forgot-password'>Forgot password?</a>
                            </Button>
                            <Button className='w-full' type='submit'>
                                Login
                            </Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className='flex justify-between'>
                    <Label>New to the app?</Label>
                    <Button className='underline' variant={'link'} asChild>
                        <a href='/signup'>Sign up here</a>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
