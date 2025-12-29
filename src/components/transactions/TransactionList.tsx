import { ArrowUpRight, ArrowDownRight, Receipt } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useTransactions } from '@/context/TransactionContext';
import { format } from 'date-fns';

export function TransactionList() {
  const { transactions } = useTransactions();

  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  if (sortedTransactions.length === 0) {
    return (
      <Card className="bg-card border-border p-12">
        <div className="flex flex-col items-center justify-center text-center">
          <Receipt className="h-16 w-16 text-muted-foreground mb-4" strokeWidth={1} />
          <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
            No transactions yet
          </h3>
          <p className="text-muted-foreground max-w-md">
            Start tracking your finances by adding your first transaction.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {sortedTransactions.map((transaction) => (
        <Card
          key={transaction.id}
          className="bg-card border-border p-4 hover:bg-accent/50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className={`rounded-lg p-3 ${
                  transaction.type === 'income'
                    ? 'bg-chart-income/10'
                    : 'bg-chart-expense/10'
                }`}
              >
                {transaction.type === 'income' ? (
                  <ArrowUpRight className="h-5 w-5 text-chart-income" strokeWidth={1.5} />
                ) : (
                  <ArrowDownRight className="h-5 w-5 text-chart-expense" strokeWidth={1.5} />
                )}
              </div>
              <div>
                <p className="font-medium text-foreground">{transaction.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-muted-foreground">
                    {transaction.category}
                  </span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">
                    {format(new Date(transaction.date), 'MMM d, yyyy')}
                  </span>
                </div>
                {transaction.notes && (
                  <p className="text-sm text-muted-foreground mt-1">{transaction.notes}</p>
                )}
              </div>
            </div>
            <div className="text-right">
              <span
                className={`text-xl font-bold font-mono ${
                  transaction.type === 'income' ? 'text-chart-income' : 'text-chart-expense'
                }`}
              >
                {transaction.type === 'income' ? '+' : '-'}$
                {transaction.amount.toFixed(2)}
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
