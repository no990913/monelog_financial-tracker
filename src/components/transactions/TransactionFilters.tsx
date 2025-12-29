import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export function TransactionFilters() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex-1 min-w-[200px] space-y-2">
        <Label htmlFor="filter-type" className="text-foreground">Type</Label>
        <Select defaultValue="all">
          <SelectTrigger id="filter-type" className="bg-background text-foreground border-border">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-popover text-popover-foreground">
            <SelectItem value="all" className="text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer">All</SelectItem>
            <SelectItem value="income" className="text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer">Income</SelectItem>
            <SelectItem value="expense" className="text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer">Expense</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1 min-w-[200px] space-y-2">
        <Label htmlFor="filter-category" className="text-foreground">Category</Label>
        <Select defaultValue="all">
          <SelectTrigger id="filter-category" className="bg-background text-foreground border-border">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-popover text-popover-foreground">
            <SelectItem value="all" className="text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer">All Categories</SelectItem>
            <SelectItem value="food" className="text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer">Food & Dining</SelectItem>
            <SelectItem value="transport" className="text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer">Transportation</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1 min-w-[200px] space-y-2">
        <Label htmlFor="filter-period" className="text-foreground">Period</Label>
        <Select defaultValue="all">
          <SelectTrigger id="filter-period" className="bg-background text-foreground border-border">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-popover text-popover-foreground">
            <SelectItem value="all" className="text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer">All Time</SelectItem>
            <SelectItem value="month" className="text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer">This Month</SelectItem>
            <SelectItem value="quarter" className="text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer">This Quarter</SelectItem>
            <SelectItem value="year" className="text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer">This Year</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
