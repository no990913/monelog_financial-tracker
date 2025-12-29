import { useState } from 'react';
import { Menu, Search, Plus, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TransactionFormModal } from '@/components/transactions/TransactionFormModal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface TopBarProps {
  onMenuClick: () => void;
}

export function TopBar({ onMenuClick }: TopBarProps) {
  const [showTransactionModal, setShowTransactionModal] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background px-4 sm:px-6 lg:px-8">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
        onClick={onMenuClick}
      >
        <Menu className="h-6 w-6" strokeWidth={1.5} />
      </Button>

      <div className="flex-1 flex items-center gap-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" strokeWidth={1.5} />
          <Input
            type="search"
            placeholder="Search transactions..."
            className="pl-10 bg-gray-50 border-border text-foreground"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          onClick={() => setShowTransactionModal(true)}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Plus className="h-4 w-4 mr-2" strokeWidth={1.5} />
          <span className="hidden sm:inline">Add Transaction</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground relative">
              <Bell className="h-5 w-5" strokeWidth={1.5} />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-warning"></span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64 bg-popover text-popover-foreground">
            <DropdownMenuItem className="text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Budget Alert</p>
                <p className="text-xs text-muted-foreground">
                  You've reached 80% of your monthly budget
                </p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Goal Achieved</p>
                <p className="text-xs text-muted-foreground">
                  Congratulations! You've reached your savings goal
                </p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <TransactionFormModal
        open={showTransactionModal}
        onOpenChange={setShowTransactionModal}
      />
    </header>
  );
}
