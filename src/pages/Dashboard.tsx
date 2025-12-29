import { useEffect } from 'react';
import { BalanceSummaryCard } from '@/components/dashboard/BalanceSummaryCard';
import { CategoryChartCard } from '@/components/dashboard/CategoryChartCard';
import { TrendChartCard } from '@/components/dashboard/TrendChartCard';
import { GoalProgressCard } from '@/components/dashboard/GoalProgressCard';
import { RecentTransactions } from '@/components/dashboard/RecentTransactions';

export function Dashboard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back! Here's your financial overview.
        </p>
      </div>

      <BalanceSummaryCard />

      <div className="grid gap-6 lg:grid-cols-2">
        <CategoryChartCard />
        <TrendChartCard />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <GoalProgressCard />
        <RecentTransactions />
      </div>
    </div>
  );
}
