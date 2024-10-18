import { Date } from '@/common/types';
import { Button } from '@/components/ui/button';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

interface ITransaction {
    recipient: string;
    date: Date;
    category:
        | 'Income'
        | 'Housing'
        | 'Transportation'
        | 'Groceries'
        | 'Dining out'
        | 'Entertainment'
        | 'Health & Fitness'
        | 'Personal care'
        | 'Debt payments'
        | 'Savings & Investments'
        | 'Miscellaneous';
    amount: number;
}

const transactions: ITransaction[] = [
    {
        recipient: 'Supermarket',
        date: { day: 1, month: 10, year: 2024 },
        category: 'Groceries',
        amount: 150,
    },
    {
        recipient: 'Landlord',
        date: { day: 2, month: 10, year: 2024 },
        category: 'Housing',
        amount: 1200,
    },
    {
        recipient: 'Gas Station',
        date: { day: 3, month: 10, year: 2024 },
        category: 'Transportation',
        amount: 50,
    },
    {
        recipient: 'Restaurant',
        date: { day: 4, month: 10, year: 2024 },
        category: 'Dining out',
        amount: 75,
    },
    {
        recipient: 'Cinema',
        date: { day: 5, month: 10, year: 2024 },
        category: 'Entertainment',
        amount: 100,
    },
    {
        recipient: 'Gym',
        date: { day: 6, month: 10, year: 2024 },
        category: 'Health & Fitness',
        amount: 60,
    },
    {
        recipient: 'Salon',
        date: { day: 7, month: 10, year: 2024 },
        category: 'Personal care',
        amount: 30,
    },
    {
        recipient: 'Bank',
        date: { day: 8, month: 10, year: 2024 },
        category: 'Debt payments',
        amount: 200,
    },
    {
        recipient: 'Investment Account',
        date: { day: 9, month: 10, year: 2024 },
        category: 'Savings & Investments',
        amount: 500,
    },
    {
        recipient: 'Supermarket',
        date: { day: 10, month: 10, year: 2024 },
        category: 'Groceries',
        amount: 120,
    },
    {
        recipient: 'Landlord',
        date: { day: 11, month: 10, year: 2024 },
        category: 'Housing',
        amount: 1200,
    },
    {
        recipient: 'Gas Station',
        date: { day: 12, month: 10, year: 2024 },
        category: 'Transportation',
        amount: 70,
    },
    {
        recipient: 'Coffee Shop',
        date: { day: 13, month: 10, year: 2024 },
        category: 'Dining out',
        amount: 40,
    },
    {
        recipient: 'Concert',
        date: { day: 14, month: 10, year: 2024 },
        category: 'Entertainment',
        amount: 150,
    },
    {
        recipient: 'Fitness Class',
        date: { day: 15, month: 10, year: 2024 },
        category: 'Health & Fitness',
        amount: 45,
    },
    {
        recipient: 'Spa',
        date: { day: 16, month: 10, year: 2024 },
        category: 'Personal care',
        amount: 50,
    },
    {
        recipient: 'Bank',
        date: { day: 17, month: 10, year: 2024 },
        category: 'Debt payments',
        amount: 250,
    },
    {
        recipient: 'Retirement Fund',
        date: { day: 18, month: 10, year: 2024 },
        category: 'Savings & Investments',
        amount: 600,
    },
    {
        recipient: 'Supermarket',
        date: { day: 19, month: 10, year: 2024 },
        category: 'Groceries',
        amount: 140,
    },
    {
        recipient: 'Landlord',
        date: { day: 20, month: 10, year: 2024 },
        category: 'Housing',
        amount: 1200,
    },
    {
        recipient: 'Taxi',
        date: { day: 21, month: 10, year: 2024 },
        category: 'Transportation',
        amount: 80,
    },
    {
        recipient: 'Restaurant',
        date: { day: 22, month: 10, year: 2024 },
        category: 'Dining out',
        amount: 90,
    },
    {
        recipient: 'Theater',
        date: { day: 23, month: 10, year: 2024 },
        category: 'Entertainment',
        amount: 120,
    },
    {
        recipient: 'Yoga Studio',
        date: { day: 24, month: 10, year: 2024 },
        category: 'Health & Fitness',
        amount: 70,
    },
    {
        recipient: 'Barber',
        date: { day: 25, month: 10, year: 2024 },
        category: 'Personal care',
        amount: 25,
    },
    {
        recipient: 'Bank',
        date: { day: 26, month: 10, year: 2024 },
        category: 'Debt payments',
        amount: 300,
    },
    {
        recipient: 'Stock Market',
        date: { day: 27, month: 10, year: 2024 },
        category: 'Savings & Investments',
        amount: 700,
    },
    {
        recipient: 'Supermarket',
        date: { day: 28, month: 10, year: 2024 },
        category: 'Groceries',
        amount: 150,
    },
    {
        recipient: 'Landlord',
        date: { day: 29, month: 10, year: 2024 },
        category: 'Housing',
        amount: 1200,
    },
    {
        recipient: 'Bus Company',
        date: { day: 30, month: 10, year: 2024 },
        category: 'Transportation',
        amount: 50,
    },
];

export default function RecentTransactions() {
    const transactionShown = 10;

    return (
        <div className='flex flex-col gap-2'>
            {transactions
                .slice(-transactionShown)
                .reverse()
                .map((transaction, index) => (
                    <div
                        key={index}
                        className='flex items-center rounded-md border p-2 font-medium shadow-sm'>
                        <div className='flex flex-col gap-1'>
                            <p>{transaction.recipient}</p>
                            <p className='text-xs text-muted-foreground'>{transaction.category}</p>
                        </div>
                        <div className='ml-auto flex flex-col items-end'>
                            <div
                                className={
                                    transaction.category == 'Income'
                                        ? 'text-green-400'
                                        : 'text-red-400'
                                }>
                                {transaction.category == 'Income' ? '+' : '-'}${transaction.amount}
                            </div>
                            <p className='text-xs text-muted-foreground'>
                                {months[transaction.date.month - 1]} {transaction.date.day}
                            </p>
                        </div>
                    </div>
                ))}
            <Button className='ml-auto' asChild>
                <a href='/details'>View details</a>
            </Button>
        </div>
    );
}
