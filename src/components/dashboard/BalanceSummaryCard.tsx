import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTransactions } from '@/context/TransactionContext';

export function BalanceSummaryCard() {
  const { transactions } = useTransactions();

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const netBalance = totalIncome - totalExpenses;

  const summaryItems = [
    {
      title: 'Total Income',
      amount: totalIncome,
      icon: TrendingUp,
      color: 'text-chart-income',
      bgColor: 'bg-chart-income/10',
    },
    {
      title: 'Total Expenses',
      amount: totalExpenses,
      icon: TrendingDown,
      color: 'text-chart-expense',
      bgColor: 'bg-chart-expense/10',
    },
    {
      title: 'Net Balance',
      amount: netBalance,
      icon: Wallet,
      color: 'text-chart-goal',
      bgColor: 'bg-chart-goal/10',
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {summaryItems.map((item) => {
        const Icon = item.icon;
        return (
          <Card key={item.title} className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {item.title}
              </CardTitle>
              <div className={`rounded-lg p-2 ${item.bgColor}`}>
                <Icon className={`h-5 w-5 ${item.color}`} strokeWidth={1.5} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground font-mono">
                ${item.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
