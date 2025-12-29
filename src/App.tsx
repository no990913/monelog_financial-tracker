import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { AppShell } from '@/components/layout/AppShell';
import { Dashboard } from '@/pages/Dashboard';
import { Transactions } from '@/pages/Transactions';
import { Goals } from '@/pages/Goals';
import { Reports } from '@/pages/Reports';
import { Settings } from '@/pages/Settings';
import { TransactionProvider } from '@/context/TransactionContext';
import { GoalProvider } from '@/context/GoalContext';

function App() {
  return (
    <Router>
      <TransactionProvider>
        <GoalProvider>
          <AppShell>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </AppShell>
          <Toaster />
        </GoalProvider>
      </TransactionProvider>
    </Router>
  );
}

export default App;
