import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
    {
        date: 'Jan',
        spent: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        date: 'Feb',
        spent: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        date: 'Mar',
        spent: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        date: 'Apr',
        spent: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        date: 'May',
        spent: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        date: 'Jun',
        spent: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        date: 'Jul',
        spent: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        date: 'Aug',
        spent: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        date: 'Sep',
        spent: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        date: 'Oct',
        spent: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        date: 'Nov',
        spent: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        date: 'Dec',
        spent: Math.floor(Math.random() * 5000) + 1000,
    },
];

export default function SpendingChart() {
    const chartConfig = {
        spent: {
            label: 'Has spent',
            color: 'hsl(var(--chart-2))',
        },
    } satisfies ChartConfig;

    return (
        <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
            <LineChart accessibilityLayer data={data}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey='date'
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value}
                />
                <YAxis
                    stroke='#888888'
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                />
                <ChartTooltip content={<ChartTooltipContent indicator='line' />} />
                <Line dataKey='spent' fill='var(--color-spent)' radius={4} />
            </LineChart>
        </ChartContainer>
    );
}
