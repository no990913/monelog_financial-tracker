export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
  date: string;
  notes: string;
}

export interface Goal {
  id: string;
  name: string;
  category: string;
  target: number;
  current: number;
}
