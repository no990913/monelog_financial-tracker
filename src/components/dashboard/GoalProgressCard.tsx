import { Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useGoals } from '@/context/GoalContext';

export function GoalProgressCard() {
  const { goals } = useGoals();

  if (goals.length === 0) {
    return (
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Financial Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Target className="h-12 w-12 text-muted-foreground mb-3" strokeWidth={1} />
            <p className="text-muted-foreground">No goals set yet</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Financial Goals</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {goals.slice(0, 3).map((goal) => {
          const progress = (goal.current / goal.target) * 100;
          return (
            <div key={goal.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-chart-goal" strokeWidth={1.5} />
                  <span className="font-medium text-foreground">{goal.name}</span>
                </div>
                <span className="text-sm text-muted-foreground font-mono">
                  ${goal.current.toFixed(0)} / ${goal.target.toFixed(0)}
                </span>
              </div>
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-muted-foreground">
                {progress.toFixed(0)}% complete
              </p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
