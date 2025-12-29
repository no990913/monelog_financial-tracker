import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTransactions } from '@/context/TransactionContext';
import { format, startOfMonth, endOfMonth, eachMonthOfInterval, subMonths } from 'date-fns';

export function IncomeVsExpense() {
  const { transactions } = useTransactions();

  const last6Months = eachMonthOfInterval({
    start: subMonths(new Date(), 5),
    end: new Date(),
  });

  const data = last6Months.map((month) => {
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

    return {
      month: format(month, 'MMM yyyy'),
      income,
      expenses,
    };
  });

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Income vs Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
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
            <Bar dataKey="income" fill="hsl(150, 50%, 25%)" radius={[8, 8, 0, 0]} name="Income" />
            <Bar dataKey="expenses" fill="hsl(10, 75%, 60%)" radius={[8, 8, 0, 0]} name="Expenses" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
