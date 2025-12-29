import { useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SpendingByCategory } from '@/components/reports/SpendingByCategory';
import { IncomeVsExpense } from '@/components/reports/IncomeVsExpense';
import { MonthlyTrends } from '@/components/reports/MonthlyTrends';

export function Reports() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleExport = (format: 'csv' | 'pdf') => {
    console.log(`Exporting as ${format}`);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-headline text-3xl font-bold text-foreground">Reports</h1>
          <p className="text-muted-foreground mt-2">
            Detailed analytics and insights into your finances.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => handleExport('csv')}
            className="bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground"
          >
            <Download className="h-4 w-4 mr-2" strokeWidth={1.5} />
            Export CSV
          </Button>
          <Button
            variant="outline"
            onClick={() => handleExport('pdf')}
            className="bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground"
          >
            <Download className="h-4 w-4 mr-2" strokeWidth={1.5} />
            Export PDF
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        <SpendingByCategory />
        <IncomeVsExpense />
        <MonthlyTrends />
      </div>
    </div>
  );
}
