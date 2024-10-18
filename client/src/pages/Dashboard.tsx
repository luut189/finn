import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ExpenseDashboard from './components/dashboard/expense-dashboard';

export default function Dashboard() {
    return (
        <div className='mx-5 flex min-h-screen flex-col gap-2'>
            <p className='text-3xl font-bold tracking-tight'>Hello, User!</p>
            <Tabs defaultValue='expense'>
                <TabsList>
                    <TabsTrigger value='expense'>Expenses</TabsTrigger>
                    <TabsTrigger value='invest'>Investments</TabsTrigger>
                </TabsList>
                <TabsContent value='expense'>
                    <ExpenseDashboard />
                </TabsContent>
                <TabsContent value='invest'>Hello</TabsContent>
            </Tabs>
        </div>
    );
}
