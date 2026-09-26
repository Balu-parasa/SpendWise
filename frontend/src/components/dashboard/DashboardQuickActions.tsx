import React from 'react';
import { PlusCircle, Wallet, RefreshCw, Tag } from 'lucide-react';

export const DashboardQuickActions: React.FC = () => {
  const actions = [
    { id: 'expense', icon: <PlusCircle size={18} />, label: 'Add Expense', color: 'var(--color-primary)' },
    { id: 'budget', icon: <Wallet size={18} />, label: 'Add Budget', color: 'var(--color-success)' },
    { id: 'subscription', icon: <RefreshCw size={18} />, label: 'Add Subscription', color: 'var(--color-warning)' },
    { id: 'category', icon: <Tag size={18} />, label: 'Add Category', color: 'var(--color-danger)' },
  ];

  const triggerAction = (actionId: string) => {
    const event = new CustomEvent('spendwise:quick-add', { detail: { action: actionId } });
    window.dispatchEvent(event);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
      {actions.map(action => (

      ))}
    </div>
  );
};
