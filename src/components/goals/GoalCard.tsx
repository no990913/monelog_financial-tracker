import { Target, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import type { Goal } from '@/types';

interface GoalCardProps {
  goal: Goal;
}

export function GoalCard({ goal }: GoalCardProps) {
  const progress = (goal.current / goal.target) * 100;
  const remaining = goal.target - goal.current;

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg p-2 bg-chart-goal/10">
              <Target className="h-5 w-5 text-chart-goal" strokeWidth={1.5} />
            </div>
            <CardTitle className="text-lg text-foreground">{goal.name}</CardTitle>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
            {goal.category}
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-semibold text-foreground">{progress.toFixed(0)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Current</p>
            <p className="text-lg font-bold text-foreground font-mono">
              ${goal.current.toFixed(0)}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Target</p>
            <p className="text-lg font-bold text-foreground font-mono">
              ${goal.target.toFixed(0)}
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-border">
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="h-4 w-4 text-chart-goal" strokeWidth={1.5} />
            <span className="text-muted-foreground">
              ${remaining.toFixed(0)} remaining
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
