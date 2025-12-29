import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TransactionList } from '@/components/transactions/TransactionList';
import { TransactionFormModal } from '@/components/transactions/TransactionFormModal';
import { TransactionFilters } from '@/components/transactions/TransactionFilters';

export function Transactions() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-headline text-3xl font-bold text-foreground">Transactions</h1>
          <p className="text-muted-foreground mt-2">
            Manage and track all your financial transactions.
          </p>
        </div>
        <Button
          onClick={() => setShowModal(true)}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Plus className="h-4 w-4 mr-2" strokeWidth={1.5} />
          Add Transaction
        </Button>
      </div>

      <TransactionFilters />
      <TransactionList />

      <TransactionFormModal open={showModal} onOpenChange={setShowModal} />
    </div>
  );
}
