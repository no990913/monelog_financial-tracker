import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useGoals } from '@/context/GoalContext';
import { useToast } from '@/hooks/use-toast';

interface GoalFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const categories = [
  'Savings',
  'Investment',
  'Emergency Fund',
  'Vacation',
  'Education',
  'Home',
  'Car',
  'Other',
];

export function GoalFormModal({ open, onOpenChange }: GoalFormModalProps) {
  const { addGoal } = useGoals();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    target: '',
    current: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.category || !formData.target) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    addGoal({
      name: formData.name,
      category: formData.category,
      target: parseFloat(formData.target),
      current: formData.current ? parseFloat(formData.current) : 0,
    });

    toast({
      title: 'Success',
      description: 'Goal created successfully',
    });

    setFormData({
      name: '',
      category: '',
      target: '',
      current: '',
    });

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-popover text-popover-foreground sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-foreground">Create Financial Goal</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="goal-name" className="text-foreground">Goal Name</Label>
            <Input
              id="goal-name"
              placeholder="e.g., Emergency Fund"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background text-foreground border-border"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="goal-category" className="text-foreground">Category</Label>
            <Select
              value={formData.category}
              onValueChange={(value) => setFormData({ ...formData, category: value })}
            >
              <SelectTrigger id="goal-category" className="bg-background text-foreground border-border">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="bg-popover text-popover-foreground">
                {categories.map((category) => (
                  <SelectItem key={category} value={category} className="text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer">
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="goal-target" className="text-foreground">Target Amount</Label>
            <Input
              id="goal-target"
              type="number"
              step="0.01"
              placeholder="0.00"
              value={formData.target}
              onChange={(e) => setFormData({ ...formData, target: e.target.value })}
              className="bg-background text-foreground border-border"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="goal-current" className="text-foreground">Current Amount (Optional)</Label>
            <Input
              id="goal-current"
              type="number"
              step="0.01"
              placeholder="0.00"
              value={formData.current}
              onChange={(e) => setFormData({ ...formData, current: e.target.value })}
              className="bg-background text-foreground border-border"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
              Create Goal
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
