import { createContext, useContext, useState, ReactNode } from 'react';
import type { Transaction } from '@/types';

interface TransactionContextType {
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'income',
    amount: 5000,
    category: 'Salary',
    description: 'Monthly Salary',
    date: '2024-01-15',
    notes: '',
  },
  {
    id: '2',
    type: 'expense',
    amount: 1200,
    category: 'Bills & Utilities',
    description: 'Rent Payment',
    date: '2024-01-01',
    notes: '',
  },
  {
    id: '3',
    type: 'expense',
    amount: 450,
    category: 'Food & Dining',
    description: 'Groceries',
    date: '2024-01-10',
    notes: 'Weekly shopping',
  },
  {
    id: '4',
    type: 'expense',
    amount: 80,
    category: 'Transportation',
    description: 'Gas',
    date: '2024-01-12',
    notes: '',
  },
  {
    id: '5',
    type: 'income',
    amount: 500,
    category: 'Investment',
    description: 'Stock Dividends',
    date: '2024-01-20',
    notes: '',
  },
];

export function TransactionProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions);

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString(),
    };
    setTransactions((prev) => [newTransaction, ...prev]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransactions must be used within TransactionProvider');
  }
  return context;
}
