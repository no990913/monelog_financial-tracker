import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GoalCard } from '@/components/goals/GoalCard';
import { GoalFormModal } from '@/components/goals/GoalFormModal';
import { useGoals } from '@/context/GoalContext';

export function Goals() {
  const [showModal, setShowModal] = useState(false);
  const { goals } = useGoals();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-headline text-3xl font-bold text-foreground">Financial Goals</h1>
          <p className="text-muted-foreground mt-2">
            Set and track your savings and spending goals.
          </p>
        </div>
        <Button
          onClick={() => setShowModal(true)}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Plus className="h-4 w-4 mr-2" strokeWidth={1.5} />
          Create Goal
        </Button>
      </div>

      {goals.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-4 bg-card border border-border rounded-lg">
          <Target className="h-16 w-16 text-muted-foreground mb-4" strokeWidth={1} />
          <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
            No goals yet
          </h3>
          <p className="text-muted-foreground text-center mb-6 max-w-md">
            Start setting financial goals to track your progress and achieve your targets.
          </p>
          <Button
            onClick={() => setShowModal(true)}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Plus className="h-4 w-4 mr-2" strokeWidth={1.5} />
            Create Your First Goal
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>
      )}

      <GoalFormModal open={showModal} onOpenChange={setShowModal} />
    </div>
  );
}
