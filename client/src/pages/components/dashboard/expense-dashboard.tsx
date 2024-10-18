import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import SpendingChart from './dashboard-chart';
import RecentTransactions from './recent-transactions';

import { DollarSign } from 'lucide-react';

export default function ExpenseDashboard() {
    return (
        <div className='flex flex-col gap-2'>
            <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-4'>
                <Card className='col-span-2'>
                    <CardHeader className='flex flex-row content-center justify-between pb-2'>
                        <CardTitle>Income</CardTitle>
                        <DollarSign className='h-5 w-5 text-muted-foreground' />
                    </CardHeader>
                    <CardContent>
                        <div className='text-2xl font-bold'>$30000</div>
                        <p className='text-xs text-muted-foreground'>+20.1% from last month</p>
                    </CardContent>
                </Card>
                <Card className='col-span-2'>
                    <CardHeader className='flex flex-row content-center justify-between pb-2'>
                        <CardTitle>Spending</CardTitle>
                        <DollarSign className='h-5 w-5 text-muted-foreground' />
                    </CardHeader>
                    <CardContent>
                        <div className='text-2xl font-bold'>$30000</div>
                        <p className='text-xs text-muted-foreground'>+20.1% from last month</p>
                    </CardContent>
                </Card>
            </div>
            <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-7'>
                <Card className='col-span-full h-fit md:col-span-4 lg:col-span-4'>
                    <CardHeader>
                        <CardTitle>Spending Overview</CardTitle>
                    </CardHeader>
                    <CardContent className='pl-2'>
                        <SpendingChart />
                    </CardContent>
                </Card>
                <Card className='col-span-full md:col-span-4 lg:col-span-3'>
                    <CardHeader>
                        <CardTitle>Recent Transactions</CardTitle>
                    </CardHeader>
                    <CardContent className='pl-2'>
                        <RecentTransactions />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
