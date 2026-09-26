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
              <button
          key={action.id}
          onClick={() => triggerAction(action.id)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '0.875rem 1rem',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            color: 'var(--color-text-primary)',
            fontSize: '13px',
            fontWeight: 'var(--font-weight-medium)',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)',
            transition: 'all var(--transition-fast)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = action.color;
            e.currentTarget.style.color = action.color;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-border)';
            e.currentTarget.style.color = 'var(--color-text-primary)';
          }}
        >
          {action.icon}
          {action.label}
        </button>

      ))}
    </div>
  );
};
