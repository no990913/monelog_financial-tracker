import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Receipt, Target, BarChart3, Settings, X, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/transactions', label: 'Transactions', icon: Receipt },
  { path: '/goals', label: 'Goals', icon: Target },
  { path: '/reports', label: 'Reports', icon: BarChart3 },
  { path: '/settings', label: 'Settings', icon: Settings },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-900/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-primary transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Logo and close button */}
          <div className="flex h-16 items-center justify-between px-6">
            <h1 className="font-headline text-xl font-bold text-primary-foreground">
              Monelog
            </h1>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden bg-transparent text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
              onClick={onClose}
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </Button>
          </div>

          <Separator className="bg-secondary" />

          {/* Navigation */}
          <nav className="flex-1 space-y-2 px-4 py-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-secondary text-secondary-foreground'
                      : 'text-primary-foreground hover:bg-secondary/80 hover:text-secondary-foreground'
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Separator className="bg-secondary" />

          {/* User profile */}
          <div className="p-4">
            <div className="flex items-center gap-3 rounded-lg bg-secondary/50 p-3">
              <Avatar>
                <AvatarImage src="" alt="User" />
                <AvatarFallback className="bg-tertiary text-tertiary-foreground">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-primary-foreground truncate">
                  John Doe
                </p>
                <p className="text-xs text-primary-foreground/80 truncate">
                  john@example.com
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="bg-transparent text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
              >
                <LogOut className="h-4 w-4" strokeWidth={1.5} />
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
