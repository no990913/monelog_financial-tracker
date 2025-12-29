import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTransactions } from '@/context/TransactionContext';
import { format, startOfMonth, endOfMonth, eachMonthOfInterval, subMonths } from 'date-fns';

export function MonthlyTrends() {
  const { transactions } = useTransactions();

  const last12Months = eachMonthOfInterval({
    start: subMonths(new Date(), 11),
    end: new Date(),
  });

  const data = last12Months.map((month) => {
    const monthStart = startOfMonth(month);
    const monthEnd = endOfMonth(month);

    const income = transactions
      .filter(
        (t) =>
          t.type === 'income' &&
          new Date(t.date) >= monthStart &&
          new Date(t.date) <= monthEnd
      )
      .reduce((sum, t) => sum + t.amount, 0);

    const expenses = transactions
      .filter(
        (t) =>
          t.type === 'expense' &&
          new Date(t.date) >= monthStart &&
          new Date(t.date) <= monthEnd
      )
      .reduce((sum, t) => sum + t.amount, 0);

    const net = income - expenses;

    return {
      month: format(month, 'MMM'),
      income,
      expenses,
      net,
    };
  });

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">12-Month Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 88%)" />
            <XAxis
              dataKey="month"
              stroke="hsl(0, 0%, 42%)"
              style={{ fontSize: '12px' }}
            />
            <YAxis
              stroke="hsl(0, 0%, 42%)"
              style={{ fontSize: '12px' }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(0, 0%, 100%)',
                border: '1px solid hsl(0, 0%, 88%)',
                borderRadius: '8px',
                color: 'hsl(210, 15%, 20%)',
              }}
              formatter={(value: number) => `$${value.toFixed(2)}`}
            />
            <Legend wrapperStyle={{ color: 'hsl(210, 15%, 20%)' }} />
            <Line
              type="monotone"
              dataKey="income"
              stroke="hsl(150, 50%, 25%)"
              strokeWidth={2}
              dot={{ fill: 'hsl(150, 50%, 25%)' }}
              name="Income"
            />
            <Line
              type="monotone"
              dataKey="expenses"
              stroke="hsl(10, 75%, 60%)"
              strokeWidth={2}
              dot={{ fill: 'hsl(10, 75%, 60%)' }}
              name="Expenses"
            />
            <Line
              type="monotone"
              dataKey="net"
              stroke="hsl(160, 50%, 45%)"
              strokeWidth={2}
              dot={{ fill: 'hsl(160, 50%, 45%)' }}
              name="Net"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
