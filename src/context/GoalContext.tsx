import { createContext, useContext, useState, ReactNode } from 'react';
import type { Goal } from '@/types';

interface GoalContextType {
  goals: Goal[];
  addGoal: (goal: Omit<Goal, 'id'>) => void;
}

const GoalContext = createContext<GoalContextType | undefined>(undefined);

const mockGoals: Goal[] = [
  {
    id: '1',
    name: 'Emergency Fund',
    category: 'Savings',
    target: 10000,
    current: 6500,
  },
  {
    id: '2',
    name: 'Vacation Fund',
    category: 'Vacation',
    target: 5000,
    current: 2300,
  },
  {
    id: '3',
    name: 'New Car',
    category: 'Car',
    target: 25000,
    current: 8000,
  },
];

export function GoalProvider({ children }: { children: ReactNode }) {
  const [goals, setGoals] = useState<Goal[]>(mockGoals);

  const addGoal = (goal: Omit<Goal, 'id'>) => {
    const newGoal: Goal = {
      ...goal,
      id: Date.now().toString(),
    };
    setGoals((prev) => [...prev, newGoal]);
  };

  return (
    <GoalContext.Provider value={{ goals, addGoal }}>
      {children}
    </GoalContext.Provider>
  );
}

export function useGoals() {
  const context = useContext(GoalContext);
  if (!context) {
    throw new Error('useGoals must be used within GoalProvider');
  }
  return context;
}
